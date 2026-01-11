'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'AWS Cloud DevOps Engineer (Contract / Internship)',
    company: 'TechEazy Consulting',
    period: 'Jun 2025 – Jul 2025',
    location: 'Remote (India)',
    responsibilities: [
      'Supported CI/CD pipelines using GitHub Actions and AWS CodePipeline with focus on automation readiness and stability',
      'Assisted in Infrastructure as Code (IaC) using Terraform and AWS CloudFormation to enable repeatable test environments',
      'Validated deployments across AWS services (EC2, S3, IAM, Lambda, RDS) from a quality and reliability perspective',
      'Enabled containerized application execution using Docker and Amazon ECS to support automated testing',
      'Monitored pipeline execution, environment health, and failures using CloudWatch, CloudTrail, and ELK Stack',
      'Collaborated with DevOps and QA teams to identify deployment risks impacting test execution and releases',
      'Documented CI/CD workflows, environment setup, and quality checks for reuse and onboarding',
    ],
  },
  {
    title: 'DevOps Automation Engineer (Contract / Internship)',
    company: 'Elevate Labs',
    period: 'May 2025 – Jun 2025',
    location: 'Remote (India)',
    responsibilities: [
      'Developed and maintained CI/CD pipelines using GitHub Actions and Jenkins with automation integration',
      'Deployed Dockerized applications on Kubernetes (AWS) to support QA and test execution workflows',
      'Used Prometheus and Grafana to analyze failures and improve observability for automated runs',
      'Assisted in validating IAM configurations and security-sensitive workflows impacting QA environments',
      'Worked closely with developers and QA engineers to improve deployment reliability and release confidence',
      'Participated in Agile ceremonies aligning automation, testing, and deployment timelines',
    ],
  },
  {
    title: 'SDET / Quality Engineer',
    company: 'Upwork',
    period: 'Oct 2024 – Feb 2025',
    location: 'Remote (India)',
    responsibilities: [
      'Designed CI/CD-driven automation strategies for cloud-native client applications',
      'Built Quality Intelligence systems converting UI, API, and pipeline execution into release-readiness signals',
      'Integrated automation frameworks with GitHub Actions, Jenkins, and GitOps workflows',
      'Implemented risk-based testing, quality gates, and early defect containment',
      'Partnered with clients to improve release confidence, stability, and predictability',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cloud DevOps and SDET experience focused on CI/CD-driven quality,
            automation enablement, and cloud-native release confidence
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
                  <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
