'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Open Source Engineer — Kubernetes Control Plane & Systems',
    company: 'Cloud Native Computing Foundation (CNCF)',
    period: 'Jan 2026 – Present',
    location: 'Remote',
    highlights: [
      'Contributed to Kubernetes Autoscaler, Falco, and Helm, focusing on control-plane correctness and system reliability',
      'Fixed Kubernetes Autoscaler bug where node groups ignored configured minSize, causing silent under-provisioning in production clusters',
      'Restored missing */scale RBAC in VPA Helm chart, enabling admission controller to correctly resolve CRD selectors',
      'Eliminated integer overflow in Falco memory telemetry (VMSIZE/VMRSS) using 64-bit arithmetic, restoring correctness for >4GB processes',
      'Resolved file descriptor leak in Falco libscap by enforcing error-path cleanup, preventing resource exhaustion in long-running agents',
      'Improved Helm OCI registry client correctness by aligning documentation with actual authentication and request behavior',
      'All contributions merged upstream and included in production release branches after maintainer review and CI validation',
    ],
  },
  {
    title: 'Cloud Infrastructure Engineer',
    company: 'TechEazy Consulting',
    period: 'Jun 2025 – July 2025',
    location: 'Remote',
    highlights: [
      'Provisioned AWS infrastructure using Terraform (VPC, EC2, IAM, S3) with environment isolation',
      'Designed CI/CD pipelines enabling automated dev → production deployment promotion',
      'Implemented deployment validation using health checks and retry mechanisms',
      'Optimized cloud costs via automated EC2 lifecycle management and scheduled shutdown systems',
      'Managed environment-specific configurations using Terraform workspaces',
    ],
  },
  {
    title: 'Cloud Infrastructure & Platform Engineer',
    company: 'Elevate Labs',
    period: 'May 2025 – Jun 2025',
    location: 'Remote',
    highlights: [
      'Implemented Istio-based canary deployments with traffic splitting and progressive rollout strategies',
      'Built GitOps workflows using ArgoCD for automated synchronization and deployment consistency',
      'Designed full observability stack using Prometheus, Grafana, Loki, and Jaeger',
      'Implemented alert-driven self-healing systems using Prometheus alerts and automation scripts',
      'Worked across containerized environments using Kubernetes (K3s/Minikube) and Docker',
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
