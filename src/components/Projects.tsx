'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'ZeroTrustOps – DevSecOps Platform',
    description: 'An end-to-end DevSecOps framework for Kubernetes environments, integrating CI/CD pipelines, GitOps workflows, and real-time runtime security with Falco and Kyverno. Built for secure, automated, and resilient cloud-native deployments.',
    technologies: ['Kubernetes', 'GitOps', 'Falco', 'Kyverno', 'CI/CD'],
    image: '/projects/zerotrustops.jpg',
    github: 'https://github.com/Debasish-87/ZeroTrustOps-Platform',
    live: 'https://zerotrustops-demo.com',
  },
  {
    title: 'GitOpsFlow – Kubernetes Auto CD',
    description: 'A GitOps-based continuous deployment pipeline using ArgoCD and Kustomize. This project automates the deployment of containerized static applications from GitHub with features like auto-sync, version control, and one-click bootstrap for test and production environments.',
    technologies: ['Docker', 'Kubernetes (Minikube)', 'ArgoCD', 'GitHub', 'Kustomize', 'Bash'],
    image: '/projects/scarecrow.jpg',
    github: 'https://github.com/Debasish-87/GitOpsFlow-Kubernetes-AutoCD',
    live: 'https://scarecrow-ai-demo.com',
  },
  {
    title: 'K3s + Istio Canary Deployment',
    description: 'Demonstrates intelligent traffic splitting between two microservice versions using K3s (lightweight Kubernetes) and Istio service mesh. Includes observability tooling with Grafana, Prometheus, Jaeger, and Kiali for monitoring and tracing.',
    technologies: ['Docker', 'Kubernetes (K3s)', 'ArgoCD', 'GitHub', 'Istio', 'Grafana', 'Prometheus', 'Kiali', 'Jaeger', 'Node.js', 'kubectl'],
    image: '/projects/scarecrow.jpg',
    github: 'https://github.com/Debasish-87/k3s-istio-canary-deployment',
    live: 'https://scarecrow-ai-demo.com',
  },
  {
    title: 'Terraform AWS EC2 CI/CD Deployment',
    description: 'A fully automated DevOps infrastructure project using Terraform and GitHub Actions to deploy a Spring Boot application on AWS EC2. Includes secure IAM configuration, environment-specific variables, S3 log storage, and automatic instance shutdown for cost control.',
    technologies: ['Terraform', 'AWS EC2', 'GitHub Actions', 'AWS S3', 'Shell Script', 'Java', 'Spring Boot', 'Postman', 'IAM', 'CI/CD', 'VPC'],
    image: '/projects/aws-devops.jpg',
    github: 'https://github.com/Debasish-87/tech_eazy_Debasish-87_aws_internship',
    live: '',
  },
  {
    title: 'Complete Observability System',
    description: 'A production-grade observability stack using Docker Compose to monitor a Python Flask app. Includes Prometheus for metrics, Loki and Promtail for centralized logging, Jaeger for distributed tracing, and Grafana for unified visualization.',
    technologies: ['Docker', 'Docker Compose', 'Flask', 'Prometheus', 'Loki', 'Promtail', 'Jaeger', 'Grafana', 'Python'],
    image: '/projects/observability-dashboard.jpg',
    github: 'https://github.com/Debasish-87/complete-observability-system',
    live: '',
  },
  {
    title: 'PII Protect System',
    description: 'A secure web application that detects and masks Personally Identifiable Information (PII) from uploaded images using OCR and AES encryption. Features manager-level access control, encrypted blob storage, and full compliance with data protection standards.',
    technologies: ['Django', 'Node.js', 'MySQL', 'Tesseract OCR', 'AES Encryption', 'HTML', 'CSS', 'JavaScript', 'Blob Storage'],
    image: '/projects/pii-protect.jpg',
    github: 'https://github.com/Debasish-87/pii-protection',
    live: '',
  }
];


export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing my work in cloud infrastructure and security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <CodeBracketIcon className="h-16 w-16 text-white opacity-50" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    <CodeBracketIcon className="h-5 w-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 