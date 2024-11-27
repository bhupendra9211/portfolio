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
      logo: <FaHtml5 className="text-[150px] text-orange-500 md:w-[150px] md:h-[150px] w-[90px] h-[90px]" />,
      name: "HTML",
    },
    {
      id: 2,
      logo: <FaCss3Alt className="text-[150px] text-blue-500 md:w-[150px] md:h-[150px] w-[90px] h-[90px]" />,
      name: "CSS",
    },
    {
      id: 3,
      logo: <TbBrandJavascript className="text-[150px] text-yellow-400 md:w-[150px] md:h-[150px] w-[90px] h-[90px]" />,
      name: "JAVA SCRIPT",
    },
    {
      id: 4,
      logo: <AiOutlineRuby className="text-[150px] text-red-600" />, 
      name: "RUBY",
    },
    {
      id: 5,
      logo: <SiRubyonrails className="text-[150px] text-red-700" />,
      name: "RAILS",
    },
    {
      id: 6,
      logo: <FaReact className="text-[150px] text-blue-300" />, 
      name: "REACT",
    },
    {
      id: 7,
      logo: <FaPython className="text-[150px] text-blue-400" />, 
      name: "PYTHON",
    },
    {
      id: 8,
      logo: <SiMysql className="text-[150px] text-blue-600" />,
      name: "MySQL",
    },
    {
      id: 9,
      logo: <VscGithubInverted className="text-[150px] text-black" />, 
      name: "GIT & GITHUB",
    },
    {
      id: 10,
      logo: <SiMicrosoftword className="text-[150px] text-blue-500" />, 
      name: "MS WORD",
    },
    {
      id: 11,
      logo: <RiFileExcel2Line className="text-[150px] text-green-500" />, 
      name: "EXCEL",
    },
    {
      id: 12,
      logo: <FaRegFilePowerpoint className="text-[150px] text-orange-600" />, 
      name: "POWERPOINT",
    },
  ];
  return (
    <div
      id="Skills"
className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">Skills</h1>
        <p className="text-center">
          I've more than 1 years of Experience in below technologies.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 my-6">
  {cardItems.map(({ id, logo, name }) => (
    <div
      className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[230px] md:h-[230px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
      key={id}
    >
      <div className="md:w-[150px] md:h-[150px] w-[100px] h-[100px] flex items-center justify-center">
        {logo} 
      </div>
      <div className="mt-2">
        <div className="font-bold">{name}</div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  )
}

export default Skills
