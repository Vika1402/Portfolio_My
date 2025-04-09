import React from "react";
import MernStackIcons from "../../components/MernIcon/MernStackIcons";

import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-10 mb-20 ">
      <div className="flex items-center justify-center  mt-16 py-2">
        <div className=" mt-10 w-[180px] h-[180px] md:w-[320px] md:h-[320px] flex items-center justify-center rounded-full">
          <img
            className=" w-[100%] h-[100%] rounded-full object-cover"
            src="https://res.cloudinary.com/deo7ha4ct/image/upload/fl_preserve_transparency/v1744194501/1735486051850_iprbxv.jpg?_s=public-apps"
            alt="profile_image"
          />
        </div>
      </div>
      <div className="text-center">
        <h1 className=" text-[40px]  lg:text-[66px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-transparent bg-clip-text relative">
          I’m Vikas Kumar
        </h1>

        <h1 className="text-[50px] lg:text-[70px]">
          Full Stack Developer Based India.
        </h1>
      </div>
      <div className="text-center flex justify-center">
        <p className="text-white w-[80%] lg:w-[40%] mt-2 text-[20px]">
          Hi, I’m Vikas, a passionate web developer with a love for creating
          intuitive, user-focused digital experiences. I specialize in front-end
          technologies like React, Tailwind CSS, and JavaScript, but I’m also
          constantly exploring new tools to enhance my skills. When I’m not
          coding, share ideas!
        </p>
      </div>
      <div className="flex  justify-center space-x-4 mt-6">
        <button
          onClick={() => navigate("/footer")}
          className="btn btn-outline btn-secondary rounded-full text-xl"
        >
          Contact With Me
        </button>
        <a
          className="btn btn-outline rounded-full text-xl"
          href="https://drive.google.com/file/d/1ajOZQJAmy94bm3aP0--wQTbJODBMhtaJ/view?usp=sharing"
        >
          My Resume
        </a>
      </div>
      <MernStackIcons />
    </div>
  );
}

export default HomePage;
