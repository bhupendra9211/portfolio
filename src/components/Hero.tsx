"use client";
import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import profilePic from "../../public/icons/profile.png";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                Available for Work
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Bhupendra Shah
              </span>
            </h1>
            <div className="h-12 mb-6">
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Full Stack Odoo Developer</span>
                {" | "}
                <span className="font-semibold">React & Rails Expert</span>
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8">
              Building scalable ERP solutions and modern web applications with 2+ years of experience.
              Specialized in Odoo 18, React, Ruby on Rails, and creating seamless user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="Portfolio"
                smooth={true}
                duration={500}
                offset={-70}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                View My Work
              </Link>
              <a
                href="/Bhupendra-Shah-CV.pdf"
                download
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload /> Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8">
              <a
                href="https://github.com/bhupendra9211"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
              >
                <FaGithub size={22} className="text-gray-800 dark:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhupendra-kumar-sah-038b49217"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-200"
              >
                <FaLinkedin size={22} className="text-blue-700" />
              </a>
              <a
                href="mailto:shahbhupendra9211@gmail.com"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50 transition-all duration-200"
              >
                <FaEnvelope size={22} className="text-red-600" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <Image
                  src={profilePic}
                  alt="Bhupendra Shah"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;