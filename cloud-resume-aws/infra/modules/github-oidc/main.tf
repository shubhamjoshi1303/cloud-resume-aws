locals {
  name_prefix = "${var.project_name}-${var.environment}"
}

resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]

  tags = {
    Name        = "${local.name_prefix}-github-oidc"
    Project     = var.project_name
    Environment = var.environment
  }
}

data "aws_iam_policy_document" "github_actions_assume_role" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:${var.github_repo}:ref:refs/heads/main"]
    }
  }
}

resource "aws_iam_role" "github_actions" {
  name               = "${local.name_prefix}-github-actions"
  assume_role_policy = data.aws_iam_policy_document.github_actions_assume_role.json

  tags = {
    Name        = "${local.name_prefix}-github-actions"
    Project     = var.project_name
    Environment = var.environment
  }
}

data "aws_iam_policy_document" "frontend_deploy" {
  statement {
    sid       = "AllowListFrontendBucket"
    effect    = "Allow"
    actions   = ["s3:ListBucket"]
    resources = ["arn:aws:s3:::${var.s3_bucket_name}"]
  }

  statement {
    sid    = "AllowFrontendObjectDeployment"
    effect = "Allow"

    actions = [
      "s3:DeleteObject",
      "s3:GetObject",
      "s3:PutObject",
    ]

    resources = ["arn:aws:s3:::${var.s3_bucket_name}/*"]
  }

  statement {
    sid       = "AllowCloudFrontInvalidation"
    effect    = "Allow"
    actions   = ["cloudfront:CreateInvalidation"]
    resources = [var.cloudfront_distribution_arn]
  }
}

resource "aws_iam_policy" "frontend_deploy" {
  name   = "${local.name_prefix}-frontend-deploy"
  policy = data.aws_iam_policy_document.frontend_deploy.json

  tags = {
    Name        = "${local.name_prefix}-frontend-deploy"
    Project     = var.project_name
    Environment = var.environment
  }
}

resource "aws_iam_role_policy_attachment" "frontend_deploy" {
  role       = aws_iam_role.github_actions.name
  policy_arn = aws_iam_policy.frontend_deploy.arn
}
