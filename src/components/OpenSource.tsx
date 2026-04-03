'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const contributions = [
  {
    project: 'Falco (falcosecurity/libs)',
    description:
      'Resolved a file descriptor leak in libscap by fixing error-path handling in scap_linux_get_threadlist. Verified zero memory leak using Heaptrack. Merged in v0.24.0.',
    link: 'https://github.com/falcosecurity/libs/pull/2926',
  },
  {
    project: 'Helm (helm/helm)',
    description:
      'Improved registry client correctness by fixing inconsistencies and enhancing implementation clarity.',
    link: 'https://github.com/helm/helm/pull/31973',
  },
  {
    project: 'Kubernetes (kubernetes/website)',
    description:
      'Removed deprecated API references and improved documentation accuracy for node metrics.',
    link: 'https://github.com/kubernetes/website/pull/54593',
  },
];

export default function OpenSourceImpact() {
  return (
    <section id="open-source" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributions.map((item, index) => (
            <motion.div
              key={item.project}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500">
                  <CodeBracketIcon className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.project}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {item.description}
                  </p>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800 dark:hover:text-indigo-300"
                    >
                      View Contribution
                      <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
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
