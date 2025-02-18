import React from "react";

function AboutFooter() {
  return (
    <div>
      <div className="flex items-center justify-center w-full space-x-6 overflow-hidden lg:gap-14 px-10">
        <div className="flex flex-col items-center">
          <h1 className=" text-[2rem] lg:text-[5rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
            10+
          </h1>

          <span className="  text-[1rem] lg:text-[2rem] text-blue-400 text-nowrap">
            Happy Skills
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[2rem] lg:text-[5rem]  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
            25+
          </h1>
          <span className=" text-[1rem] lg:text-[2rem]   text-blue-400 text-nowrap">
            Completed Projects
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[2rem] lg:text-[5rem]  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text ">
            0+
          </h1>
          <span className="text-[1rem] lg:text-[2rem] text-blue-400">
            Experinces
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutFooter;
