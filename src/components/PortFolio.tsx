import React from "react";
import { SiRubyonrails } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

type CardItem = {
  id: number;
  logo: JSX.Element; 
  name: string;
};

function PortFolio() {
  const cardItems: CardItem[] =  [
    {
      id: 1,
      logo: <SiRubyonrails className="text-[150px] text-red-700" />,
      name: "Ruby On Rails",
    },
    {
      id: 2,
      logo: <FaReact className="text-[130px] text-blue-500" />,
      name: "React",
    },
    {
      id: 3,
      logo: <SiTypescript className="text-[130px] text-blue-500" />,
      name: "Type Script",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {cardItems.map(({ id, logo, name }) => (
            <div
              className="w-full border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <div className="w-[120px] h-[120px] mx-auto p-2 ">
                {logo}
              </div>
              <div className="text-center mt-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-sm text-gray-700 dark:text-white">
                  All the projcet are available into my GitHub. Please visit and review it.
                </p>
              </div>
              <div className="mt-4 space-x-3 text-center">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  <a href="https://github.com/bhupendra9211?tab=repositories" target="_blank">Source code</a>
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
