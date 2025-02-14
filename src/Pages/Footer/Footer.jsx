import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-xl lg:text-2xl rounded p-6 mt-[150px] bottom-0">
      <nav className="grid grid-flow-col gap-4 text-nowrap">
        <Link to={"/aboutme"} className="link link-hover">
          About us
        </Link>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">email</a>
        <a className="link link-hover">Hire me</a>
      </nav>
      vikaskumarsinha1402@gmail.com
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/vikas-kumar014/">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/mr.vikas14/?igsh=Yzk3dmVmZXNrbmIz">
            <FaInstagram />
          </a>
          <a href="https://github.com/Vika1402">
            <FaGithub />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Only Lerning Purpose All demo
          right reserved by vikas portfolio
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
