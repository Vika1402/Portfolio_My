import React from "react";
import projects from "./projects";
import { Link } from "react-router-dom";

function ProjectPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-22 text-center mb-20">
      <h1 className=" text-[30px] lg:text-[60px] text-violet-200  border-blue-300 border-b-4">
        Projects
      </h1>

      <div className="w-[100%] lg:w-[70%] flex flex-wrap justify-evenly gap-8  lg:mt-[350px] ">
        {projects &&
          projects.map((item) => {
            return (
              <div
                key={item.id}
                className={`shadow-2xl card bg-base-900 w-[100%] lg:w-[40%] hover:flip lg:mb-[140px]  border-violet-300   hover:animate-none ${
                  item.id === 1 || item.id === 3
                    ? " lg:translate-y-[-200px]"
                    : " lg:translate-y-[200px]"
                }
                 `}
              >
                <figure className="px-10 pt-10">
                  <img
                    src={item?.images}
                    alt="Shoes"
                    className="rounded-xl border-2 w-[100%] h-[100%] object-center object-cover"
                  />
                </figure>
                <div className="items-center text-center card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p className="line-clamp-2">{item.description}</p>
                  <div className="card-actions">
                    {item.projectLink && (
                      <Link
                        to={item.projectLink}
                        className="btn btn-outline btn-info"
                      >
                        Click to Explore
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProjectPage;
