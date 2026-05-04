"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import pic from "../../public/icons/profile.png";
import Contact from "./Contact";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navItems = ["Home", "About", "Portfolio", "Skills", "Experience"];

  return (
    <Navbar
      fluid
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-white dark:bg-gray-900 shadow-md"
      }`}
    >
      <Navbar.Brand
        as={Link}
        to="Home"
        smooth={true}
        duration={500}
        offset={-70}
        className="cursor-pointer"
      >
        <Image
          src={pic}
          className="mr-3 h-10 w-10 rounded-full border-2 border-blue-500 object-cover"
          alt="logo"
          width={40}
          height={40}
        />
        <div>
          <h1 className="font-bold text-xl dark:text-white">
            Bhupendra<span className="text-blue-600"> Shah</span>
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Full Stack Developer
          </p>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        {navItems.map((item) => (
          <Navbar.Link
            key={item}
            as="div"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium cursor-pointer transition-colors duration-200"
          >
            <Link to={item} smooth={true} duration={500} offset={-70}>
              {item}
            </Link>
          </Navbar.Link>
        ))}
        <div className="md:ml-2">
          <Contact />
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;