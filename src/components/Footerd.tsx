"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-gray-800">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Bhupendra<span className="text-blue-500">.</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">Full Stack Developer & Odoo Specialist</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/bhupendra9211"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/bhupendra-kumar-sah-038b49217"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:shahbhupendra9211@gmail.com"
              className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://bhupendrasah.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <FaGlobe size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-gray-500 text-sm">
            © {currentYear} Bhupendra Kumar Sah. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with Next.js, Tailwind CSS, and Flowbite
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;