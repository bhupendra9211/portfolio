import React from "react";
import Image from "next/image";
import java from "../../public/icons/java.png";
import python from "../../public/icons/python.webp";
import mongoDB from "../../public/icons/mongodb.jpg";
import express from "../../public/icons/express.png";
import reactjs from "../../public/icons/reactjs.png";
import nodejs from "../../public/icons/node.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
  ];

  return (
    <div
      id="Portfolio"
      className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8"
    >
      <div className="">
        <h1 className="text-3xl font-bold mb-5 text-center">PortFolio</h1>
        <span className="underline font-semibold text-center block mb-5">
          Featured Projects
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="w-full border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <Image
                src={logo}
                className="w-[120px] h-[120px] mx-auto p-2 rounded-full border-2"
                alt={name}
              />
              <div className="text-center mt-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-sm text-gray-700 dark:text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="mt-4 space-x-3 text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
