'use client';

import { motion } from 'framer-motion';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download my resume to explore my work in Quality Intelligence,
            CI/CD-driven automation, and cloud-native QA platforms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-col items-center space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                SDET / Quality Engineer
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Quality Intelligence for CI/CD-Driven Automation in Cloud-Native QA
              </p>
            </div>

            <div className="w-full border-t border-gray-200 dark:border-gray-700 my-4"></div>

            <div className="grid grid-cols-2 gap-6 w-full text-left">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Core Expertise
                </h4>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Automation Framework Engineering</li>
                  <li>• CI/CD Quality Gates & Release Readiness</li>
                  <li>• Risk-Based & Shift-Left Testing</li>
                  <li>• Cloud-Native Test Platforms</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Primary Tooling
                </h4>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Selenium · RestAssured · TestNG</li>
                  <li>• Allure · GitHub Actions · Jenkins</li>
                  <li>• Docker · Kubernetes · AWS</li>
                  <li>• Java · Python · Bash</li>
                </ul>
              </div>
            </div>

            <a
              href="/resume/Debasish-resume.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <DocumentTextIcon className="h-6 w-6 mr-2" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
