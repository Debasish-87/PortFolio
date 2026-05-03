'use client';

import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  ServerIcon,
  CommandLineIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const skills = [
  {
    category: 'Kubernetes Control Plane',
    description: 'Designing and debugging control-plane components including autoscaling, controllers, and reconciliation loops',
    icon: ServerIcon,
    items: [
      'Kubernetes',
      'CRDs & Controllers',
      'Autoscaling',
      'Reconciliation Loops',
      'RBAC & Admission Control',
    ],
  },
  {
    category: 'Distributed Systems',
    description: 'Designing systems with failure handling, retries, and consistency guarantees under real-world conditions',
    icon: CodeBracketIcon,
    items: [
      'Distributed Systems',
      'Retry & Backoff',
      'Idempotency',
      'Backpressure Handling',
      'Fault Tolerance',
    ],
  },
  {
    category: 'Systems Debugging & Reliability',
    description: 'Debugging production-scale systems and resolving correctness issues in control-plane and runtime behavior',
    icon: CommandLineIcon,
    items: [
      'Systems Debugging',
      'Performance Analysis',
      'Memory & Resource Management',
      'Failure Analysis',
      'Linux Internals',
    ],
  },
  {
    category: 'Observability',
    description: 'Monitoring and analyzing system behavior using metrics, logs, and tracing',
    icon: ChartBarIcon,
    items: [
      'Prometheus',
      'Grafana',
      'Jaeger',
      'OpenTelemetry',
      'Metrics & Logging',
    ],
  },
  {
    category: 'Programming & Systems Engineering',
    description: 'Building backend systems and infrastructure components for cloud-native and distributed environments',
    icon: CodeBracketIcon,
    items: [
      'Go',
      'Python',
      'C',
      'REST APIs',
      'System Design',
    ],
  },
  {
    category: 'Autoscaling Systems',
    description: 'Designing and implementing autoscaling strategies based on multi-signal metrics and control loops',
    icon: ServerIcon,
    items: [
      'Horizontal Scaling',
      'Metric Smoothing',
      'Scaling Policies',
      'Cooldown Handling',
      'Cost-Aware Scaling',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Control-plane systems, autoscaling behavior, and distributed system reliability in cloud-native environments
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
              >

                {/* HEADER */}
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>

                {/* DESC */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {skill.description}
                </p>

                {/* ITEMS */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
