import React from "react";
import "./index.css";

const Contact = () => {
  return (
    <div className="w-full  bg-gradient-to-r from-[#f9bc20] to-[#7da546] flex justify-center px-2 ">
      <div className="grid md:grid-cols-2  w-full lg:w-[1220px] py-4 ">
        <div>
          <h1 className="text-[36px] leading-normal font-bold tracking-wide">
            Let's discuss <br /> Your project
          </h1>
          <p className="text-[15px] leading-5 font-medium tracking-wide my-3">
            Let's figure out how to create an effective application,
            <br />
            its cost and terms of its development
          </p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md max-w-md md:mx-auto my-4 md:my-0">
          <form className="grid sm:grid-cols-2 gap-2">
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
            <div className="flex justify-end w-full  sm:col-span-2">
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow hover:bg-yellow-600 focus:outline-none"
              >
                Discuss the project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
