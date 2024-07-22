import planet from "../../assets/planet2.png"; // Correct import
import { IoIosArrowForward } from "react-icons/io";

const Services = () => {
  return (
    <div className="w-[1220px] bg-[#ffffff] my-3 p-8">
      <div className="flex justify-between items-center my-2 border-t border-b py-3">
        <img src={planet} alt="planet1" className="w-[172px] h-[72px]  " />
        <img src={planet} alt="planet2" className="w-[172px] h-[72px]" />
        <img src={planet} alt="planet3" className="w-[172px] h-[72px]" />
        <img src={planet} alt="planet4" className="w-[172px] h-[72px]" />
        <img src={planet} alt="planet5" className="w-[172px] h-[72px]" />
      </div>

      <div className="w-full grid grid-cols-2">
        <div>
          <p className="text-[36px] font-bold leading-10">
            Full development cycle{" "}
          </p>
          <p className="text-[15px] font-medium">We use proven technologies</p>
          <div>
            <p className="text-[20px] leading-6">Web</p>
            <p className="text-[17px] font-normal left-6">
              PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/ Nuxt
              / MySQL / Laravel / GO lang / django / Python
            </p>
            <p className="text-[20px] leading-6">Mobile</p>
            <p className="text-[17px] font-normal left-6">
              Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm /
              Coroutine / RxJava / RxSwift / Unit Test / Navigation
            </p>
          </div>
        </div>
        <div className="w-full  flex justify-center">
          <ul className="flex flex-col gap-8">
            <li className="text-[20px] font-normal leading-6 flex items-center">
              iOS development{" "}
              <span className="ml-2 text-[20px] font-normal text-[#567d20] leading-6">
                <IoIosArrowForward />
              </span>
            </li>
            <li className="text-[20px] font-normal leading-6 flex items-center">
              Android development{" "}
              <span className="ml-2 text-[20px] font-normal text-[#567d20] leading-6">
                <IoIosArrowForward />
              </span>
            </li>
            <li className="text-[20px] font-normal leading-6 flex items-center">
              Web development{" "}
              <span className="ml-2 text-[20px] font-normal text-[#567d20] leading-6">
                <IoIosArrowForward />
              </span>
            </li>
            <li className="text-[20px] font-normal leading-6 flex items-center">
              UI/UX design{" "}
              <span className="ml-2 text-[20px] font-normal text-[#567d20] leading-6">
                <IoIosArrowForward />
              </span>
            </li>
            <li className="text-[20px] font-normal leading-6 flex items-center">
              Testing{" "}
              <span className="ml-2 text-[20px] font-normal text-[#567d20] leading-6">
                <IoIosArrowForward />
              </span>
            </li>
            <li className="text-[20px] font-normal leading-6 flex items-center">
              Launch{" "}
              <span className="ml-2 text-[20px] font-normal text-[#567d20] leading-6">
                <IoIosArrowForward />
              </span>
            </li>
            <li className="text-[20px] font-normal leading-6 flex items-center">
              IT consulting{" "}
              <span className="ml-2 text-[20px] font-normal text-[#567d20] leading-6">
                <IoIosArrowForward />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
