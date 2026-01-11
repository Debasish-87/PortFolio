'use client';

import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  ShieldCheckIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const skills = [
  {
    category: 'Test Automation & Quality Intelligence',
    description: 'Engineering automation frameworks and release-quality signals',
    icon: WrenchScrewdriverIcon,
    items: [
      { name: 'UI Automation (Selenium)', level: 90 },
      { name: 'API Automation (RestAssured)', level: 90 },
      { name: 'TestNG Framework Design', level: 85 },
      { name: 'Allure Reporting & Test Intelligence', level: 90 },
      { name: 'Risk-Based Testing & Quality Gates', level: 85 },
    ],
  },
  {
    category: 'CI/CD & Release Engineering',
    description: 'CI/CD-driven automation and release confidence',
    icon: CommandLineIcon,
    items: [
      { name: 'GitHub Actions', level: 90 },
      { name: 'Jenkins', level: 85 },
      { name: 'CI/CD Test Orchestration', level: 90 },
      { name: 'Release Readiness Signals', level: 85 },
      { name: 'Pipeline Failure Analysis', level: 80 },
    ],
  },
  {
    category: 'Cloud-Native QA',
    description: 'Automation infrastructure for cloud-native platforms',
    icon: ServerIcon,
    items: [
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes / K3s', level: 85 },
      { name: 'AWS (EC2, S3, IAM)', level: 85 },
      { name: 'Test Environment Provisioning', level: 80 },
      { name: 'Cloud-Native Test Execution', level: 85 },
    ],
  },
  {
    category: 'Observability & Test Signals',
    description: 'Execution visibility and quality signal analysis',
    icon: CommandLineIcon,
    items: [
      { name: 'Test Execution Visibility', level: 85 },
      { name: 'Failure Pattern Analysis', level: 80 },
      { name: 'Pipeline Health Metrics', level: 85 },
      { name: 'Prometheus & Grafana (Basics)', level: 75 },
      { name: 'Log-Based Debugging', level: 80 },
    ],
  },
  {
    category: 'Programming & Automation',
    description: 'Languages and scripting for automation frameworks',
    icon: CodeBracketIcon,
    items: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Bash / Shell Scripting', level: 85 },
      { name: 'YAML & JSON', level: 90 },
      { name: 'Framework Utilities & Helpers', level: 80 },
    ],
  },
  {
    category: 'DevSecOps & Quality Enablement',
    description: 'Security-aware automation and policy-driven quality',
    icon: ShieldCheckIcon,
    items: [
      { name: 'Security-Aware Test Design', level: 85 },
      { name: 'Policy-Aware Pipelines', level: 80 },
      { name: 'Shift-Left Testing Practices', level: 85 },
      { name: 'Environment Validation', level: 80 },
      { name: 'Release Compliance Checks', level: 75 },
    ],
  },
];


export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Comprehensive expertise in test automation, CI/CD quality engineering, and cloud-native QA platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {skill.description}
                </p>
                <div className="space-y-3">
                  {skill.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item.name}
                        </span>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {item.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 h-2 rounded-full"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
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
