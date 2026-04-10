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
            Explore my work in CI/CD enforcement, Kubernetes infrastructure, and kernel-level runtime security systems
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

              {/* Header */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Cloud DevSecOps Engineer — Runtime Security
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  eBPF-based Runtime Security · CI/CD Enforcement · Kubernetes Systems
                </p>
              </div>

              <div className="w-full border-t border-gray-200 dark:border-gray-700 my-4"></div>

              {/* 🔥 Key Highlights (HIGH SIGNAL) */}
              <div className="w-full text-left">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Key Highlights
                </h4>
                <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Built eBPF runtime security agent processing <span className="font-semibold">8,000+ events/sec</span> at &lt;2% CPU</li>
                  <li>• Contributed to <span className="font-semibold">Falco (CNCF)</span> — fixes merged into production (v0.24.0)</li>
                  <li>• Designed CI/CD enforcement platform with <span className="font-semibold">70+ security rules</span></li>
                  <li>• Detects and terminates runtime threats (reverse shells, container escapes) in real time</li>
                </ul>
              </div>

              {/* 🔥 Core Focus */}
              <div className="w-full text-left">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Core Focus
                </h4>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Runtime Security (eBPF, Syscalls, Linux)</li>
                  <li>• DevSecOps & CI/CD Enforcement</li>
                  <li>• Kubernetes & Cloud Infrastructure</li>
                  <li>• Distributed Systems & Observability</li>
                </ul>
              </div>

              {/* CTA */}
              <a
                href="/resume/Debasish-Mohanty-CV.pdf"
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
