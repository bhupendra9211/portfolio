"use client";
import React from "react";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaAws,
  FaPhp,
} from "react-icons/fa";
import {
  SiRubyonrails,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiJira,
  SiAdobephotoshop,
} from "react-icons/si";

interface Skill {
  id: number;
  name: string;
  icon: JSX.Element;
  category: string;
  level: number;
}

function Skills() {
  const skills: Skill[] = [
    // Frontend
    { id: 1, name: "HTML5", icon: <SiHtml5 className="text-orange-500" />, category: "Frontend", level: 90 },
    { id: 2, name: "CSS3", icon: <SiCss3 className="text-blue-500" />, category: "Frontend", level: 85 },
    { id: 3, name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, category: "Frontend", level: 88 },
    { id: 4, name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, category: "Frontend", level: 80 },
    { id: 5, name: "React", icon: <FaReact className="text-blue-400" />, category: "Frontend", level: 85 },
    { id: 6, name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, category: "Frontend", level: 85 },
    // Backend
    { id: 7, name: "Ruby", icon: <SiRubyonrails className="text-red-600" />, category: "Backend", level: 85 },
    { id: 8, name: "Ruby on Rails", icon: <SiRubyonrails className="text-red-700" />, category: "Backend", level: 85 },
    { id: 9, name: "Python", icon: <FaPython className="text-blue-500" />, category: "Backend", level: 90 },
    { id: 10, name: "PHP", icon: <FaPhp className="text-purple-600" />, category: "Backend", level: 75 },
    { id: 11, name: "Node.js", icon: <FaNodeJs className="text-green-600" />, category: "Backend", level: 70 },
    // Database
    { id: 12, name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" />, category: "Database", level: 85 },
    { id: 13, name: "MySQL", icon: <SiMysql className="text-blue-600" />, category: "Database", level: 85 },
    // DevOps & Tools
    { id: 14, name: "Git", icon: <FaGitAlt className="text-orange-600" />, category: "DevOps", level: 85 },
    { id: 15, name: "Docker", icon: <SiDocker className="text-blue-500" />, category: "DevOps", level: 65 },
    { id: 16, name: "AWS", icon: <FaAws className="text-yellow-600" />, category: "DevOps", level: 60 },
    { id: 17, name: "Jira/Agile", icon: <SiJira className="text-blue-500" />, category: "Tools", level: 80 },
  ];

  const categories = ["Frontend", "Backend", "Database", "DevOps", "Tools"];

  return (
    <section id="Skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-5 pl-2 border-l-4 border-blue-500">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-gray-800 dark:text-white text-sm">
                        {skill.name}
                      </h4>
                      <div className="w-full mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Additional Info */}
        <div className="mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            🚀 Currently Working With
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Odoo 18", "OWL Framework", "QWeb", "Python", "PostgreSQL", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
            ⚡ 2+ years of experience | 10+ production e-commerce websites | Odoo Certified Professional
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;