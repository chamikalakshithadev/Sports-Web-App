import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#111111]">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10">
        {/* 1st part */}
        <div className="">
          <h1 className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
            About Club
          </h1>
          <p className="text-[17px] text-white font-semibold text-opacity-70 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            culpa hic recusandae cum mollitia sed libero, minus nostrum
            officiis.
          </p>
          <div className="mt-[1.5rem] flex items-center space-x-3">
            <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col">
              <FaFacebookF className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center justify-center flex-col">
              <FaTwitter className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col">
              <FaYoutube className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col">
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
        {/* 2nd part */}
        <div className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
          <h1>About Us</h1>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-20 mb-[0.7rem] uppercase">
            About club
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-20 mb-[0.7rem] uppercase">
            contacts
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-20 mb-[0.7rem] uppercase">
            price table
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-20 mb-[0.7rem] uppercase">
            shop
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-20 mb-[0.7rem] uppercase">
            our players
          </p>
        </div>
        {/* 3rd part */}
        <div className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
          <h1>Quick Links</h1>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-20 mb-[0.7rem] uppercase">
            About club
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-20 mb-[0.7rem] uppercase">
            contacts
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-20 mb-[0.7rem] uppercase">
            price table
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-20 mb-[0.7rem] uppercase">
            shop
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-20 mb-[0.7rem] uppercase">
            our players
          </p>
        </div>

        {/* 4th part */}
        <div className="text-[22px] text-white font-semibold mb-[1.5rem] ">
          <h1>Get in Touch</h1>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-20 mb-[0.7rem] ">
            0766229544
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-20 mb-[0.7rem] ">
            chamikalakshitha935@gmail.com
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-20 mb-[0.7rem] ">
            Raigambandara mawatha,Raigama,Bandaragama
          </p>
        </div>
      </div>
      {/* copyright */}
      <h1 className="mt-[2rem] text-[14px] w-[80%] mx-auto text-white opacity-50">
        All Rights Reserved-2024
      </h1>
    </div>
  );
};

export default Footer;
