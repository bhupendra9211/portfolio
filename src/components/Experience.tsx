"use client";
import React from "react";
import { FaBriefcase, FaGraduationCap, FaAward } from "react-icons/fa";
import { HiCode, HiServer, HiDatabase, HiCloud } from "react-icons/hi";

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Odoo Developer",
      company: "Smarten Technologies Pvt. Ltd., Kathmandu",
      period: "2024 - Present",
      description: [
        "Designing and developing custom Odoo 18 ERP modules for e-commerce and enterprise clients",
        "Built 10+ production e-commerce websites including themakeupfactorynepal.com, bhs.smarten.com.np, smarten.com.np, koreanbeautypoint.smarten.com.np, singon.com.np, ultima.smarten.com.np, basemark.smarten.com.np, unp.org.np, dex.bepresent.nl",
        "Specialized in frontend development using OWL framework, QWeb templating, and XML",
        "Implemented POS customization, hardware integration (printers, scanners), and real-time printing",
        "Created reusable Odoo snippets and interactive dashboards with dynamic business logic",
        "Developed Nepali calendar and datetime picker for localized requirements",
      ],
      icon: <HiCode className="text-blue-600 text-2xl" />,
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Chulo Solutions Pvt. Ltd., Lalitpur",
      period: "2023 - 2024",
      description: [
        "Developed web applications using Ruby on Rails and React",
        "Implemented new features and resolved technical issues in production systems",
        "Collaborated with team in Agile workflows and software lifecycle management",
        "Ensured code quality through best practices and peer reviews",
      ],
      icon: <HiServer className="text-green-600 text-2xl" />,
    },
  ];

  const education = [
    {
      id: 1,
      degree: "BSc. in Computational Mathematics",
      institution: "Kathmandu University, Dhulikhel",
      period: "2019 - 2024",
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      institution: "Super Sense Sec. Eng. Boarding School, Dhanusha",
      period: "2016 - 2018",
    },
  ];

  const certifications = [
    { name: "MySQL Basics", issuer: "Great Learning", year: "2024" },
    { name: "SQL (Basic) Certificate", issuer: "HackerRank", year: "2024" },
  ];

  return (
    <section id="Experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey in software development and academic background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaBriefcase className="text-blue-600 text-2xl" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {exp.period}
                      </p>
                      <ul className="mt-3 space-y-1">
                        {exp.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2"
                          >
                            <span className="text-blue-500 mt-1">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-green-600 text-2xl" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg"
                  >
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaAward className="text-yellow-600 text-2xl" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-500">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-400">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;