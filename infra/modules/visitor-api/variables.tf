variable "project_name" {
  description = "Name prefix used for visitor API resources."
  type        = string
}

variable "environment" {
  description = "Deployment environment name."
  type        = string
}

variable "lambda_runtime" {
  description = "Python runtime for the visitor counter Lambda."
  type        = string
}
