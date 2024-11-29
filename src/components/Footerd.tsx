"use client";

import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-scroll";

function Footerd() {
  const footerLinks = [
    { id: 1, text: "Home", to: "Home" },
    { id: 2, text: "About", to: "About" },
    { id: 3, text: "Portfolio", to: "Portfolio" },       
    { id: 4, text: "Skills", to: "Skills" },
  ];

  return (
    <Footer container className="shadow-md bg-gray-100 dark:bg-gray-800">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="#Home"
            src="/icons/photo.avif" 
            alt="Bhupendra Logo"
            name="Bhupendra"
          />
          <div className="flex flex-wrap justify-center gap-4 mt-4 sm:mt-0">
            {footerLinks.map(({ id, text, to }) => (
              <Link
                key={id}
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="text-sm text-gray-600 hover:underline dark:text-white cursor-pointer"
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#Home" by="Bhupendra" year={2024} />
      </div>
    </Footer>
  );
}

export default Footerd;
