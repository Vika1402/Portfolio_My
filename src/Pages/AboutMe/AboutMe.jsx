import React from "react";
import SkillRatings from "../../components/SkillRating/SkillRatings";
import AboutFooter from "../../components/AboutFooter/AboutFooter";

function AboutMe() {
  return (
    <div className=" overflow-x-hidden ">
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
              src="https://res.cloudinary.com/deo7ha4ct/image/upload/fl_preserve_transparency/v1744194501/1735486051850_iprbxv.jpg?_s=public-apps"
              alt=""
            />
          </div>

          <div className="lg:w-[70%]  w-[100%]">
            <p className="py-6 pl-4 pr-6 text-xl lg:text-[25px] text-center"></p>
            <div class="space-y-6 text-center md:text-start">
              <p className="text-xl text-white"> EDUCATION</p>
              <div class="border-b border-gray-300 pb-4">
                <p class="text-lg font-semibold">
                  Bachelor of Technology (B.Tech)
                </p>
                <p class="text-gray-600">CSVTU Bhilai</p>
                <p class="text-gray-600">2020 - 2024</p>
                <p class="text-gray-600">Grade: 8.5 CGPA</p>
              </div>
              <div class="border-b border-gray-300 pb-4">
                <p class="text-lg font-semibold">Higher Secondary</p>
                <p class="text-gray-600">GOVT HS SCHOOL SEMRA B</p>
                <p class="text-gray-600">2018 - 2020</p>
                <p class="text-gray-600">Grade: A+</p>
              </div>
              <div>
                <p class="text-lg font-semibold">Secondary</p>
                <p class="text-gray-600">GOVT HS SCHOOL SEMRA B</p>
                <p class="text-gray-600">2016 - 2018</p>
                <p class="text-gray-600">Grade: A+</p>
              </div>
            </div>
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
