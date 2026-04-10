'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
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
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I build enforcement systems for cloud-native infrastructure — where decisions are executed, not reported.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 shadow-xl">
              <Image
                src="/img/picture.png"
                alt="Debasish Mohanty"
                width={256}
                height={256}
                className="object-cover"
              />
            </div>

            {/* Decorative blobs */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-400 rounded-full blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I build systems that enforce security decisions across CI/CD pipelines and kernel-level runtime — turning signals into real-time action where it actually matters.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              My work operates at two critical layers:
              <br />• <span className="font-semibold">CI/CD Enforcement</span> — blocking insecure infrastructure before it reaches production  
              <br />• <span className="font-semibold">Runtime Security</span> — intercepting syscalls using eBPF to detect and terminate threats in real time
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              I’ve built kernel-level security systems processing <span className="font-semibold">8,000+ events/sec at &lt;2% CPU</span>, and policy-driven DevSecOps platforms enforcing <span className="font-semibold">70+ security rules</span> across Kubernetes, Terraform, and CI/CD workflows.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              Working across Kubernetes, eBPF, and distributed systems, I design platforms that operate directly within execution paths — not just observing systems, but controlling them.
            </p>

            {/* 🔥 SIGNATURE LINE */}
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
              I don’t build monitoring systems. I build enforcement systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
