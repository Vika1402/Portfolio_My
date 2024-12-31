import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex w-full justify-center mt-22 text-center">
      <div className=" w-[500px] h-[500px] rounded-full mt-[100px]">
        <img
          className="w-[100%] h-[100%] rounded-full "
          src="https://img.freepik.com/free-vector/glitch-background_23-2148068933.jpg?t=st=1735625265~exp=1735628865~hmac=dac94061deda1ced8f3f85b1e978d8326b5d099fc3883b21a486d5760defe153&w=1480"
          alt=""
        />
        <Link to={"/"} className="btn btn-outline btn-warning mt-10">
          Back
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
