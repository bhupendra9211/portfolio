"use client";
import React from "react";

function Skills() {
  const skillCategories = [
    {
      name: "Odoo ERP",
      skills: ["Odoo 18", "CRM", "Sales", "Purchase", "Inventory", "HRMS", "Helpdesk", "Manufacturing", "PoS", "eCommerce", "OWL", "QWeb/XML"],
    },
    {
      name: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Backend",
      skills: ["Ruby on Rails", "PHP / Laravel", "Python", "REST API", "API Integration"],
    },
    {
      name: "Database & Cloud",
      skills: ["MySQL", "SQL", "PostgreSQL", "AWS (Beginner)"],
    },
    {
      name: "Tools & Workflow",
      skills: ["Git / GitHub", "Jira", "Agile / Scrum", "Linux", "Postman"],
    },
    {
      name: "Other Languages",
      skills: ["C / C++", "Java", "MATLAB", "R", "LaTeX"],
    },
  ];

  return (
    <section id="Skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
            Technical Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="text-gray-500 dark:text-gray-400 italic">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently working with */}
        <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            🚀 Currently Working With
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Odoo 18", "OWL Framework", "QWeb", "Python", "PostgreSQL", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium shadow-sm">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
            ⚡ 2+ years of experience | 11+ production websites | Odoo Certified Professional
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;