"use client";

import React, { useState } from "react";
import { BiCalendar, BiUser } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import Model from "../Helper/Model";

const Hero = () => {
  const [showModel, setShowModel] = useState(false);
  const showModelHandler = () => setShowModel(true);
  const closeModelHandler = () => setShowModel(false);

  return (
    <div className="relative h-[88vh] bg-[url('/images/banner1.jpg')] bg-cover bg-center ">
      {/* model */}
      {showModel && <Model hideModel={closeModelHandler} />}

      {/* dark overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.68)]"></div>
      <div className="relative z-[10] flex items-center h-[100%] text-white">
        <div className="w-[80%] m-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
          {/* text content */}
          <div className="">
            <p
              data-aos="fade-left"
              className="sm:px-8 px-4 py-1 mb-[1rem] text-[12px] sm:text-[16px] bg-red-600 text-white w-fit uppercase"
            >
              football
            </p>
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-[25px] sm:text-[32px] md:text-[38px] lg:text-[45px] text-white leading-[2rem] md:leading-[3.5rem] font-medium uppercase"
            >
              The world cup 2026 what are the exciting news for us
            </h1>
            <div className="flex items-center space-x-14">
              <div
                data-aos="fade-left"
                data-aos-delay="400"
                className="flex items-center space-x-2 mt-[1rem] sm:mt-[2rem]"
              >
                <BiCalendar className="w-[1rem] h-[1rem] text-white" />
                <p className="text-[11px] sm:text-[16px] text-white uppercase">
                  July 13 , 2024
                </p>
              </div>

              <div
                data-aos="fade-left"
                data-aos-delay="600"
                className="flex items-center space-x-2 mt-[1rem] sm:mt-[2rem]"
              >
                <BiUser className="w-[1rem] h-[1rem] text-white" />
                <p className="text-[11px] sm:text-[16px] text-white uppercase">
                  By Chamika Lakshitha
                </p>
              </div>
            </div>
            <div className="mt-[2.4rem] flex items-center space-x-6">
              <button
                data-aos="zoom-in"
                data-aos-delay="800"
                className="sm:px-8 sm:py-2.5 px-4 py-2 bg-red-600 hover:bg-red-800 transition-all duration-200 sm:text-[17px] text-[13px] font-semibold text-white"
              >
                Watch Highlights
              </button>
              <button
                data-aos="zoom-out"
                data-aos-delay="1000"
                className="sm:px-8 sm:py-2.5 px-4 py-2 bg-white hover:bg-gray-300 transition-all duration-200 sm:text-[17px] text-[13px] font-semibold text-black"
              >
                Learn More
              </button>
            </div>
          </div>
          {/* play button */}
          <div data-aos="zoom-in" data-aos-delay="1200" className="">
            <div
              onClick={showModelHandler}
              className="w-[10rem] lg:ml-auto h-[10rem] rounded-full bg-red-600 hover:bg-black transition-all duration-200 cursor-pointer sm:flex flex-col items-center justify-center hidden"
            >
              <FaPlay className="w-[3rem] h-[3rem] text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
