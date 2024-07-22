import React from "react";
import team from "../../assets/team.png";

const Team = () => {
  return (
    <div className="w-full lg:w-[1220px]  flex flex-col items-center h-full">
      <h1 className="text-[36px] lg:hidden leading-normal font-bold tracking-wide">
        Our team
      </h1>
      <div className="w-full flex flex-col lg:flex-row  lg:px-20 xl:px-0">
        <div className=" order-2 space-y-8 lg:order-1 pl-4 lg:w-[50%]">
          <h1 className="text-[36px]  w-fit hidden lg:block leading-normal font-bold ">
            Our team
          </h1>
          <p className="text-[15px] leading-5 font-medium w-full ">
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </p>
          <div className="flex space-x-[2vw] w-fit  ">
            <div className="flex flex-col  ">
              <p className="text-[32px] sm:text-[48px]  font-normal leading-relaxed">
                28
              </p>
              <p className="text-[13px] text-[#667084] font-normal left-4">
                team members
              </p>
            </div>
            <div className="flex flex-col  ">
              <p className="text-[32px] sm:text-[48px] font-normal leading-relaxed">
                +100
              </p>
              <p className="text-[13px] text-[#667084] font-normal left-4">
                projects
              </p>
            </div>
            <div className="flex flex-col  ">
              <p className="text-[32px] sm:text-[48px] font-normal leading-relaxed">
                7 years
              </p>
              <p className="text-[13px] text-[#667084] font-normal left-4">
                in IT sphere
              </p>
            </div>
          </div>
          <p className="text-[15px] leading-5 font-medium ">
            All the necessary specialists - from a designer to a tester - are on
            our staff. We hire the best specialists in the market. It's
            expensive but worth it
          </p>
        </div>
        <div className="order-1 lg:order-2 flex justify-start lg:justify-center">
          <img src={team} alt="team" className="rounded-lg h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Team;
