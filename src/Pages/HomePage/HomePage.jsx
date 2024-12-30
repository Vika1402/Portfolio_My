import React from "react";
import MernStackIcons from "../../components/MernIcon/MernStackIcons";
function HomePage() {
  return (
    <div className="flex flex-col gap-10 mb-20">
      <div className="flex items-center justify-center  mt-16 py-2">
        <div className=" mt-10 w-[180px] h-[180px] md:w-[350px] md:h-[350px] flex items-center justify-center rounded-full">
          <img
            className=" w-[100%] h-[100%] rounded-full object-cover"
            src="https://media.licdn.com/dms/image/v2/D4D03AQErX1KBGpRdwQ/profile-displayphoto-shrink_800_800/B4DZQTB5FEG0E0-/0/1735486051850?e=1741219200&v=beta&t=pkPxTMo2-S3fcv30bEO470GRnlxOV7PYqk9oWaIF-D4"
            alt=""
          />
        </div>
      </div>
      <div className="text-center">
        <h1 className=" text-[40px]  lg:text-[66px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text relative">
          I’m Vikas Kumar
        </h1>

        <h1 className="text-[50px] lg:text-[70px]">
          Full Stack Developer Based India.
        </h1>
      </div>
      <div className="text-center flex justify-center">
        <p className="text-white w-[80%] lg:w-[40%] mt-2 text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          voluptas molestiae minima! Deserunt dicta eos adipisci? Voluptates
          alias debitis nam?
        </p>
      </div>
      <div className="flex  justify-center space-x-4 mt-6">
        <button className="btn btn-outline btn-secondary rounded-full text-xl">
          Contact With Me
        </button>
        <button className="btn btn-outline rounded-full text-xl ">
          My Resume
        </button>
      </div>
      <MernStackIcons />
    </div>
  );
}

export default HomePage;
