import React, { useRef, useState, useEffect } from "react";
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h4 from "../../assets/h4.png";
import h5 from "../../assets/h5.png";

const Home = () => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  console.log(containerHeight);
  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="grid w-full xl:w-[1220px] md:grid-cols-2  px-4 xl:px-0">
      <div ref={containerRef} className="space-y-6  h-fit">
        <p className="text-[24px] sm:text-[39px] leading-tight font-bold tracking-wide">
          <spna className="text-orange-500">User-Centric Excellence:</spna> Our
          App Development services Tackles Your Pain Points
        </p>
        <p className="text-[10px] sm:text-[15px] leading-5 font-medium tracking-wide my-3">
          Experience a Seamless Digital Journey with
          <span className="text-[#80A948]">Desun</span> - Where Every Line of
          Code Resolves Your Challenges and{" "}
          <span className="text-orange-500">Elevates Your App Experience </span>
          to Unparalleled Heights.
        </p>
        <div className="bg-white p-6 rounded-md shadow-md md:mx-auto my-4 md:my-0">
          <p className="text-[16px] sm:text-[20px] leading-5 font-medium tracking-wide my-3">
            Leave your contacts and we will call you back within 30 minutes
          </p>
          <form className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-10">
            <div className="grid md:grid-cols-2 gap-2 lg:col-span-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="custom-input mt-1 block w-full px-3 py-2 bg-white border-b-2 border-gray-300 focus:border-black focus:ring-0"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="custom-input mt-1 block w-full px-3 py-2 bg-white border-b-2 border-gray-300 focus:border-black focus:ring-0"
                />
              </div>
              <div>
                <label
                  htmlFor="businessName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  className="custom-input mt-1 block w-full px-3 py-2 bg-white border-b-2 border-gray-300 focus:border-black focus:ring-0"
                />
              </div>
              <div>
                <label
                  htmlFor="businessEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Email
                </label>
                <input
                  type="email"
                  id="businessEmail"
                  className="custom-input mt-1 block w-full px-3 py-2 bg-white border-b-2 border-gray-300 focus:border-black focus:ring-0"
                />
              </div>
            </div>
            <div className="flex justify-end lg:justify-center items-end w-full  ">
              <button
                type="submit"
                className="bg-[#80A948] text-white h-fit w-fit px-4 py-2 rounded-md shadow  focus:outline-none"
              >
                Get consultation
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className={`  w-full overflow-hidden  `}
        style={{ height: `${containerHeight}px` }}
      >
        <div className=" grid grid-cols-2 gap-2 -rotate-12">
          <div>
            <img src={h1} alt="h1" />
            <img src={h2} alt="h2" />
          </div>
          <div>
            <img src={h4} alt="h4" />
            <img src={h5} alt="h5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
