import React, { useState } from "react";
import location from "../../assets/location.png";
import realstate from "../../assets/realstate.png";
import appstore from "../../assets/appstore.png";
import googleplay from "../../assets/googleplay.png";
import projectimage from "../../assets/projectimage.png";

const projects = [
  { id: 1, name: "Project 1", details: "Details of Project 1" },
  { id: 2, name: "Project 2", details: "Details of Project 2" },
  { id: 3, name: "Project 3", details: "Details of Project 3" },
  { id: 4, name: "Project 4", details: "Details of Project 4" },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(1);

  return (
    <div className="w-[1220px] grid my-4 bg-[#f2f4f7]">
      <h1 className="text-[36px] font-[Inter] my-4">
        Projects we are proud of
      </h1>
      <p className="w-[50vw] text-[15px] font-medium leading-5 my-2">
        Our software development company is truly proud of the wonderful clients
        we have worked with. We enjoy a long-term partnership
      </p>
      <div>
        <div className="flex gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`mx-4 my-7 cursor-pointer ${
                selectedProject === project.id
                  ? "active border-b-2 border-purple-400"
                  : ""
              }`}
              onClick={() =>
                setSelectedProject(
                  selectedProject === project.id ? null : project.id
                )
              }
            >
              {project.name}
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="">
            {
              projects.find((project) => project.id === selectedProject)
                ?.details
            }
            <div className="grid grid-cols-2 ">
              <div>
                <p className="text-[15px] leading-5 font-normal">
                  Crafted an innovative rental property management app,
                  seamlessly integrating secure login, absence registration, and
                  a tenant notice board. Elevating the resident experience with
                  user-friendly design and efficient communication channels
                </p>
                <p className="text-[17px] leading-6 font-normal my-2">
                  Business analysis / iOS / Android / QA / UI/UX Design
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <img
                      src={location}
                      alt="location"
                      className="w-[16px] h-[20px]"
                    />
                    <p className="text-[15px] leading-5 mx-2 font-normal">
                      India
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={realstate}
                      alt="realstate"
                      className="w-[16px] h-[20px]"
                    />
                    <p className="text-[15px] leading-5 mx-2 font-normal">
                      Real Estate
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 my-5">
                  <div className="flex flex-col  ">
                    <p className="text-[24px] font-normal leading-9">400 %</p>
                    <p className="text-[13px] text-[#667084] font-normal left-4">
                      User Growth
                    </p>
                  </div>
                  <div className="flex flex-col  ">
                    <p className="text-[24px] font-normal leading-9">
                      + 200 000
                    </p>
                    <p className="text-[13px] text-[#667084] font-normal left-4">
                      Active Users
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <img
                      src={appstore}
                      alt="appstore"
                      className="w-[148px] h-[40px]"
                    />
                  </div>
                  <div>
                    <img
                      src={googleplay}
                      alt="googleplay"
                      className="w-[148px] h-[40px]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={projectimage}
                  alt="projectimage"
                  className=" h-[449px]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
