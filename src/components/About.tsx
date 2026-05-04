"use client";
import React from "react";

function About() {
  return (
    <section id="About" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Odoo Developer</span> with expertise in building scalable ERP solutions and modern web applications. Currently working at <span className="font-semibold">Smarten Technologies Pvt. Ltd.</span>, I specialize in creating custom Odoo 18 modules, e-commerce websites, and POS systems.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">What I Do</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">▹</span>
                    <span className="text-gray-600 dark:text-gray-400">Odoo 18 ERP customization and module development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">▹</span>
                    <span className="text-gray-600 dark:text-gray-400">E-commerce website development with Odoo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">▹</span>
                    <span className="text-gray-600 dark:text-gray-400">POS system customization and hardware integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">▹</span>
                    <span className="text-gray-600 dark:text-gray-400">Full stack web apps using React, Rails, and Next.js</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Tech Stack</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">▹</span>
                    <span className="text-gray-600 dark:text-gray-400">Python, JavaScript, TypeScript, Ruby</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">▹</span>
                    <span className="text-gray-600 dark:text-gray-400">Odoo, React, Next.js, Ruby on Rails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">▹</span>
                    <span className="text-gray-600 dark:text-gray-400">PostgreSQL, MySQL, Git, Docker</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">▹</span>
                    <span className="text-gray-600 dark:text-gray-400">AWS, Jira, Agile/Scrum</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I've successfully delivered <span className="font-semibold text-blue-600">10+ production e-commerce websites</span> including The Makeup Factory Nepal, Korean Beauty Point, Singon, and Basemark. I'm passionate about creating seamless user experiences, optimizing business processes through automation, and staying updated with the latest technologies. Fluent in Nepali, Maithili, English, and Hindi, I thrive in collaborative, growth-oriented environments.
            </p>

            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Available for freelance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;