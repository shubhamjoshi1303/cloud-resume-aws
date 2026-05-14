variable "project_name" {
  description = "Name prefix used for GitHub OIDC resources."
  type        = string
}

variable "github_repository" {
  description = "GitHub repository in owner/name format allowed to assume the role."
  type        = string
}

variable "tags" {
  description = "Common tags applied to AWS resources."
  type        = map(string)
  default     = {}
}
