import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="my-10 w-full xl:w-[1220px] bg-white px-4">
      <h1 className="text-[36px] leading-normal font-bold tracking-wide">
        FAQS
      </h1>
      <div className=" grid lg:grid-cols-2 gap-4 ">
        <div>
          <div className="border-t border-b">
            <div
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium        gap-3"
              aria-expanded={activeIndex === 1}
            >
              <span className="mb-2  text-[20px] leading-5 font-semibold tracking-wide ">
                What is the cost of a mobile application?
              </span>
              <button>
                {activeIndex === 1 ? (
                  <span onClick={() => handleToggle(null)}>
                    <RxCross2 className="text-gray-500 text-[24px]   " />
                  </span>
                ) : (
                  <div
                    className=" bg-white p-3 rounded-full shadow-lg"
                    onClick={() => handleToggle(1)}
                  >
                    <IoMdAdd className="text-[#80A948] text-[24px]   " />
                  </div>
                )}
              </button>
            </div>

            <div className={`p-5   ${activeIndex === 1 ? "block" : "hidden"}`}>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </div>
          </div>
          <div className="border-t border-b">
            <div
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium        gap-3"
              aria-expanded={activeIndex === 2}
            >
              <span className="mb-2  text-[20px] leading-5 font-semibold tracking-wide ">
                How long will development take?
              </span>
              <button>
                {activeIndex === 2 ? (
                  <span onClick={() => handleToggle(null)}>
                    <RxCross2 className="text-gray-500 text-[24px]   " />
                  </span>
                ) : (
                  <div
                    className=" bg-white p-3 rounded-full shadow-lg"
                    onClick={() => handleToggle(2)}
                  >
                    <IoMdAdd className="text-[#80A948] text-[24px]   " />
                  </div>
                )}
              </button>
            </div>

            <div className={`p-5   ${activeIndex === 2 ? "block" : "hidden"}`}>
              <p className="mb-2  text-[15px] leading-5 font-semibold tracking-wide ">
                Development terms directly depend on the requirements for the
                mobile application, the characteristics of the company, as well
                as the wishes of the customer. <br /> <br /> <br />
                Average development time from start to finished application:{" "}
                <br /> Medium projects up to 3 months. <br /> Large projects
                about 4-6 months. <br /> To get a more accurate estimate of the
                project completion time, it is necessary to determine the main
                task of the application, think over its logic and functionality.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t border-b">
            <div
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium        gap-3"
              aria-expanded={activeIndex === 3}
            >
              <span className="mb-2  text-[20px] leading-5 font-semibold tracking-wide ">
                Do you provide a guarantee for the mobile application?
              </span>
              <button>
                {activeIndex === 3 ? (
                  <span onClick={() => handleToggle(null)}>
                    <RxCross2 className="text-gray-500 text-[24px]   " />
                  </span>
                ) : (
                  <div
                    className=" bg-white p-3 rounded-full shadow-lg"
                    onClick={() => handleToggle(3)}
                  >
                    <IoMdAdd className="text-[#80A948] text-[24px]   " />
                  </div>
                )}
              </button>
            </div>

            <div className={`p-5   ${activeIndex === 3 ? "block" : "hidden"}`}>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </div>
          </div>
          <div className="border-t border-b">
            <div
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium        gap-3"
              aria-expanded={activeIndex === 4}
            >
              <span className="mb-2  text-[20px] leading-5 font-semibold tracking-wide ">
                I will not tell my idea, do you guarantee confidentiality?
              </span>
              <button>
                {activeIndex === 4 ? (
                  <span onClick={() => handleToggle(null)}>
                    <RxCross2 className="text-gray-500 text-[24px]   " />
                  </span>
                ) : (
                  <div
                    className=" bg-white p-3 rounded-full shadow-lg"
                    onClick={() => handleToggle(4)}
                  >
                    <IoMdAdd className="text-[#80A948] text-[24px]   " />
                  </div>
                )}
              </button>
            </div>

            <div className={`p-5   ${activeIndex === 4 ? "block" : "hidden"}`}>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
