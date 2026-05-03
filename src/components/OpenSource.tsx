'use client';

import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

const contributions = [
  {
    project: 'Kubernetes Autoscaler (kubernetes/autoscaler)',
    description:
      'Fixed control-plane bug where node groups ignored configured minSize, causing silent under-provisioning in production clusters.',
    impact:
      'Restored correct scaling behavior · Merged upstream · Backported to release branches (1.32, 1.33)',
    link: 'https://github.com/kubernetes/autoscaler/pull/9506',
  },
  {
    project: 'Kubernetes Autoscaler (VPA Helm)',
    description:
      'Restored missing */scale RBAC in VPA Helm chart, enabling admission controller to correctly resolve CRD selectors.',
    impact:
      'Unblocked autoscaling behavior in Helm-based deployments · Fixed broken control-plane interaction',
    link: 'https://github.com/kubernetes/autoscaler/pull/9515',
  },
  {
    project: 'Falco (falcosecurity/libs)',
    description:
      'Fixed integer overflow in memory telemetry (VMSIZE/VMRSS) affecting processes >4GB.',
    impact:
      'Restored correctness of runtime security metrics · Eliminated overflow edge cases · Merged into production releases',
    link: 'https://github.com/falcosecurity/libs/pull/2930',
  },
  {
    project: 'Falco (falcosecurity/libs)',
    description:
      'Resolved file descriptor leak in libscap by enforcing error-path cleanup in syscall-level thread inspection.',
    impact:
      'Prevented resource leaks in long-running agents · Improved runtime stability',
    link: 'https://github.com/falcosecurity/libs/pull/2926',
  },
  {
    project: 'Helm (helm/helm)',
    description:
      'Improved OCI registry client correctness by aligning documentation with actual authentication and request behavior.',
    impact:
      'Reduced ambiguity in registry interactions · Improved developer reliability',
    link: 'https://github.com/helm/helm/pull/31973',
  },
];

export default function OpenSourceImpact() {
  return (
    <section id="open-source" className="py-20 bg-white dark:bg-black">
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
            Open Source Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Contributions to Kubernetes control-plane systems, autoscaling behavior, and distributed system reliability
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributions.map((item, index) => (
            <motion.div
              key={item.project}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >

              {/* ICON */}
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
                <CodeBracketIcon className="h-6 w-6 text-white" />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.project}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {item.description}
              </p>

              {/* 🔥 IMPACT */}
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-2">
                {item.impact}
              </p>

              {/* LINK */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800"
              >
                View Contribution
                <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
              </a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
