import planet from "../../assets/planet2.png"; // Correct import
import { IoIosArrowForward } from "react-icons/io";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full flex justify-center bg-[#ffffff] my-3 px-8 lg:px-0 "
    >
      <div className="w-full lg:w-[1220px]">
        <div className="flex justify-between items-center my-2 border-t border-b py-3 lg:ml-12 xl:ml-0">
          <img src={planet} alt="planet1" className="w-[172px] h-[72px]  " />
          <img src={planet} alt="planet2" className="w-[172px] h-[72px]" />
          <img
            src={planet}
            alt="planet3"
            className="w-[172px] h-[72px] hidden md:block"
          />
          <img
            src={planet}
            alt="planet4"
            className="w-[172px] h-[72px] hidden lg:block"
          />
          <img
            src={planet}
            alt="planet5"
            className="w-[172px] h-[72px] hidden xl:block"
          />
        </div>

        <div className="w-full grid md:grid-cols-2 lg:ml-16 xl:ml-0">
          <div className="space-y-4">
            <p className="text-[36px] font-bold leading-10">
              Full development cycle{" "}
            </p>
            <p className="text-[15px] font-medium">
              We use proven technologies
            </p>
            <div className="space-y-6">
              <p className="text-[20px] leading-6">Web</p>
              <p className="text-[17px] font-normal left-6">
                PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/
                Nuxt / MySQL / Laravel / GO lang / django / Python
              </p>
              <p className="text-[20px] leading-6">Mobile</p>
              <p className="text-[17px] font-normal left-6">
                Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm
                / Coroutine / RxJava / RxSwift / Unit Test / Navigation
              </p>
            </div>
          </div>
          <div className="w-full my-6 md:my-0 flex justify-start md:justify-center">
            <ul className="flex flex-col gap-8">
              <li className="text-[20px] font-normal w-fit    leading-6  flex items-center hover:font-bold hover:border-b-2 border-[#80A948]">
                iOS development{" "}
                <span className="ml-2 text-[20px] font-normal text-[#80A948]  leading-6">
                  <IoIosArrowForward />
                </span>
              </li>
              <li className="text-[20px] font-normal  leading-6 w-fit    flex items-center hover:font-bold hover:border-b-2 border-[#80A948]">
                Android development{" "}
                <span className="ml-2 text-[20px] font-normal text-[#80A948] leading-6">
                  <IoIosArrowForward />
                </span>
              </li>
              <li className="text-[20px] font-normal   leading-6 w-fit    flex items-center hover:font-bold hover:border-b-2 border-[#80A948]">
                Web development{" "}
                <span className="ml-2 text-[20px] font-normal text-[#80A948] leading-6">
                  <IoIosArrowForward />
                </span>
              </li>
              <li className="text-[20px] font-normal  leading-6 w-fit    flex items-center hover:font-bold hover:border-b-2 border-[#80A948]">
                UI/UX design{" "}
                <span className="ml-2 text-[20px] font-normal text-[#80A948] leading-6">
                  <IoIosArrowForward />
                </span>
              </li>
              <li className="text-[20px] font-normal   leading-6 w-fit    flex items-center hover:font-bold hover:border-b-2 border-[#80A948]">
                Testing{" "}
                <span className="ml-2 text-[20px] font-normal text-[#80A948] leading-6">
                  <IoIosArrowForward />
                </span>
              </li>
              <li className="text-[20px] font-normal   leading-6 w-fit   flex items-center hover:font-bold hover:border-b-2 border-[#80A948]">
                Launch{" "}
                <span className="ml-2 text-[20px] font-normal text-[#80A948] leading-6">
                  <IoIosArrowForward />
                </span>
              </li>
              <li className="text-[20px] font-normal   leading-6 w-fit    flex items-center hover:font-bold hover:border-b-2 border-[#80A948]">
                IT consulting{" "}
                <span className="ml-2 text-[20px] font-normal text-[#80A948] leading-6">
                  <IoIosArrowForward />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
