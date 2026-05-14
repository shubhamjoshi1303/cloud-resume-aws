terraform {
  backend "s3" {
    bucket       = "shubham-terraform-state-cloud"
    key          = "cloud-resume/terraform.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}
