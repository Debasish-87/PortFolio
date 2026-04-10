'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
    title: 'Open Source Engineer (CNCF Ecosystem)',
    company: 'Cloud Native Computing Foundation (CNCF)',
    period: 'Jan 2026 – Present',
    location: 'Remote',
    highlights: [
      'Contributed to CNCF projects including Falco (runtime security), Helm, and Kubernetes',
      'Fixed integer overflow in Falco thread memory accounting (VMSIZE/VMRSS) by enforcing 64-bit arithmetic, preventing incorrect reporting for >4GB processes :contentReference[oaicite:0]{index=0}',
      'Resolved file descriptor leak in Falco libscap, improving reliability of syscall-level thread inspection',
      'Improved Helm registry client correctness and developer experience by refining documentation and behavior',
      'Enhanced Kubernetes documentation by removing deprecated API references and correcting node metrics guidance',
      'All contributions merged into production branches after maintainer review, CI validation, and approval',
    ],
  },
  {
    title: 'Backend & Infrastructure Engineer',
    company: 'MarkOpen',
    period: 'Jan 2025 – Present',
    location: 'Bhubaneswar, India',
    highlights: [
      'Built high-concurrency Go backend systems, reducing p95 latency from 120ms → 40ms (3x improvement)',
      'Designed modular architecture (routing, middleware, caching, observability) enabling scalable and maintainable services',
      'Implemented Redis-based caching and query optimization to significantly improve API response times under load',
      'Deployed full observability stack (OpenTelemetry, Prometheus, Grafana) for real-time system monitoring',
      'Enabled distributed tracing with Jaeger, reducing issue detection and debugging time by ~40%',
      'Designed failure-resilient systems with graceful degradation, improving system reliability under partial outages',
    ],
  },
  {
    title: 'Cloud Infrastructure Engineer',
    company: 'TechEazy Consulting',
    period: 'Jun 2025 – Dec 2025',
    location: 'Remote',
    highlights: [
      'Provisioned AWS infrastructure using Terraform (VPC, EC2, IAM, S3)',
      'Designed CI/CD pipelines enabling automated dev → production deployments',
      'Implemented deployment validation with health checks and retry logic',
      'Reduced cloud costs via automated EC2 lifecycle management',
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
      'Built GitOps workflows using ArgoCD for automated synchronization',
      'Designed observability stack (Prometheus, Grafana, Loki, Jaeger)',
      'Implemented alert-driven self-healing mechanisms',
      'Worked across Kubernetes (K3s/Minikube) and Docker environments',
    ],
  },
  // {
  //   title: 'Systems & CI/CD Engineer',
  //   company: 'Freelance / Upwork',
  //   period: 'Oct 2024 – Feb 2025',
  //   location: 'Remote',
  //   highlights: [
  //     'Designed CI/CD systems integrating deployment, validation, and release signals',
  //     'Built decision systems for release readiness and failure analysis',
  //     'Implemented quality gates and risk-based validation pipelines',
  //     'Improved deployment stability and release predictability for clients',
  //   ],
  // },
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
