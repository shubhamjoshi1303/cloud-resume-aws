locals {
  name_prefix       = "${var.project_name}-${var.environment}"
  table_name        = "${local.name_prefix}-visitor-count"
  function_name     = "${local.name_prefix}-visitor-counter"
  lambda_source_dir = "${path.module}/../../../backend/visitor-counter"
  lambda_zip_path   = "${path.module}/visitor-counter.zip"
}

data "archive_file" "visitor_counter" {
  type        = "zip"
  source_dir  = local.lambda_source_dir
  output_path = local.lambda_zip_path

  excludes = [
    "__pycache__",
    "*.pyc",
    "dist",
  ]
}

resource "aws_dynamodb_table" "visitor_count" {
  name         = local.table_name
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }

  tags = {
    Name        = local.table_name
    Project     = var.project_name
    Environment = var.environment
  }
}

data "aws_iam_policy_document" "lambda_assume_role" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "lambda" {
  name               = "${local.name_prefix}-visitor-counter-lambda"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume_role.json

  tags = {
    Name        = "${local.name_prefix}-visitor-counter-lambda"
    Project     = var.project_name
    Environment = var.environment
  }
}

resource "aws_cloudwatch_log_group" "lambda" {
  name              = "/aws/lambda/${local.function_name}"
  retention_in_days = 14

  tags = {
    Name        = "/aws/lambda/${local.function_name}"
    Project     = var.project_name
    Environment = var.environment
  }
}

data "aws_iam_policy_document" "lambda_permissions" {
  statement {
    sid    = "AllowVisitorCounterDynamoDbAccess"
    effect = "Allow"

    actions = [
      "dynamodb:GetItem",
      "dynamodb:PutItem",
      "dynamodb:UpdateItem",
    ]

    resources = [aws_dynamodb_table.visitor_count.arn]
  }

  statement {
    sid    = "AllowLambdaLogging"
    effect = "Allow"

    actions = [
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]

    resources = ["${aws_cloudwatch_log_group.lambda.arn}:*"]
  }
}

resource "aws_iam_policy" "lambda_permissions" {
  name   = "${local.name_prefix}-visitor-counter-lambda"
  policy = data.aws_iam_policy_document.lambda_permissions.json

  tags = {
    Name        = "${local.name_prefix}-visitor-counter-lambda"
    Project     = var.project_name
    Environment = var.environment
  }
}

resource "aws_iam_role_policy_attachment" "lambda_permissions" {
  role       = aws_iam_role.lambda.name
  policy_arn = aws_iam_policy.lambda_permissions.arn
}

resource "aws_lambda_function" "visitor_counter" {
  function_name    = local.function_name
  role             = aws_iam_role.lambda.arn
  runtime          = var.lambda_runtime
  handler          = "app.lambda_handler"
  filename         = data.archive_file.visitor_counter.output_path
  source_code_hash = data.archive_file.visitor_counter.output_base64sha256

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.visitor_count.name
    }
  }

  depends_on = [
    aws_cloudwatch_log_group.lambda,
    aws_iam_role_policy_attachment.lambda_permissions,
  ]

  tags = {
    Name        = local.function_name
    Project     = var.project_name
    Environment = var.environment
  }
}

resource "aws_apigatewayv2_api" "visitor_counter" {
  name          = "${local.name_prefix}-visitor-api"
  protocol_type = "HTTP"

  cors_configuration {
    allow_headers = ["content-type"]
    allow_methods = ["GET"]
    allow_origins = ["*"]
  }

  tags = {
    Name        = "${local.name_prefix}-visitor-api"
    Project     = var.project_name
    Environment = var.environment
  }
}

resource "aws_apigatewayv2_integration" "visitor_counter" {
  api_id                 = aws_apigatewayv2_api.visitor_counter.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.visitor_counter.invoke_arn
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "views" {
  api_id    = aws_apigatewayv2_api.visitor_counter.id
  route_key = "GET /views"
  target    = "integrations/${aws_apigatewayv2_integration.visitor_counter.id}"
}

resource "aws_apigatewayv2_stage" "default" {
  api_id      = aws_apigatewayv2_api.visitor_counter.id
  name        = "$default"
  auto_deploy = true

  tags = {
    Name        = "${local.name_prefix}-visitor-api-default-stage"
    Project     = var.project_name
    Environment = var.environment
  }
}

resource "aws_lambda_permission" "allow_api_gateway" {
  statement_id  = "AllowExecutionFromApiGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.visitor_counter.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.visitor_counter.execution_arn}/*/*"
}
