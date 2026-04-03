'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Co-Founder & Founding Backend Infrastructure Engineer',
    company: 'MarkOpen',
    period: 'Jan 2026 – Present',
    location: 'Bhubaneswar, India',
    responsibilities: [
      'Designed and built a production-grade backend and infrastructure stack handling high-concurrency workloads',
      'Developed modular Go backend architecture (routing, middleware, caching, observability layers)',
      'Designed REST APIs for authentication, shops, user workflows, and admin systems',
      'Optimized PostgreSQL queries and indexing for scalable performance under load',
      'Integrated Redis caching → reduced p95 latency from 120ms to 40ms',
      'Implemented OpenTelemetry tracing, Prometheus metrics, and Grafana dashboards',
      'Enabled distributed tracing (Jaeger) → reduced mean time to identify issues by ~40%',
      'Containerized full stack using Docker and docker-compose with observability stack',
      'Built production-ready system with health checks, graceful shutdown, and service orchestration',
      'Designed system with failure handling and graceful degradation across services',
    ],
  },
  {
    title: 'Cloud Infrastructure Engineer (Internship)',
    company: 'TechEazy Consulting',
    period: 'Jun 2025 – Dec 2025',
    location: 'Remote (India)',
    responsibilities: [
      'Designed Terraform-based infrastructure provisioning (VPC, EC2, IAM, S3) for multi-environment deployments',
      'Built CI/CD pipelines using GitHub Actions for automated dev → prod promotion',
      'Implemented deployment validation with health checks and retry logic',
      'Designed centralized logging pipeline with application and system logs stored in S3',
      'Built cost-optimization mechanisms including automated EC2 shutdown workflows',
      'Enabled environment isolation using Terraform workspaces',
    ],
  },
  {
    title: 'Cloud Infrastructure & DevOps Engineer (Internship)',
    company: 'Elevate Labs',
    period: 'May 2025 – Jun 2025',
    location: 'Remote (India)',
    responsibilities: [
      'Implemented Kubernetes-based canary deployments using Istio with controlled traffic splitting',
      'Built GitOps workflows using ArgoCD for automated deployment synchronization',
      'Designed full observability stack using Prometheus, Grafana, Loki, and Jaeger',
      'Developed CI/CD pipelines using GitHub Actions for build, test, and deployment automation',
      'Built self-healing infrastructure using Prometheus alerts and automated remediation',
      'Worked across containerized systems using Docker and Kubernetes (K3s/Minikube)',
    ],
  },
  {
    title: 'Systems & CI/CD Engineer (Early Stage)',
    company: 'Freelance / Upwork',
    period: 'Oct 2024 – Feb 2025',
    location: 'Remote',
    responsibilities: [
      'Designed CI/CD-driven systems integrating testing, deployment, and release signals',
      'Built early-stage decision systems converting pipeline signals into release readiness outcomes',
      'Implemented quality gates, risk-based validation, and failure analysis mechanisms',
      'Integrated automation systems with GitHub Actions, Jenkins, and GitOps workflows',
      'Worked with clients to improve deployment stability and release predictability',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building systems across CI/CD, Kubernetes infrastructure, and runtime-level execution environments
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
                  <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
