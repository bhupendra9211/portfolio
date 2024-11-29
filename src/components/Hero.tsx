"use client";
import React from "react";
import Image from "next/image";
import pic from "../../public/icons/profile.png";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

import { SiRubyonrails } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiCyberdefenders } from "react-icons/si";

import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div
      id="Home"
      className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 mx-24"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
          <span className="text-xl font-semibold">Welcome To My Feed</span>
          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>Hello, I am a</h1>
            <ReactTyped
              className="text-red-700 font-bold"
              strings={["Web Developer", "Programmer", "Cybersecurity Enthusiast"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <br />
          <p className="text-md  text-justify">
            Hi, I am Bhupendra Sah, a dedicated software developer and aspiring cybersecurity professional from Nepal. 
            With hands-on experience in Ruby on Rails, React, and Next.js, I specialize in building efficient, scalable web applications.
            I am passionate about exploring the exciting field of cybersecurity while being eager to learn and adapt to any emerging technology.
            My journey reflects a strong commitment to continuous improvement and innovation in the tech landscape.
          </p>
          <br />
          {/* social media icons */}
          <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="space-y-2">
              <h1 className="font-bold text-center">Available on</h1>
              <ul className="flex space-x-5 justify-center">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaSquareFacebook className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <IoLogoYoutube className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-center">Currently working on</h1>
              <div className="flex space-x-5 justify-center">
                <SiRubyonrails className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <SiMysql className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <SiCyberdefenders className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-48 md:mt-20 mt-20 order-1">
          <div className="relative w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full overflow-hidden border-4 border-gray-300 bg-slate-200 dark:bg-slate-400 mx-auto">
            <div className="w-full h-full flex animate-slide-loop animate-slide-loop:hover">
              <div className="w-full h-full flex-shrink-0">
                <Image
                  src={pic}
                  alt="Profile Image"
                  width={450}
                  height={450}
                  className="rounded-full"
                />
              </div>
              <div className="w-full h-full flex-shrink-0">
                <Image
                  src={pic}
                  alt="Profile Image 2"
                  width={450}
                  height={450}
                  className="rounded-full"
                />
              </div>
              <div className="w-full h-full flex-shrink-0">
                <Image
                  src={pic}
                  alt="Profile Image 3"
                  width={450}
                  height={450}
                  className="rounded-full"
                />
              </div>
              <div className="w-full h-full flex-shrink-0">
                <Image
                  src={pic}
                  alt="Profile Image 4"
                  width={450}
                  height={450}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
