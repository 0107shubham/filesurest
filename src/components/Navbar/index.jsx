import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

import { MdOutlineEmail } from "react-icons/md";
import { BiMobileAlt } from "react-icons/bi";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("sidebar", isOpen);

  return (
    <div className="h-[60px] lg:h-[92px] bg-[#ffff]  w-[100vw] lg:w-[1220px] shadow-lg my-2">
      <header className="hidden lg:flex justify-around  items-center">
        <div className="py-2">
          <a href="#home">
            <img src={logo} alt="logo" className="h-[70px] w-[174px] " />
          </a>{" "}
        </div>
        <ul className="flex gap-3">
          <li>
            {" "}
            <a href="#services">Services</a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="#media"
              className="text-black  hover:font-semibold active:border-b text-[14px] leading-4 p-4"
            >
              Media
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="#cases"
              className="text-black  hover:font-semibold active:border-b text-[14px] leading-4 p-4"
            >
              Cases
            </a>{" "}
          </li>

          <li>
            {" "}
            <a
              href="#faq"
              className="text-black  hover:font-semibold active:border-b text-[14px] leading-4 p-4"
            >
              FAQ{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="#contact"
              className="text-black  hover:font-semibold active:border-b text-[14px] leading-4 p-4"
            >
              Contacts
            </a>{" "}
          </li>
        </ul>
        <ul className="flex  gap-3 ">
          <li className="flex  items-center text-[14px] text-[#80A948] leading-4 font-medium">
            <span>
              <BiMobileAlt className=" text-[#80A948] text-[22px] mx-2 " />
            </span>{" "}
            +91 000000000
          </li>
          <li className="flex  items-center text-[14px] text-[#80A948] leading-4 font-medium">
            {" "}
            <span className="">
              <MdOutlineEmail className=" text-[#80A948] text-[22px] mx-2 " />
            </span>{" "}
            demo@gmail.com
          </li>
        </ul>
      </header>

      <div className="lg:hidden">
        <div className="flex justify-between px-2">
          <button
            className="text-blue-700  font-medium rounded-lg  px-5 py-1.5 mb-2"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <GiHamburgerMenu className="text-[32px]" />
          </button>
          <div className="py-2">
            <img src={logo} alt="logo" className="h-[40px] w-[174px] " />
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white w-80 dark:bg-gray-800`}
        >
          <h5
            id="drawer-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            <svg
              className="w-4 h-4 mr-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            Info
          </h5>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          <ul className="flex flex-col gap-5 justify-start">
            <li>
              <a
                onClick={() => setIsOpen(false)}
                className="text-black  hover:font-semibold active:border-b text-[14px] leading-4 p-4"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="#media"
                className="text-black  hover:font-semibold active:border-b text-[14px] leading-4 p-4"
              >
                Media
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="#cases"
                className="text-black  hover:font-semibold active:border-b text-[14px] leading-4 p-4"
              >
                Cases
              </a>
            </li>

            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="#faq"
                className="text-black  hover:font-semibold active:border-b text-[14px] leading-4 p-4"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="#contact"
                className="text-black  hover:font-semibold active:border-b text-[14px] leading-4 p-4"
              >
                Contacts
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 mt-5">
            <li className="flex  items-center text-[14px] text-[#80A948] leading-4 font-medium">
              <span>
                <BiMobileAlt className=" text-[#80A948] text-[22px] mx-2 " />
              </span>{" "}
              +91 000000000
            </li>
            <li className="flex  items-center text-[14px] text-[#80A948] leading-4 font-medium">
              {" "}
              <span className="">
                <MdOutlineEmail className=" text-[#80A948] text-[22px] mx-2 " />
              </span>{" "}
              demo@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
