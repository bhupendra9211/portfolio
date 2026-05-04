"use client";
import React from "react";
import { FaCode, FaLaptopCode, FaShieldAlt, FaMicrochip } from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaCode className="text-blue-500 text-2xl" />,
      title: "Odoo ERP Development",
      description: "Building, customizing, and deploying Odoo 18 modules — from CRM and HRMS to POS and eCommerce for enterprise clients.",
    },
    {
      icon: <FaLaptopCode className="text-purple-500 text-2xl" />,
      title: "Full Stack Web Development",
      description: "Ruby on Rails, React, Next.js, PHP/Laravel. From API design to responsive frontends, end-to-end.",
    },
    {
      icon: <FaShieldAlt className="text-green-500 text-2xl" />,
      title: "Cybersecurity Enthusiast",
      description: "Actively expanding into security practices, passionate about building robust and secure applications.",
    },
    {
      icon: <FaMicrochip className="text-orange-500 text-2xl" />,
      title: "Hardware Integration",
      description: "POS terminal setup, label printers, receipt customization, and real-time hardware-software integration.",
    },
  ];

  return (
    <section id="About" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
            Who I Am
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Developer. Problem-Solver.
            <span className="text-gray-500 dark:text-gray-400 italic"> Always Learning.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I am Bhupendra Kumar Sah, a Full Stack Developer from Bhaktapur, Nepal, with a B.Sc. in
              Computational Mathematics from Kathmandu University. I specialize in building
              production-grade Odoo 18 ERP solutions and modern web applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Currently at Smarten Technologies, I lead frontend development for enterprise ERP systems —
              crafting custom Odoo modules, interactive dashboards, POS interfaces, and complete
              eCommerce websites for real businesses across Nepal and internationally.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Beyond Odoo, I bring strong full-stack skills in Ruby on Rails, React, and PHP/Laravel.
              I am a cybersecurity enthusiast who loves tackling challenges beyond the expected, and I
              approach every project with a commitment to clean code and scalable architecture.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="mailto:shahbhupendra9211@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                📧 Email Me
              </a>
              <a
                href="https://bhupendrasah.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                🌐 My Website
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;