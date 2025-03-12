import React from "react";
import { Link } from "react-router-dom";

function NavBAr() {
  return (
    <div className="navbar bg-base-100 sticky top-0 ring-0 left-0 z-20">
      <div className="navbar-start">
        <div className="dropdown  block md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"/footer"}>Contact</Link>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost text-xl tracking-[.40rem] lg:text-2xl"
        >
          ᴠɪᴋꫝꜱ
          <span className="loading loading-infinity loading-lg w-[3rem] hidden lg:block"></span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 lg:text-2xl">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/aboutme"}>About me</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/footer"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to={"/footer"}
          className="btn btn-outline btn-secondary rounded-full text-white lg:text-lg"
        >
          Contact with me
        </Link>
      </div>
    </div>
  );
}

export default NavBAr;
