import React from "react";
import socilaMedia from "../../assets/socialmedia.png";
import md1 from "../../assets/md1.png";
import md2 from "../../assets/md2.png";
import md3 from "../../assets/md3.png";
import md4 from "../../assets/md4.png";
import md5 from "../../assets/md5.png";
import md6 from "../../assets/md6.png";
import md7 from "../../assets/md7.png";
import md8 from "../../assets/md8.png";
import md9 from "../../assets/md9.png";
import md10 from "../../assets/md10.png";
import md11 from "../../assets/md11.png";
import md12 from "../../assets/md12.png";
import md13 from "../../assets/md13.png";
import md14 from "../../assets/md14.png";

const Media = () => {
  return (
    <div id="media" className="w-full lg:w-[1220px] ">
      <div className="w-full">
        <h1 className="text-[24px] sm:text-[36px] leading-normal ml-3">
          Developed more than <span className="text-[#]">100</span>
          <br className="hidden sm:block" /> projects in{" "}
          <span className="text-[#80A948]">15</span> industries
        </h1>

        <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-5">
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img
                src={socilaMedia}
                alt="socialMedia"
                className="h-[22px] w-[20px] "
              />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">
              Social media
            </p>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img src={md1} alt="md1" className="h-[22px] w-[20px] " />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">
              Fitness and sport
            </p>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img src={md2} alt="md2" className="h-[22px] w-[20px] " />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">Bank</p>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img src={md3} alt="md3" className="h-[22px] w-[20px] " />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">
              Construction
            </p>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img src={md4} alt="md4" className="h-[22px] w-[20px] " />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">
              Game projects
            </p>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img src={md5} alt="md5" className="h-[22px] w-[20px] " />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">Education </p>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img src={md6} alt="md6" className="h-[22px] w-[20px] " />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">
              Auto, transport
            </p>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img src={md7} alt="md7" className="h-[22px] w-[20px] " />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">
              Medicine, health
            </p>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img src={md8} alt="md8" className="h-[22px] w-[20px] " />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">
              Restaurants, food delivery
            </p>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img src={md9} alt="md9" className="h-[22px] w-[20px] " />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">
              Online cources
            </p>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img src={md10} alt="md10" className="h-[22px] w-[20px] " />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">
              Marketplaces{" "}
            </p>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img src={md11} alt="md11" className="h-[22px] w-[20px] " />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">
              AR technology
            </p>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img src={md12} alt="md12" className="h-[22px] w-[20px] " />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">TV series</p>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img src={md13} alt="md13" className="h-[22px] w-[20px] " />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">Startups</p>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <img src={md14} alt="md14" className="h-[22px] w-[20px] " />
            </div>
            <p className="text-[17px] font-normal leading-6 mx-2">Religion </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
