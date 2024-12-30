import React from "react";
import SkillRatings from "../../components/SkillRating/SkillRatings";
import AboutFooter from "../../components/AboutFooter/AboutFooter";

function AboutMe() {
  return (
    <div className="mt-22 overflow-x-hidden mb-20">
      <div className="flex justify-center text-center">
        <h1 className="lg:text-[60px] text-violet-200 border-b-4 border-blue-300 text-[30px]">
          About me
        </h1>
      </div>

      <div className="flex mt-10 hero justify-center overflow-x-hidden">
        <div className="flex-col w-full hero-content lg:flex-row-reverse">
          <div className="w-[30%]">
            <img
              className="h-[100%] w-[100%] rounded-md object-center object-cover"
              src="https://media.licdn.com/dms/image/v2/D4D03AQErX1KBGpRdwQ/profile-displayphoto-shrink_800_800/B4DZQTB5FEG0E0-/0/1735486051850?e=1741219200&v=beta&t=pkPxTMo2-S3fcv30bEO470GRnlxOV7PYqk9oWaIF-D4"
              alt=""
            />
          </div>

          <div className="lg:w-[70%]  w-[100%]">
            <p className="py-6 pl-4 pr-6 text-xl lg:text-[25px] text-center">
              Hi, I’m Vikas, a passionate web developer with a love for creating
              intuitive, user-focused digital experiences.{" "}
              <span className="hidden md:block">
                I specialize in front-end technologies like React, Tailwind CSS,
                and JavaScript, but I’m also constantly exploring new tools to
                enhance my skills. When I’m not coding, share ideas!
              </span>
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
