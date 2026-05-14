module "static_site" {
  source = "./modules/static-site"

  project_name        = var.project_name
  environment         = var.environment
  domain_name         = var.domain_name
  resume_subdomain    = var.resume_subdomain
  acm_certificate_arn = var.acm_certificate_arn
  hosted_zone_id      = var.hosted_zone_id
}

module "visitor_api" {
  source = "./modules/visitor-api"

  project_name   = var.project_name
  environment    = var.environment
  lambda_runtime = var.lambda_runtime
}

module "github_oidc" {
  source = "./modules/github-oidc"

  project_name                = var.project_name
  environment                 = var.environment
  github_repo                 = var.github_repo
  s3_bucket_name              = module.static_site.s3_bucket_name
  cloudfront_distribution_arn = module.static_site.cloudfront_distribution_arn
}
