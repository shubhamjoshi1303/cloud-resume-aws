export const resume = {
  name: "Shubham Joshi",
  contact: [
    { 
      label: "shubhamjoshi.xyz",
      href: "https://shubhamjoshi.xyz"
     },
    {
      label: "shubhamjoshi2026@proton.me",
      href: "mailto:shubhamjoshi2026@proton.me"
    },
    { label: "Syracuse, NY" },
    {
      label: "www.linkedin.com/in/shubhamjoshi2025",
      href: "https://www.linkedin.com/in/shubhamjoshi2025",
      external: true
    }
  ],
  summary:
    "Cloud & AI Engineer with experience developing backend systems, serverless AWS applications, and applied machine learning solutions. Skilled in Python, AWS, and cloud-native architectures, with hands-on experience building Gen AI applications, ML pipelines, CI/CD workflows, distributed systems, and production deployment workflows.",
  education: {
    school: "Syracuse University | Syracuse, NY",
    degree: "Master of Science in Computer Science",
    date: "May 2025"
  },
  certifications: [
    {
      name: "AWS Certified AI Practitioner",
      verificationUrl:
        "https://www.credly.com/badges/fa38eb81-aacd-4a35-8100-11284d3b3932"
    },
    {
      name: "AWS Certified Solutions Architect Associate",
      verificationUrl:
        "https://www.credly.com/badges/a696309b-8afd-48c3-bcfb-fec68d9bacb4"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      verificationUrl:
        "https://www.credly.com/badges/76f114b4-38b4-4286-b465-44abd82bef83"
    }
  ],
  experience: [
    {
      title: "Cloud Research Intern | ECS, Syracuse University, Syracuse, NY",
      date: "July 2025 - Present",
      bullets: [
        "Engineered a serverless GenAI RAG assistant using React, API Gateway, AWS Lambda, and Amazon Bedrock to deliver grounded natural language responses from custom knowledge base documents.",
        "Architected a scalable retrieval pipeline leveraging Bedrock Knowledge Bases, Titan embeddings, vector search, and application-layer guardrails to improve contextual relevance and response reliability.",
        "Developed CI/CD and infrastructure-as-code workflows using GitHub Actions and Terraform, reducing deployment time by ~75% and enabling reproducible serverless AWS environments."
      ]
    }
  ],
  projects: [
{
  title:
    "Personalized Movie Recommender Using Neo4j Knowledge Graphs | Data Engineering, Graph ML",
  date: "April 2026",
  href: "https://movie.shubhamjoshi.xyz/",
  bullets: [
    "Built and deployed a graph-based movie recommender using Neo4j, Node2Vec, FastAPI, React, Docker, and AWS cloud infrastructure to generate personalized recommendations from ~7.5GB of IMDb relationship data.",
    "Generated 128-dimensional embeddings for 160K+ graph nodes using Neo4j Graph Data Science and engineered a cosine similarity recommendation engine for personalized graph-based recommendations.",
    "Deployed a cloud-hosted recommendation platform using EC2, Docker, Nginx, S3, CloudFront, and Route53."
  ]
},
{
  title:
    "CloudCart — Cloud-Native E-Commerce Platform | Distributed Systems, AWS, Microservices",
  date: "March 2026",
  href: "https://shop.shubhamjoshi.xyz/",
  bullets: [
    "Built and deployed a cloud-native e-commerce platform using React, FastAPI, Docker, ECS Fargate, DynamoDB, and PostgreSQL to support scalable product catalog and order management workflows.",
    "Designed a distributed microservices architecture with ECS Fargate, API Gateway, ALB, and Cognito-based JWT authentication to enable secure, horizontally scalable backend services.",
    "Deployed a globally accessible frontend using CloudFront, Route53, ACM, and private S3 hosting for secure content delivery."
  ]
},
{
  title:
    "Cloud Resume Challenge | AWS, Terraform, CI/CD",
  date: "January 2026",
  href: "https://github.com/shubhamjoshi1303/cloud-resume-aws",
  bullets: [
    "Built a serverless cloud-native portfolio platform using React, AWS Lambda, API Gateway, DynamoDB, S3, and CloudFront with a visitor tracking API and private S3 hosting through Origin Access Control (OAC).",
    "Implemented Terraform-based CI/CD workflows with GitHub Actions and OIDC federation to automate secure AWS deployments and reduce manual infrastructure provisioning."
  ]
},
{
  title:
    "Electricity Price Prediction Using SARIMAX & Gradient Boosting | Python, ML Pipelines",
  date: "April 2025",
  href: "https://github.com/shubhamjoshi1303/Electricity-Price-Forecasting-at-NP-15-Northern-California-",
  bullets: [
    "Developed a hybrid electricity price forecasting pipeline combining SARIMAX and Gradient Boosting to predict CAISO NP-15 market prices using solar, wind, and temperature datasets.",
    "Achieved a 15-day forecasting MAE of 16.79 by modeling seasonal trends and refining non-linear residual errors through hybrid statistical and machine learning techniques."
  ]
}

  ],
 skills:
  "Languages: Python, C, SQL, JavaScript | Frameworks: React, FastAPI, REST APIs | Cloud/DevOps: AWS (EC2, ECS, Lambda, API Gateway, S3, CloudFront, DynamoDB, RDS, Cognito, Route53), Docker, Terraform, GitHub Actions | AI/ML & Data: Amazon Bedrock, RAG, Neo4j, Node2Vec, PyTorch, scikit-learn, XGBoost, SARIMAX, pandas, PostgreSQL",
  activities: [
    "Prepared and presented research papers on advanced CS topics; facilitated peer Q&A to clarify complex concepts.",
    "Member, Syracuse Kendo Club; participated in Intramural Soccer."
  ]
};
