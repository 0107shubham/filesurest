import React from "react";
import analysis from "../../assets/analysis.png";
import design from "../../assets/design.png";
import development from "../../assets/development.png";
import developmentimg from "../../assets/developmentimg2.png";
import testing from "../../assets/testing.png";
import launch from "../../assets/launch.png";
import support from "../../assets/support.png";

const Development = () => {
  return (
    <div className="w-full lg:w-[1220px] bg-[#fcfcfc] px-2 md:px-6 lg:px-10 my-5">
      <h1 className="text-[24px] sm:text-[36px] leading-normal font-bold tracking-wide">
        Application Development Stages
      </h1>
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
        <div className="space-y-6 my-4  ">
          <div className="bg-white p-6 space-y-6 rounded-lg shadow-md ">
            <div className="flex space-x-4 items-center">
              <img
                src={analysis}
                alt="analysis"
                className="h-[42px] w-[45px]"
              />
              <h2 className="text-[20px] leading-5 font-semibold tracking-wide">
                Analysis
              </h2>
            </div>
            <p className="text-[15px] leading-4 font-normal ">
              We craft precise technical specs, aligning with your business,
              technology, and user requirements.
            </p>
          </div>
          <div className="bg-white p-6 space-y-6 rounded-lg shadow-md ">
            <div className="flex space-x-4 items-center">
              <img src={design} alt="design" className="h-[42px] w-[45px]" />
              <h2 className="text-[20px] leading-5 font-semibold tracking-wide">
                Design
              </h2>
            </div>
            <p className="text-[15px] leading-4 font-normal ">
              We adapt the customer's corporate identity to the platform
              guidelines. We draw convenient and understandable interfaces.
            </p>
          </div>
          <div className="bg-white p-6 space-y-6 rounded-lg shadow-md ">
            <div className="flex space-x-4 items-center">
              <img
                src={development}
                alt="development"
                className="h-[42px] w-[45px]"
              />
              <h2 className="text-[20px] leading-5 font-semibold tracking-wide">
                Development
              </h2>
            </div>
            <p className="text-[15px] leading-4 font-normal ">
              We create an extensible architecture, write clean and stable code.
              We integrate with customer technologies.
            </p>
          </div>
        </div>
        <div className="sm:hidden lg:block">
          <img
            src={developmentimg}
            alt="developmentimg"
            className="block mx-auto  h-[564px] m-0"
          />
        </div>
        <div className="space-y-6 my-4  ">
          <div className="bg-white p-6 space-y-6 rounded-lg shadow-md ">
            <div className="flex space-x-4 items-center">
              <img src={testing} alt="testing" className="h-[42px] w-[45px]" />
              <h2 className="text-[20px] leading-5 font-semibold tracking-wide">
                Testing
              </h2>
            </div>
            <p className="text-[15px] leading-4 font-normal ">
              We carry out functional testing and do bug fixes. We adapt the
              application to different phone resolutions
            </p>
          </div>
          <div className="bg-white p-6 space-y-6 rounded-lg shadow-md ">
            <div className="flex space-x-4 items-center">
              <img src={launch} alt="launch" className="h-[42px] w-[45px]" />
              <h2 className="text-[20px] leading-5 font-semibold tracking-wide">
                Launching
              </h2>
            </div>
            <p className="text-[15px] leading-4 font-normal ">
              We design the application page and publish it in the App Store and
              Google Play stores.
            </p>
          </div>
          <div className="bg-white p-6 space-y-6 rounded-lg shadow-md ">
            <div className="flex space-x-4 items-center">
              <img src={support} alt="support" className="h-[42px] w-[45px]" />
              <h2 className="text-[20px] leading-5 font-semibold tracking-wide">
                Support
              </h2>
            </div>
            <p className="text-[15px] leading-4 font-normal ">
              We monitor the stability of the application, update it for new
              devices and versions of iOS and Android.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
