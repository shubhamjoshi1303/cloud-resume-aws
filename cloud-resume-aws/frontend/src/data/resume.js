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
    "Cloud & AI Engineer with experience building backend systems, serverless AWS architectures, and applied machine learning solutions. Skilled in developing scalable cloud-native applications using Python, AWS, Docker, and distributed systems principles. Experienced in ML pipelines, CI/CD workflows, cloud-native deployment, and high-availability system design, with a focus on reliability, scalability, and AI-driven application development.",
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
        "Architected a Serverless Reference Architecture using API Gateway, Lambda, and DynamoDB, implementing an event-driven design to handle high-concurrency traffic with seamless auto-scaling.",
        "Optimized DynamoDB CRUD operations by refining schema design and indexing, significantly reducing request latency and ensuring a cost-efficient, pay-per-use model aligned with the AWS Well-Architected Framework.",
        "Hardened system security and observability by implementing fine-grained IAM policies and CloudWatch Alarms to automate error detection and prevent unauthorized access."
      ]
    }
  ],
  projects: [
    {
      title:
        "Highly Available Multi-AZ Web Application (Medicare Hub) | AWS Architecture & Reliability Engineering",
      date: "December 2025",
      href: "https://github.com/your-github-username/medicare-hub",
      bullets: [
        "Architected a multi-AZ using ALB and EC2 Auto Scaling to eliminate single points of failure and ensure seamless application recovery across availability zones.",
        "Deployed Resilient Data Tier with Multi-AZ RDS for synchronous replication and EFS for persistent shared storage, ensuring zero data loss (RPO) and minimal RTO."
      ]
    },
    {
      title:
        "Electricity Price Prediction Using SARIMAX & Gradient Boosting | Python, ML Pipelines",
      date: "April 2025",
      href: "https://github.com/your-github-username/electricity-price-prediction",
      bullets: [
        "Engineered a hybrid forecasting pipeline combining SARIMAX and Gradient Boosting to predict CAISO market prices from solar, wind, and temperature data, achieving a 15-day MAE of 16.79 by modeling non-linear residuals."
      ]
    },
    {
      title:
        "Personalized Movie Recommender Using Neo4j Knowledge Graphs | Data Engineering, Graph ML",
      date: "December 2024",
      href: "https://github.com/your-github-username/movie-recommender-neo4j",
      bullets: [
        "Engineered and deployed a scalable knowledge graph system from a 7.5GB IMDb dataset; optimized data ingestion using Pandas and Dask to reduce storage by 99%.",
        "Generated 128-dimensional embeddings for 160K+ nodes using Node2Vec; utilized Cypher queries to project graph data.",
        "Developed a recommendation engine by computing cosine similarity across movie embeddings, achieving >0.90 similarity scores and optimizing batch processing via the Neo4j APOC plugin."
      ]
    },
    {
      title:
        "Automated Facial Recognition Attendance System | Python, OpenCV, MediaPipe",
      date: "November 2024",
      href: "https://github.com/your-github-username/facial-recognition-attendance",
      bullets: [
        "Implemented a real-time facial recognition attendance system using OpenCV and MediaPipe, supporting 20+ registered users and automating timestamped CSV logging across 100+ records.",
        "Developed a user enrollment workflow by capturing and storing facial images, enabling easy addition of new users through dataset updates."
      ]
    }
  ],
  skills:
    "Languages: Python, C, SQL | ML: PyTorch, scikit-learn, XGBoost, SARIMAX, Node2Vec | Cloud: AWS (EC2, Lambda, S3, DynamoDB, RDS, ALB, Route 53, IAM, CloudWatch) | Tools: Docker, Git, Linux, REST APIs, React",
  activities: [
    "Prepared and presented research papers on advanced CS topics; facilitated peer Q&A to clarify complex concepts.",
    "Member, Syracuse Kendo Club; participated in Intramural Soccer."
  ]
};
