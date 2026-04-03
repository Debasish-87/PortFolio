'use client';

import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  ShieldCheckIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const skills = [
  {
    category: 'Security & Enforcement Systems',
    description: 'Building systems that enforce decisions across CI/CD and runtime',
    icon: ShieldCheckIcon,
    items: [
      { name: 'CI/CD Enforcement Systems' },
      { name: 'Runtime Security (eBPF)' },
      { name: 'Syscall Interception & Process Control' },
      { name: 'Policy-Based Decision Engines' },
      { name: 'Release Governance Systems' },
    ],
  },
  {
    category: 'Kubernetes & Cloud-Native Infrastructure',
    description: 'Designing and operating containerized distributed systems',
    icon: ServerIcon,
    items: [
      { name: 'Kubernetes (K3s, Minikube)' },
      { name: 'Docker & Container Systems' },
      { name: 'Service Mesh (Istio)' },
      { name: 'AWS (EC2, S3, IAM)' },
      { name: 'Infrastructure as Code (Terraform)' },
    ],
  },
  {
    category: 'CI/CD & DevSecOps Enforcement',
    description: 'Automated pipelines with embedded security and deployment control',
    icon: CommandLineIcon,
    items: [
      { name: 'GitHub Actions' },
      { name: 'Jenkins' },
      { name: 'GitOps (ArgoCD)' },
      { name: 'IaC & Security Scanning (Trivy, Gitleaks)' },
      { name: 'Deployment Gates & Policy Enforcement' },
    ],
  },
  {
    category: 'Runtime Observability & Systems Insight',
    description: 'Monitoring, tracing, and debugging distributed systems',
    icon: CommandLineIcon,
    items: [
      { name: 'Prometheus & Grafana' },
      { name: 'Distributed Tracing (Jaeger)' },
      { name: 'Log-Based Debugging' },
      { name: 'System Behavior Analysis' },
      { name: 'Metrics & Alerting Systems' },
    ],
  },
  {
    category: 'Programming & Systems Engineering',
    description: 'Developing backend systems and infrastructure tooling',
    icon: CodeBracketIcon,
    items: [
      { name: 'Go' },
      { name: 'Python' },
      { name: 'Java' },
      { name: 'Bash / Shell Scripting' },
      { name: 'REST APIs & Backend Systems' },
    ],
  },
  {
    category: 'Systems Architecture & Design',
    description: 'Designing scalable, resilient, and observable architectures',
    icon: WrenchScrewdriverIcon,
    items: [
      { name: 'Microservices Architecture' },
      { name: 'Caching Systems (Redis)' },
      { name: 'Observability-Driven Design' },
      { name: 'Failure Handling & Resilience' },
      { name: 'Distributed System Design' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise in test automation, CI/CD quality engineering, and cloud-native QA platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {skill.description}
                </p>
                <div className="space-y-3">
                  {skill.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item.name}
                        </span>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {item.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 h-2 rounded-full"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 
