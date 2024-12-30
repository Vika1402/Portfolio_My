import React from "react";
import services from "./service.js";
function ServicePage() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center ">
      <h1 className=" text-[30px] lg:text-[60px] text-violet-200 border-b-4 border-blue-300">
        Services
      </h1>
      <div className="w-[100%] lg:w-[80%] flex flex-wrap justify-evenly ">
        {services &&
          services.map((item) => {
            return (
              <div
                key={item.index}
                className="shadow-xl card bg-base-900 w-96 hover:flip"
              >
                <figure className="px-10 pt-10">
                  <img src={item.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="items-center text-center card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p className="line-clamp-2">{item.description}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ServicePage;
