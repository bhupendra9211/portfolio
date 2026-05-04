"use client";
import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up animation-delay-100">
              Bhupendra Kumar
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Sah
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 animate-fade-in-up animation-delay-200">
              Full Stack Developer & Odoo Specialist
            </p>

            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up animation-delay-300">
              I build scalable web applications and enterprise ERP systems. Specializing in Odoo 18,
              Ruby on Rails, React, and creating seamless user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <Link
                to="Projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
              >
                View My Work <FaArrowRight size={14} />
              </Link>
              <a
                href="/Bhupendra-Shah-CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                <FaDownload /> Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 animate-fade-in-up animation-delay-500">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">2<span className="text-blue-600">+</span></div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">11<span className="text-blue-600">+</span></div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Live Websites</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">15<span className="text-blue-600">+</span></div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects Built</div>
              </div>
            </div>
          </div>

          {/* Right Avatar */}
          <div className="flex-1 flex justify-center animate-fade-in-up animation-delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-7xl font-bold text-white opacity-80">BKS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

export default Hero;