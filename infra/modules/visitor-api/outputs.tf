output "api_gateway_url" {
  description = "Base URL for the visitor counter HTTP API."
  value       = aws_apigatewayv2_api.visitor_counter.api_endpoint
}

output "lambda_function_name" {
  description = "Visitor counter Lambda function name."
  value       = aws_lambda_function.visitor_counter.function_name
}

output "dynamodb_table_name" {
  description = "DynamoDB table used by the visitor counter."
  value       = aws_dynamodb_table.visitor_count.name
}
