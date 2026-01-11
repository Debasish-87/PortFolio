'use client';

import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'End-to-End Quality Intelligence Framework',
    description:
      'A production-grade Quality Intelligence platform that transforms UI, API, and CI/CD test execution into release-critical insights. Includes smoke and regression orchestration, Allure reporting, and CI/CD-driven quality visibility for predictable releases.',
    technologies: [
      'Java',
      'Selenium',
      'RestAssured',
      'TestNG',
      'Allure',
      'GitHub Actions',
      'CI/CD',
    ],
    image: '/projects/quality-intelligence.jpg',
    github:
      'https://github.com/Debasish-87/End-to-End-Quality-Intelligence-Framework',
    live: '',
  },
  {
    title: 'Full-Stack QA Automation Framework',
    description:
      'A production-grade full-stack automation framework supporting UI and API testing with POM, data-driven execution, database validation, and CI/CD integration to enable consistent and reliable test execution.',
    technologies: [
      'Java',
      'Selenium',
      'RestAssured',
      'TestNG',
      'Allure',
      'GitHub Actions',
      'Database Testing',
    ],
    image: '/projects/fullstack-qa.jpg',
    github:
      'https://github.com/Debasish-87/FullStack-QA-Automation-Framework',
    live: '',
  },
  {
    title: 'ZeroTrustOps – DevSecOps Platform',
    description:
      'A quality-aware DevSecOps platform for Kubernetes enabling secure CI/CD pipelines with GitOps, Policy-as-Code, runtime threat detection, and observability — supporting quality gates and release confidence.',
    technologies: [
      'Kubernetes',
      'GitOps',
      'Policy-as-Code',
      'Falco',
      'Kyverno',
      'CI/CD',
    ],
    image: '/projects/zerotrustops.jpg',
    github: 'https://github.com/Debasish-87/ZeroTrustOps-Platform',
    live: '',
  },
  {
    title: 'Polyglot CI/CD Engine',
    description:
      'A universal CI/CD automation engine for polyglot microservices (Java, Python, Node.js), providing standardized pipelines, test orchestration, and Kubernetes-native execution.',
    technologies: [
      'Jenkins',
      'GitHub Actions',
      'Tekton',
      'Kubernetes',
      'Python',
      'CI/CD',
    ],
    image: '/projects/polyglot-cicd.jpg',
    github: 'https://github.com/Debasish-87/Polyglot-CICD-Engine',
    live: '',
  },
  {
    title: 'GitOpsFlow – Kubernetes Auto CD',
    description:
      'A GitOps-driven continuous delivery pipeline using ArgoCD and Kubernetes to deploy applications directly from GitHub with auto-sync, drift detection, and stable environments for automation execution.',
    technologies: [
      'Docker',
      'Kubernetes',
      'ArgoCD',
      'GitOps',
      'Kustomize',
      'Bash',
    ],
    image: '/projects/gitopsflow.jpg',
    github:
      'https://github.com/Debasish-87/GitOpsFlow-Kubernetes-AutoCD',
    live: '',
  },
  {
    title: 'K3s + Istio Canary Deployment',
    description:
      'A cloud-native canary deployment setup demonstrating traffic splitting and release validation using Istio. Includes full observability with Prometheus, Grafana, Jaeger, and Kiali for quality verification under real traffic.',
    technologies: [
      'K3s',
      'Istio',
      'Canary Delivery',
      'Prometheus',
      'Grafana',
      'Jaeger',
      'Kiali',
    ],
    image: '/projects/istio-canary.jpg',
    github:
      'https://github.com/Debasish-87/k3s-istio-canary-deployment',
    live: '',
  },
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
            Production-grade Quality Intelligence platforms and CI/CD automation systems
            designed to enable predictable, release-ready cloud-native software.
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

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
