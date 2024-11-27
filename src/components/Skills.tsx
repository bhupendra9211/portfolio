"use client";

import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineRuby } from "react-icons/ai";
import { SiRubyonrails } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { SiMicrosoftword } from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaRegFilePowerpoint } from "react-icons/fa";



type CardItem = {
  id: number;
  logo: JSX.Element; 
  name: string;
};

function Skills() {
  const cardItems: CardItem[] = [
    {
      id: 1,
      logo: <FaHtml5 className="text-[150px] text-orange-500" />, // HTML: orange
      name: "HTML",
    },
    {
      id: 2,
      logo: <FaCss3Alt className="text-[150px] text-blue-500" />, // CSS: blue
      name: "CSS",
    },
    {
      id: 3,
      logo: <TbBrandJavascript className="text-[150px] text-yellow-400" />, // JavaScript: yellow
      name: "JAVASCRIPT",
    },
    {
      id: 4,
      logo: <AiOutlineRuby className="text-[150px] text-red-600" />, // Ruby: red
      name: "RUBY",
    },
    {
      id: 5,
      logo: <SiRubyonrails className="text-[150px] text-red-700" />, // Ruby on Rails: deep red
      name: "RAILS",
    },
    {
      id: 6,
      logo: <FaReact className="text-[150px] text-blue-300" />, // React: light blue
      name: "REACT",
    },
    {
      id: 7,
      logo: <FaPython className="text-[150px] text-blue-400" />, // Python: blue and yellow
      name: "PYTHON",
    },
    {
      id: 8,
      logo: <SiMysql className="text-[150px] text-blue-600" />, // MySQL: blue
      name: "MySQL",
    },
    {
      id: 9,
      logo: <VscGithubInverted className="text-[150px] text-black" />, // GitHub: black
      name: "GIT & GITHUB",
    },
    {
      id: 10,
      logo: <SiMicrosoftword className="text-[150px] text-blue-500" />, // MS Word: blue
      name: "MS WORD",
    },
    {
      id: 11,
      logo: <RiFileExcel2Line className="text-[150px] text-green-500" />, // Excel: green
      name: "EXCEL",
    },
    {
      id: 12,
      logo: <FaRegFilePowerpoint className="text-[150px] text-orange-600" />, // PowerPoint: orange
      name: "POWERPOINT",
    },
  ];
  return (
    <div
      id="Skills"
      className="flex items-center h-screen container mx-auto "
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <p className="  ">
          I've more than 1 years of Experience in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItems.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[230px] md:h-[230px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <div className="w-[150px] h-[150px] flex items-center justify-center">
                  {logo} 
              </div>
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
