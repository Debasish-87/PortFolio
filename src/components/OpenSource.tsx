'use client';

import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

const contributions = [
  {
    project: 'Falco (falcosecurity/libs)',
    description:
      'Fixed a file descriptor leak in libscap by correcting error-path handling in scap_linux_get_threadlist.',
    impact: 'Eliminated memory leak · Verified via Heaptrack · Merged in v0.24.0',
    link: 'https://github.com/falcosecurity/libs/pull/2926',
  },
  {
    project: 'Helm (helm/helm)',
    description:
      'Improved registry client behavior by fixing inconsistencies and strengthening implementation correctness.',
    impact: 'Improved reliability of registry operations',
    link: 'https://github.com/helm/helm/pull/31973',
  },
  {
    project: 'Kubernetes (kubernetes/website)',
    description:
      'Removed deprecated API references and improved documentation accuracy for node metrics.',
    impact: 'Improved clarity for production users and contributors',
    link: 'https://github.com/kubernetes/website/pull/54593',
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
            Contributions to production-grade cloud-native and security infrastructure systems
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
