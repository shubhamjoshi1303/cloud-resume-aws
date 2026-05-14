variable "project_name" {
  description = "Name prefix used for GitHub OIDC resources."
  type        = string
}

variable "environment" {
  description = "Deployment environment name."
  type        = string
}

variable "github_repo" {
  description = "GitHub repository in owner/name format allowed to assume the role."
  type        = string
}

variable "s3_bucket_name" {
  description = "Frontend S3 bucket name used for deployment."
  type        = string
}

variable "cloudfront_distribution_arn" {
  description = "CloudFront distribution ARN allowed for invalidations."
  type        = string
}
