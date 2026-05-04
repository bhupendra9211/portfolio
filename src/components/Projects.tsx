"use client";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const personalProjects = [
    {
      name: "Learning Management System",
      description: "Full-featured LMS enabling course management, student enrollment, and progress tracking.",
      github: "https://github.com/bhupendra9211/Learning-Management-System",
      tags: ["Ruby on Rails", "React"],
    },
    {
      name: "Movie Review App",
      description: "Movie discovery and review platform integrating the TMDB API for real-time data.",
      github: "https://github.com/bhupendra9211/Film-Fair",
      tags: ["Ruby on Rails", "React", "TMDB API"],
    },
    {
      name: "Blog API (Laravel)",
      description: "Robust RESTful Blog API with user authentication, post management, comments, image uploads.",
      github: "https://github.com/bhupendra9211/blog-api",
      tags: ["PHP", "Laravel", "REST API"],
    },
    {
      name: "Insta Post",
      description: "Social photo-sharing application inspired by Instagram with image uploads and social feeds.",
      github: "https://github.com/bhupendra9211/Instapost",
      tags: ["Ruby on Rails", "Active Storage"],
    },
    {
      name: "Medium Clone",
      description: "Full-stack blogging platform cloning Medium's core features for writing and publishing.",
      github: "https://github.com/bhupendra9211/MyBlog",
      tags: ["Rails", "React"],
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio website built with Next.js showcasing projects and professional experience.",
      github: "https://github.com/bhupendra9211/portfolio",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
  ];

  const workSites = [
    { name: "The Makeup Factory Nepal", url: "https://themakeupfactorynepal.com/", type: "Beauty eCommerce" },
    { name: "Smarten Technologies", url: "https://smarten.com.np/", type: "Corporate Website" },
    { name: "BHS Portal", url: "https://bhs.smarten.com.np/", type: "Odoo eCommerce" },
    { name: "Accounting Portal", url: "https://accounting.smarten.com.np/", type: "Accounting Portal" },
    { name: "Korean Beauty Point", url: "https://koreanbeautypoint.smarten.com.np/", type: "K-Beauty eCommerce" },
    { name: "Singon", url: "https://singon.com.np/", type: "Business Website" },
    { name: "Ultima", url: "https://ultima.smarten.com.np/", type: "Odoo eCommerce" },
    { name: "Basemark", url: "https://basemark.smarten.com.np/", type: "Odoo Portal" },
    { name: "UNP Nepal", url: "https://unp.org.np/", type: "NGO Website" },
    { name: "DEX", url: "https://dex.bepresent.nl/", type: "International Project" },
  ];

  return (
    <>
      {/* Personal Projects */}
      <section id="Projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
              Open Source
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Personal <span className="text-gray-500 dark:text-gray-400 italic">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project) => (
              <div
                key={project.name}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    📁
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Websites */}
      <section id="Work" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
              Professional Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Websites I've <span className="text-gray-500 dark:text-gray-400 italic">Built</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Live production websites developed at Smarten Technologies — eCommerce platforms, corporate sites, and ERP-integrated web portals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {workSites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 transition-colors">
                      {site.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{site.type}</p>
                  </div>
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-600 text-sm transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;