'use client';

import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'KubeRTSec — Kubernetes Runtime Security Platform',
    description:
      'eBPF-powered runtime security system for Kubernetes that intercepts execve syscalls to detect and stop threats (reverse shells, crypto miners, container escapes) in real time. Includes rule engine, enforcement (SIGKILL), WebSocket alerts, and full observability stack.',
    technologies: [
      'Go',
      'eBPF',
      'Kubernetes',
      'Docker',
      'React',
      'Prometheus',
      'Grafana',
      'Jaeger',
    ],
    github: 'https://github.com/Debasish-87/kubertsec',
  },
  {
    title: 'ZeroTrustOps — CI/CD Security Enforcement Platform',
    description:
      'Self-hosted DevSecOps platform that scans every Git push and blocks insecure infrastructure before deployment. Built with custom SecTL engine, enforcing policy-based CI/CD gates with real-time feedback, secrets detection, and IaC scanning.',
    technologies: [
      'Go',
      'Python',
      'FastAPI',
      'React',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'Gitleaks',
    ],
    github: 'https://github.com/Debasish-87/ZeroTrustOps-Platform',
  },
  {
    title: 'K3s + Istio Canary Deployment System',
    description:
      'Cloud-native deployment system using K3s and Istio to implement traffic-splitting canary releases with full observability. Includes Prometheus, Grafana, Jaeger, and Kiali for real-time traffic analysis and release validation.',
    technologies: [
      'Kubernetes (K3s)',
      'Istio',
      'Docker',
      'Prometheus',
      'Grafana',
      'Jaeger',
      'Kiali',
    ],
    github:
      'https://github.com/Debasish-87/k3s-istio-canary-deployment',
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
            Systems & Security Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Production-grade systems across Kubernetes runtime security, CI/CD enforcement, and cloud-native infrastructure
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
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-20 mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                <CodeBracketIcon className="h-10 w-10 text-white" />
              </div>

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

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <CodeBracketIcon className="h-5 w-5 mr-2" />
                View Code
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
