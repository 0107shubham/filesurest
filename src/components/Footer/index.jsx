import React from "react";
import logofooter from "../../assets/logofooter.png";
import { FiMapPin } from "react-icons/fi";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { BiMobileAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <div id="contact" className="bg-[#111111] w-[1220px]">
      <div className="w-full flex justify-center ">
        <img
          src={logofooter}
          alt="logofooter"
          className="w-[290px] h-[113px]"
        />
      </div>
      <div className="my-6 grid grid-cols-4 gap-4 px-4">
        <div className="flex flex-col  ">
          <div className="flex items-center space-x-2  ">
            <BiMobileAlt className="text-[24px] text-[#667084] leading-6" />
            <p className="text-[24px] font-normal text-[#667084] leading-6">
              Contact nums
            </p>
          </div>

          <p className="text-[17px] text-white leading-5 font-normal left-4 my-2">
            +91 0000000000
          </p>
        </div>
        <div className="flex flex-col  ">
          <div className="flex items-center space-x-2  ">
            <FiMapPin className="text-[24px] text-[#667084] leading-6" />
            <p className="text-[24px] font-normal text-[#667084] leading-6">
              Adress
            </p>
          </div>

          <p className="text-[17px] text-white leading-5 font-normal left-4 my-2">
            Mumbai, India
          </p>
        </div>
        <div className="flex flex-col  ">
          <div className="flex items-center space-x-2  ">
            <MdOutlineEmail className="text-[24px] text-[#667084] leading-6" />
            <p className="text-[24px] font-normal text-[#667084] leading-6">
              Gmail
            </p>
          </div>

          <p className="text-[17px] text-white leading-5 font-normal left-4 my-2">
            demo@gmail.com
          </p>
        </div>
        <div className="flex flex-col  ">
          <div className="flex items-center space-x-2  ">
            <CiFileOn className="text-[24px] text-[#667084] leading-6" />
            <p className="text-[24px] font-normal text-[#667084] leading-6">
              Leave a request
            </p>
          </div>

          <p className="text-[17px] text-white leading-5 font-normal left-4 my-2">
            Leave a request
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center my-4">
        <p className="text-[13px] leading-5 text-white font-medium tracking-wide my-3">
          We work throughout the world
        </p>
      </div>
    </div>
  );
};

export default Footer;
