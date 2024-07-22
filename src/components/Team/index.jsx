import React from "react";
import team from "../../assets/team.png";

const Team = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1220px] grid grid-cols-2 py-12">
        <div className="space-y-8">
          <h1 className="text-[36px] leading-normal font-bold tracking-wide">
            Our team
          </h1>
          <p className="text-[15px] leading-5 font-medium tracking-wide my-3">
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </p>
          <div className="flex gap-6">
            <div className="flex flex-col  ">
              <p className="text-[48px] font-normal leading-relaxed">28</p>
              <p className="text-[13px] text-[#667084] font-normal left-4">
                team members
              </p>
            </div>
            <div className="flex flex-col  ">
              <p className="text-[48px] font-normal leading-relaxed">+100</p>
              <p className="text-[13px] text-[#667084] font-normal left-4">
                projects
              </p>
            </div>
            <div className="flex flex-col  ">
              <p className="text-[48px] font-normal leading-relaxed">7 years</p>
              <p className="text-[13px] text-[#667084] font-normal left-4">
                in IT sphere
              </p>
            </div>
          </div>
          <p className="text-[15px] leading-5 font-medium tracking-wide my-3">
            All the necessary specialists - from a designer to a tester - are on
            our staff. We hire the best specialists in the market. It's
            expensive but worth it
          </p>
        </div>
        <div className=" flex justify-center">
          <img src={team} alt="team" className="rounded-lg h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Team;
