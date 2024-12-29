import React from "react";

function AboutFooter() {
  return (
    <div>
      <div className="flex w-full justify-center gap-8 lg:gap-16 p-4 text-center">
        <div className="flex flex-col items-center">
          <h1 className=" text-[2rem] lg:text-[5rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
            10+
          </h1>

          <span className="  text-[1rem] lg:text-[2rem] text-blue-400">
            Happy Skills
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[2rem] lg:text-[5rem]  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
            25+
          </h1>
          <span className=" text-[1rem] lg:text-[2rem]   text-blue-400">
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
