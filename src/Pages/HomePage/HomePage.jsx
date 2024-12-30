import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-center  mt-10 py-2">
        <div className="bg-red-300  w-[180px] h-[180px] md:w-[350px] md:h-[350px] flex items-center justify-center rounded-full">
          <img
            className=" w-[180px] h-[180px] md:w-[350px] md:h-[350px] rounded-full"
            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?ga=GA1.1.2024936588.1734079803&semt=ais_hybrid"
            alt=""
          />
        </div>
      </div>
      <div className="text-center">
        <h1 className=" text-[40px]  lg:text-[66px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
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
    </div>
  );
}

export default HomePage;
