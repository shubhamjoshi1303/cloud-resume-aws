output "site_url" {
  description = "HTTPS URL for the resume site."
  value       = module.static_site.site_url
}

output "s3_bucket_name" {
  description = "S3 bucket name for frontend assets."
  value       = module.static_site.s3_bucket_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID for the static site."
  value       = module.static_site.cloudfront_distribution_id
}

output "cloudfront_distribution_arn" {
  description = "CloudFront distribution ARN for the static site."
  value       = module.static_site.cloudfront_distribution_arn
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name."
  value       = module.static_site.cloudfront_domain_name
}

output "visitor_api_gateway_url" {
  description = "Base URL for the visitor counter HTTP API."
  value       = module.visitor_api.api_gateway_url
}

output "visitor_lambda_function_name" {
  description = "Visitor counter Lambda function name."
  value       = module.visitor_api.lambda_function_name
}

output "visitor_dynamodb_table_name" {
  description = "DynamoDB table used by the visitor counter."
  value       = module.visitor_api.dynamodb_table_name
}

output "github_actions_role_arn" {
  description = "IAM role ARN for GitHub Actions deployments."
  value       = module.github_oidc.github_actions_role_arn
}
