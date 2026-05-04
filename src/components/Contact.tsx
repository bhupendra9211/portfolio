"use client";
import React from "react";

function Contact() {
  return (
    <section id="Contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
            Let's Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Open to <span className="text-gray-500 dark:text-gray-400 italic">New Opportunities</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            I'm actively looking for full-stack or Odoo developer roles. If you're building something
            interesting, let's talk.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:shahbhupendra9211@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              📧 shahbhupendra9211@gmail.com
            </a>
            <a
              href="https://github.com/bhupendra9211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-all"
            >
              ⚡ GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bhupendra-kumar-sah-038b49217"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-lg font-medium hover:bg-[#006096] transition-all"
            >
              in LinkedIn
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              📍 Lokanthali, Bhaktapur, Nepal &nbsp;·&nbsp; 📞 9801620807
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;