import React from "react";

import avatarimg from "../assets/avatar.png";
import TextChange from "./Textchange";


const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between  items-center p-8 md:p-20">

      {/* LEFT CONTENT */}
      <div className="md:w-1/2 md:pt-10 text-center md:text-left">
        <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>

        <p className="text-sm md:text-2xl tracking-tight mt-3">
          Full stack Developer | Focused on Responsive Design, Clean Code & Continuous Learning
        </p>


        <a href="/resume.pdf" download="My_Resume.pdf">
          <button className="mt-6 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Download Resume
          </button>
        </a>

      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-[378px] flex justify-center  mb-8 md:mb-0">
        <img
          src={avatarimg}
          alt="avatar"
          className="w-56 sm:w-64 md:w-96 lg:w-100"
        />
      </div>
    </div>
  );
};

export default Home;
