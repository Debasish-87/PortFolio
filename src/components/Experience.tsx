'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Co-Founder & Founding Backend Infrastructure Engineer',
    company: 'MarkOpen',
    period: 'Jan 2026 – Present',
    location: 'Bhubaneswar, India',
    highlights: [
      'Built production-grade backend and infrastructure handling concurrent workloads',
      'Designed modular Go architecture (routing, middleware, caching, observability)',
      'Reduced p95 latency from 120ms → 40ms using Redis caching',
      'Implemented OpenTelemetry + Prometheus + Grafana observability stack',
      'Enabled distributed tracing (Jaeger) → reduced issue detection time by ~40%',
      'Designed resilient system with graceful degradation and failure handling',
    ],
  },
  {
    title: 'Cloud Infrastructure Engineer',
    company: 'TechEazy Consulting',
    period: 'Jun 2025 – Dec 2025',
    location: 'Remote',
    highlights: [
      'Built Terraform-based AWS infrastructure (VPC, EC2, IAM, S3)',
      'Designed CI/CD pipelines for automated dev → prod deployments',
      'Implemented deployment validation with health checks and retry logic',
      'Reduced cloud costs via automated EC2 shutdown mechanisms',
      'Enabled environment isolation using Terraform workspaces',
    ],
  },
  {
    title: 'Cloud Infrastructure & DevOps Engineer',
    company: 'Elevate Labs',
    period: 'May 2025 – Jun 2025',
    location: 'Remote',
    highlights: [
      'Implemented Istio-based canary deployments with traffic splitting',
      'Built GitOps workflows using ArgoCD for automated sync',
      'Designed full observability stack (Prometheus, Grafana, Loki, Jaeger)',
      'Built self-healing systems using alert-driven remediation',
      'Worked across Kubernetes (K3s/Minikube) and Docker environments',
    ],
  },
  {
    title: 'Systems & CI/CD Engineer',
    company: 'Freelance / Upwork',
    period: 'Oct 2024 – Feb 2025',
    location: 'Remote',
    highlights: [
      'Designed CI/CD systems integrating deployment, validation, and release signals',
      'Built decision systems for release readiness and failure analysis',
      'Implemented quality gates and risk-based validation pipelines',
      'Improved deployment stability and release predictability for clients',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
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
            Building systems across Kubernetes infrastructure, CI/CD pipelines, and runtime-level execution environments
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
            >

              {/* HEADER */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              {/* HIGHLIGHTS */}
              <ul className="space-y-2">
                {exp.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    {item}
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
