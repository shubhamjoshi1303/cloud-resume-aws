variable "project_name" {
  description = "Name prefix used for project resources."
  type        = string
}

variable "aws_region" {
  description = "AWS region for regional resources."
  type        = string
}

variable "domain_name" {
  description = "Primary domain name for the resume site."
  type        = string
}

variable "resume_subdomain" {
  description = "Subdomain used for the resume site."
  type        = string
}

variable "environment" {
  description = "Deployment environment name."
  type        = string
}

variable "github_repo" {
  description = "GitHub repository in owner/name format."
  type        = string
}

variable "lambda_runtime" {
  description = "Python runtime for the visitor counter Lambda."
  type        = string
}

variable "acm_certificate_arn" {
  description = "ACM certificate ARN for the CloudFront distribution. This certificate must be in us-east-1."
  type        = string
}

variable "hosted_zone_id" {
  description = "Route53 hosted zone ID for the domain."
  type        = string
}
