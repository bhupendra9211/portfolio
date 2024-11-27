"use client";
import React from "react";
import Image from "next/image";
import pic from "../../public/icons/profile.png";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div
      id="Home"
      className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 mx-24"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
          <span className="text-xl">Welcome To My Feed</span>
          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>Hello, I'm a</h1>
            {/* <span >Developer</span> */}
            <ReactTyped
              className="text-red-700 font-bold"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <br />
          <p className="text-sm md:text-md text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            recusandae consequatur. Accusamus sint libero eligendi laborum fuga
            repudiandae? Asperiores tempore eos animi dolores corrupti! Sint quos,
            mollitia architecto aliquam nesciunt, optio cum delectus sit voluptatum
            aut ratione quaerat veniam aperiam!
          </p>
          <br />
          {/* social media icons */}
          <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="space-y-2">
              <h1 className="font-bold text-center">Available on</h1>
              <ul className="flex space-x-5 justify-center">
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <FaSquareFacebook className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                    <IoLogoYoutube className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/" target="_blank">
                    <FaTelegram className="text-2xl cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-center">Currently working on</h1>
              <div className="flex space-x-5 justify-center">
                <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
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
                  alt="profile 1"
                  width={450}
                  height={450}
                  className="rounded-full"
                />
              </div>
              <div className="w-full h-full flex-shrink-0">
                <Image
                  src={pic}
                  alt="profile 2"
                  width={450}
                  height={450}
                  className="rounded-full"
                />
              </div>
              <div className="w-full h-full flex-shrink-0">
                <Image
                  src={pic}
                  alt="profile 3"
                  width={450}
                  height={450}
                  className="rounded-full"
                />
              </div>
              <div className="w-full h-full flex-shrink-0">
                <Image
                  src={pic}
                  alt="profile 4"
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
