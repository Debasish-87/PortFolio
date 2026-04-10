'use client';

import { motion } from 'framer-motion';
import { ArrowDownIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-400 rounded-full blur-xl opacity-20 animate-blob animation-delay-4000 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >

          {/* NAME */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Debasish Mohanty
            </span>
          </motion.h1>

          {/* ROLE */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            Cloud DevSecOps Engineer — Runtime Security (eBPF)
          </motion.h2>

          {/* 🔥 STRONG POSITIONING */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I build systems that intercept and terminate threats at the syscall level using eBPF — enforcing security, not just observing it.
          </motion.p>

          {/* 🔥 CREDIBILITY */}
          <motion.p
            className="text-sm sm:text-md text-blue-600 dark:text-blue-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Contributor to Falco · Helm · Kubernetes
          </motion.p>

          {/* 🔥 MICRO STACK SIGNAL */}
          <motion.p
            className="text-xs sm:text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            eBPF Runtime Security · Syscall Interception · CI/CD Enforcement · Kubernetes · DevSecOps
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Systems I Built
            </a>

            <a
              href="/resume/DebasishResume.pdf"
              download
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-base sm:text-lg font-medium rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
            >
              <DocumentTextIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
              View Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 sm:bottom-16 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#projects"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
        >
          <ArrowDownIcon className="h-6 w-6 animate-bounce" />
        </a>
      </motion.div>

    </section>
  );
}
