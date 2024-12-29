import React from "react";
import services from "./service.js";
function ServicePage() {
  return (
    <div className="flex justify-center mt-20 flex-col text-center items-center ">
      <h1 className=" text-[60px] text-violet-200 border-b-4 border-blue-300">My services</h1>
      <div className="w-[100%] lg:w-[80%] flex flex-wrap justify-evenly ">
        {services &&
          services.map((item) => {
            return (
              <div key={item.index} className="card bg-base-900 w-96 shadow-xl  hover:flip">
                <figure className="px-10 pt-10">
                  <img src={item.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
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
