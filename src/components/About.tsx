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
            I build control-plane systems for cloud-native infrastructure — where decisions are made under real production constraints.
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
              My focus is system correctness: autoscaling behavior, scheduling interactions, and reliability — not just deploying infrastructure.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              I’ve contributed to Kubernetes Autoscaler and Falco, fixing production-impacting bugs in scaling behavior and runtime system correctness, now merged into upstream release branches.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              I build systems that operate under real-world conditions:
            </p>

            <ul className="text-lg text-gray-600 dark:text-gray-300 space-y-2 list-disc list-inside">
              <li>Autoscaling decisions under noisy and delayed metrics</li>
              <li>Failure handling: retries, idempotency, and backpressure</li>
              <li>Control-plane logic using CRDs, controllers, and reconciliation loops</li>
            </ul>

            {/* 🔥 SIGNATURE LINE */}
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
              I build systems that behave correctly under load — not just systems that “work”.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
