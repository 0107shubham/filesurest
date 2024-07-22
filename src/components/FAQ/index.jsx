import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full grid grid-cols-2 gap-4 " id="faq">
      <div className="border-t border-b">
        <div
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium        gap-3"
          aria-expanded={activeIndex === 1}
        >
          <span className="mb-2  text-[20px] leading-5 font-semibold tracking-wide ">
            What is the cost of a mobile application?
          </span>
          <button
            className={`w-3 h-3 ${
              activeIndex === 1 ? "rotate-180" : ""
            } shrink-0`}
          >
            {activeIndex === 1 ? (
              <span onClick={() => handleToggle(null)}>+</span>
            ) : (
              <span onClick={() => handleToggle(1)}>*</span>
            )}
          </button>
        </div>

        <div className={`p-5   ${activeIndex === 1 ? "block" : "hidden"}`}>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
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
          <button
            className={`w-3 h-3 ${
              activeIndex === 2 ? "rotate-180" : ""
            } shrink-0`}
          >
            {activeIndex === 2 ? (
              <span onClick={() => handleToggle(null)}>+</span>
            ) : (
              <span onClick={() => handleToggle(2)}>*</span>
            )}
          </button>
        </div>

        <div className={`p-5   ${activeIndex === 2 ? "block" : "hidden"}`}>
          <p className="mb-2  text-[15px] leading-5 font-semibold tracking-wide ">
            Development terms directly depend on the requirements for the mobile
            application, the characteristics of the company, as well as the
            wishes of the customer. <br /> <br /> <br />
            Average development time from start to finished application: <br />{" "}
            Medium projects up to 3 months. <br /> Large projects about 4-6
            months. <br /> To get a more accurate estimate of the project
            completion time, it is necessary to determine the main task of the
            application, think over its logic and functionality.
          </p>
        </div>
      </div>
      <div className="border-t border-b">
        <div
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium        gap-3"
          aria-expanded={activeIndex === 3}
        >
          <span className="mb-2  text-[20px] leading-5 font-semibold tracking-wide ">
            Do you provide a guarantee for the mobile application?
          </span>
          <button
            className={`w-3 h-3 ${
              activeIndex === 2 ? "rotate-180" : ""
            } shrink-0`}
          >
            {activeIndex === 3 ? (
              <span onClick={() => handleToggle(null)}>+</span>
            ) : (
              <span onClick={() => handleToggle(3)}>*</span>
            )}
          </button>
        </div>

        <div className={`p-5   ${activeIndex === 3 ? "block" : "hidden"}`}>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
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
            <div className="border-t border-b">
              <div
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium        gap-3"
                aria-expanded={activeIndex === 2}
              >
                <span className="mb-2  text-[20px] leading-5 font-semibold tracking-wide ">
                  I will not tell my idea, do you guarantee confidentiality?
                </span>
                <button
                  className={`w-3 h-3 ${
                    activeIndex === 2 ? "rotate-180" : ""
                  } shrink-0`}
                >
                  {activeIndex === 2 ? (
                    <span onClick={() => handleToggle(null)}>+</span>
                  ) : (
                    <span onClick={() => handleToggle(2)}>*</span>
                  )}
                </button>
              </div>

              <div
                className={`p-5   ${activeIndex === 2 ? "block" : "hidden"}`}
              >
                <p className="mb-2  text-[15px] leading-5 font-semibold tracking-wide ">
                  Development terms directly depend on the requirements for the
                  mobile application, the characteristics of the company, as
                  well as the wishes of the customer. <br /> <br /> <br />
                  Average development time from start to finished application:{" "}
                  <br /> Medium projects up to 3 months. <br /> Large projects
                  about 4-6 months. <br /> To get a more accurate estimate of
                  the project completion time, it is necessary to determine the
                  main task of the application, think over its logic and
                  functionality.
                </p>
              </div>
            </div>
          </span>
          <button
            className={`w-3 h-3 ${
              activeIndex === 4 ? "rotate-180" : ""
            } shrink-0`}
          >
            {activeIndex === 4 ? (
              <span onClick={() => handleToggle(null)}>+</span>
            ) : (
              <span onClick={() => handleToggle(2)}>*</span>
            )}
          </button>
        </div>

        <div className={`p-5   ${activeIndex === 4 ? "block" : "hidden"}`}>
          <p className="mb-2  text-[15px] leading-5 font-semibold tracking-wide ">
            Development terms directly depend on the requirements for the mobile
            application, the characteristics of the company, as well as the
            wishes of the customer. <br /> <br /> <br />
            Average development time from start to finished application: <br />{" "}
            Medium projects up to 3 months. <br /> Large projects about 4-6
            months. <br /> To get a more accurate estimate of the project
            completion time, it is necessary to determine the main task of the
            application, think over its logic and functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
