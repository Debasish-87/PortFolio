'use client';

import { motion } from 'framer-motion';
// Removed unused: import { CodeBracketIcon } from '@heroicons/react/24/outline';
// Removed unused: const expertise = [...]

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A Cloud DevSecOps Engineer with expertise in designing secure, scalable, and automated cloud infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 flex items-center justify-center shadow-xl">
              <Image
                src="/img/Debasish.jpeg"
                alt="Profile"
                width={256}
                height={256}
                className="object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I&apos;m a results-driven Cloud DevSecOps Engineer with 3+ years of experience designing secure, scalable, and automated cloud infrastructure. I specialize in Zero Trust architecture, GitOps pipelines, and runtime threat detection.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Skilled across AWS, Azure, and GCP, I work with tools like ArgoCD, Kyverno, Terraform, and Kubernetes to build resilient, policy-driven cloud-native systems. Passionate about cloud security, observability, and secure-by-design engineering, I create systems that are compliant with CIS and NIST frameworks.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Let&apos;s build secure infrastructure that scales.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
