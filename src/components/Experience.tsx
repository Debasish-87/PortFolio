'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Cloud DevOps Engineer Intern',
    company: 'TechEazy Consulting',
    period: 'Jun 2025 – Jul 2025',
    location: 'Remote (India)',
    responsibilities: [
      'Automated infrastructure deployment using Terraform and AWS CloudFormation',
      'Built and optimized CI/CD pipelines with GitHub Actions and AWS CodePipeline for faster delivery',
      'Managed AWS resources including EC2, S3, Lambda, IAM, and RDS to support scalable systems',
      'Containerized applications using Docker and deployed them via Amazon ECS',
      'Monitored system health and performance using AWS CloudWatch and integrated logging with AWS CloudTrail and ELK Stack',
      'Collaborated with DevOps teams to troubleshoot real-time infrastructure issues',
      'Participated in Agile practices including daily standups and sprint ceremonies',
      'Documented processes and built a knowledge base for future onboarding and operational efficiency',
    ],
  },
  {
    title: 'DevOps Engineer Intern',
    company: 'Elevate Labs',
    period: 'May 2025 – Jun 2025',
    location: 'Remote (India)',
    responsibilities: [
      'Developed and maintained CI/CD pipelines using GitHub Actions and Jenkins for smooth deployments',
      'Deployed Dockerized applications using Kubernetes on AWS infrastructure',
      'Monitored system health with Prometheus and Grafana, reducing mean time to detect/resolution',
      'Assisted in the implementation of IAM policies to enhance security',
      'Worked cross-functionally with developers and security teams in Agile development cycles',
    ],
  },
  {
    title: 'DevSecOps Architect',
    company: 'Upwork',
    period: 'Oct 2024 – Feb 2025',
    location: 'Remote (Bhubaneswar, Odisha, India)',
    responsibilities: [
      'Architected and delivered end-to-end DevSecOps pipelines and security-first cloud-native solutions for clients across various industries',
      'Integrated SAST, DAST, SCA, and container scanning tools (Trivy, Gitleaks) into CI/CD pipelines for shift-left security',
      'Implemented GitOps deployments using ArgoCD and FluxCD, with Kubernetes admission control via Kyverno and OPA Gatekeeper',
      'Automated compliance checks and infrastructure security audits using CIS Benchmarks and NIST frameworks',
      'Set up SOAR workflows for automated incident response, threat detection, and SIEM monitoring using ELK/EFK stacks',
    ],
  },
  {
    title: 'Cloud-Native Security Engineer',
    company: 'Upwork',
    period: 'Mar 2023 – Oct 2023',
    location: 'Remote (Bhubaneswar, Odisha, India)',
    responsibilities: [
      'Designed secure and scalable cloud-native environments using GitOps workflows and Zero Trust principles',
      'Provisioned hardened Kubernetes clusters with automated deployment via ArgoCD/FluxCD and real-time threat detection (Falco, Kyverno)',
      'Automated infrastructure across AWS and GCP using Terraform, Helm, and Docker',
      'Set up centralized monitoring and observability with Prometheus, Grafana, Loki, and EFK Stack',
      'Implemented Policy-as-Code using OPA and Kyverno, and enforced automated compliance validation',
    ],
  },
  {
    title: 'Cloud DevOps Engineer',
    company: 'Independent Project Contractor',
    period: 'Oct 2022 – Jan 2023',
    location: 'Bhubaneswar, Odisha, India',
    responsibilities: [
      'Built and managed CI/CD pipelines to automate build, test, and deployment phases',
      'Provisioned infrastructure using Terraform and followed IaC best practices',
      'Managed cloud environments for performance and cost optimization',
      'Implemented security protocols and ensured regulatory compliance across systems',
      'Collaborated with software engineers to streamline deployment workflows and release strategies',
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
            My journey in cloud and DevOps engineering
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
