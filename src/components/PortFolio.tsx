"use client";
import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Portfolio() {
  const featuredProjects = [
    {
      id: 1,
      name: "The Makeup Factory Nepal",
      description: "E-commerce website for beauty products with Odoo 18, featuring product catalog, cart, and payment integration.",
      image: "/projects/makeup-factory.jpg",
      liveUrl: "https://themakeupfactorynepal.com/",
      tech: ["Odoo 18", "Python", "JavaScript", "PostgreSQL"],
    },
    {
      id: 2,
      name: "Smarten Technologies",
      description: "Corporate website for IT solutions company, built with Odoo CMS and custom modules.",
      image: "/projects/smarten.jpg",
      liveUrl: "https://smarten.com.np/",
      tech: ["Odoo", "HTML/CSS", "JavaScript", "QWeb"],
    },
    {
      id: 3,
      name: "Korean Beauty Point",
      description: "E-commerce platform for Korean beauty products with POS integration.",
      image: "/projects/korean-beauty.jpg",
      liveUrl: "https://koreanbeautypoint.smarten.com.np/",
      tech: ["Odoo 18", "OWL Framework", "POS", "REST API"],
    },
    {
      id: 4,
      name: "Singon",
      description: "Online retail platform with inventory management and real-time printing features.",
      image: "/projects/singon.jpg",
      liveUrl: "https://singon.com.np/",
      tech: ["Odoo", "Python", "XML", "JavaScript"],
    },
    {
      id: 5,
      name: "Basemark",
      description: "Brand showcase and e-commerce platform for premium products.",
      image: "/projects/basemark.jpg",
      liveUrl: "https://basemark.smarten.com.np/",
      tech: ["Odoo", "React", "Tailwind CSS"],
    },
    {
      id: 6,
      name: "BHS Portal",
      description: "Business management system with accounting and inventory modules.",
      image: "/projects/bhs.jpg",
      liveUrl: "https://bhs.smarten.com.np/",
      tech: ["Odoo", "Accounting", "Inventory", "HRMS"],
    },
  ];

  const personalProjects = [
    {
      id: 1,
      name: "Learning Management System",
      description: "Platform for managing courses, students, and assessments.",
      github: "https://github.com/bhupendra9211/Learning-Management-System",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      name: "Film Fair (Movie Review App)",
      description: "Movie review platform using TMDB API, built with Ruby on Rails and React.",
      github: "https://github.com/bhupendra9211/Film-Fair",
      tech: ["Ruby on Rails", "React", "API Integration"],
    },
    {
      id: 3,
      name: "Blog API",
      description: "RESTful API for blog management with authentication and image upload.",
      github: "https://github.com/bhupendra9211/blog-api",
      tech: ["Laravel", "PHP", "MySQL"],
    },
    {
      id: 4,
      name: "Portfolio Website",
      description: "Modern portfolio built with Next.js and Tailwind CSS.",
      github: "https://github.com/bhupendra9211/portfolio",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <section id="Portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            E-commerce and enterprise solutions built with Odoo 18 and modern web technologies
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{project.name}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium text-sm"
                >
                  View Live <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Projects */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Open Source & Personal Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {personalProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              >
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm"
                >
                  <FaGithub size={14} /> GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;