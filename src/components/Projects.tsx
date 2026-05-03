'use client';

import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'SmartScaler — Kubernetes Autoscaling Operator',
    description:
      'Kubernetes-native autoscaling operator implementing a deterministic multi-signal control loop across CPU utilization, node pressure, and cost for stable scaling decisions.',
    impact:
      'Deterministic autoscaling · Metric smoothing & staleness filtering · Conflict-safe scaling with retries',
    technologies: [
      'Go',
      'Kubernetes',
      'CRDs',
      'Controllers',
      'Prometheus',
      'Docker',
    ],
    github: 'https://github.com/Debasish-87/smartscaler',
    image: '/projects/smartscaler.png',
  },
  {
    title: 'KubeJobs — Distributed Job Processing System',
    description:
      'Fault-tolerant distributed job system built on Redis Streams with reliable execution, retry semantics, and worker recovery.',
    impact:
      'Reliable execution under failure · Backpressure control · DLQ + retry handling',
    technologies: [
      'Go',
      'Redis Streams',
      'Kubernetes',
      'Prometheus',
      'Docker',
    ],
    github: 'https://github.com/Debasish-87/kubejobs',
    image: '/projects/kubejobs.png',
  },
  {
    title: 'Kubernetes Autoscaler — Control Plane Contribution',
    description:
      'Fixed production-impacting scaling bug in Kubernetes Autoscaler where node groups ignored configured minSize, causing silent under-provisioning.',
    impact:
      'Merged upstream · Backported to release branches · Restored correct scaling behavior',
    technologies: [
      'Go',
      'Kubernetes',
      'Autoscaling',
      'Control Plane',
    ],
    github: 'https://github.com/kubernetes/autoscaler/pull/9506',
    image: '/projects/k8s.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
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
            Systems & Security Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Production-grade systems across Kubernetes runtime security, CI/CD enforcement, and cloud-native infrastructure
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              
              {/* IMAGE */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>

                {/* 🔥 IMPACT */}
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {project.impact}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex space-x-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700"
                  >
                    <CodeBracketIcon className="h-5 w-5 mr-2" />
                    Code
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                      Live
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
