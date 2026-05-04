"use client";

import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footerd() {
  const footerLinks = [
    { id: 1, text: "Home", to: "Home" },
    { id: 2, text: "About", to: "About" },
    { id: 3, text: "Portfolio", to: "Portfolio" },
    { id: 4, text: "Skills", to: "Skills" },
    { id: 5, text: "Experience", to: "Experience" },
  ];

  return (
    <Footer container className="bg-gray-900 dark:bg-gray-950 rounded-none">
      <div className="w-full">
        <div className="flex flex-wrap justify-between items-center gap-4 pb-6 border-b border-gray-700">
          <Footer.Brand
            href="#Home"
            src="/icons/photo.avif"
            alt="Bhupendra Logo"
            name="Bhupendra Shah"
            className="text-white"
          />
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(({ id, text, to }) => (
              <Link
                key={id}
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
              >
                {text}
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/bhupendra9211"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/bhupendra-kumar-sah-038b49217"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://bhupendrasah.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4 pt-6">
          <Footer.Copyright
            href="#Home"
            by="Bhupendra Shah"
            year={2024}
            className="text-gray-400"
          />
          <p className="text-gray-500 text-sm">
            Full Stack Developer | Odoo Expert | React & Rails
          </p>
        </div>
      </div>
    </Footer>
  );
}

export default Footerd;