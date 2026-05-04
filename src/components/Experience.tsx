"use client";
import React from "react";

function Experience() {
  const experiences = [
    {
      id: 1,
      period: "January 2025 — Present",
      company: "Smarten Technologies Pvt. Ltd. · Kathmandu",
      role: "Full Stack Odoo Developer (Frontend Focus)",
      description:
        "Designing, developing, and customizing enterprise ERP solutions on Odoo 18. Leading frontend development including custom website designs, reusable snippets, interactive sliders, and POS interfaces. Building scalable Odoo modules used by real businesses. Deployed 10+ live eCommerce and business websites. Developed localized components including a Nepali calendar/datetime picker.",
      tags: ["Odoo 18", "Python", "OWL (JS)", "QWeb/XML", "POS Customization", "eCommerce", "HRMS", "Hardware Integration"],
    },
    {
      id: 2,
      period: "August 2024 — November 2024",
      company: "Chulo Solutions Pvt. Ltd. · Lalitpur",
      role: "Full Stack Web Developer",
      description:
        "Contributed to production web applications using Ruby on Rails and React. Designed and implemented new features, resolved technical issues, and maintained code quality. Worked in an Agile/Scrum team environment with Jira for project tracking.",
      tags: ["Ruby on Rails", "React", "Agile/Scrum", "Jira", "Git"],
    },
    {
      id: 3,
      period: "March 2024 — July 2024",
      company: "Chulo Solutions Pvt. Ltd. · Lalitpur",
      role: "Software Engineering Intern",
      description:
        "Assisted in developing and maintaining web applications. Implemented new features, strengthened skills in full-stack development, and gained exposure to professional software development workflows.",
      tags: ["Ruby on Rails", "React", "MySQL", "API Integration"],
    },
  ];

  return (
    <section id="Experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-gray-500 dark:text-gray-400 italic">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 pb-10">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gradient-to-b from-blue-500 to-transparent"></div>
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 shadow-md"></div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  {exp.period}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{exp.company}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{exp.role}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;