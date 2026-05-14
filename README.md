# Cloud Resume AWS

Starter repository for the Cloud Resume Challenge on AWS.

## Project Layout

- `frontend/` - React/Vite resume site.
- `backend/visitor-counter/` - Python Lambda visitor counter code.
- `infra/` - Terraform infrastructure code using small custom modules.
- `.github/workflows/` - Future CI/CD workflows.

## Infrastructure

Terraform code is scaffolded but intentionally does not create resources until you configure values and run Terraform.

```bash
cd infra
cp terraform.tfvars.example terraform.tfvars
terraform init
terraform plan
```

The infrastructure is split into custom modules:

- `static-site` for S3, CloudFront, DNS, and certificate resources.
- `visitor-api` for Lambda, DynamoDB, API Gateway, and IAM resources.
- `github-oidc` for GitHub Actions OIDC deployment roles.

No community Terraform modules are used.
