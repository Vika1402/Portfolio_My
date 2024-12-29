import React from "react";
import SkillRatings from "../../components/SkillRating/SkillRatings";
import AboutFooter from "../../components/AboutFooter/AboutFooter";

function AboutMe() {
  return (
    <div className="mt-32 ">
      <div className="text-center flex justify-center">
        <h1 className="text-[60px] text-violet-200 border-b-4 border-blue-300">About me</h1>
      </div>

      <div className="hero bg-base-200  mt-10 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-[30%]">
            <img
              className="h-[100%] w-[100%] rounded-md object-center object-cover"
              src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?ga=GA1.1.2024936588.1734079803&semt=ais_hybrid"
              alt=""
            />
          </div>

          <div className="w-[90%] lg:w-[70%] ">
            <p className="py-6 text-xl lg:text-[25px]">
              Hi, I’m Alex, a passionate web developer with a love for creating
              intuitive, user-focused digital experiences. I specialize in
              front-end technologies like React, Tailwind CSS, and JavaScript,
              but I’m also constantly exploring new tools to enhance my skills.
              When I’m not coding, share ideas!
            </p>

            <SkillRatings />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <AboutFooter />
      </div>
    </div>
  );
}

export default AboutMe;
