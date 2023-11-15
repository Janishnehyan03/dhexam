import {
  faBell,
  faBook,
  faBookAtlas,
  faGraduationCap,
  faPen,
  faPerson,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swiper from "./components/Swiper";

export default function Home() {
  return (
    <>
      <section className="m-3 mt-4" id="home">
        <div className="mt-10">
          <div className="lg:grid lg:grid-flow-row gap-8 items-center text-neutral-600 sm:grid-cols-1  lg:grid-cols-3">
            <div className="bg-gray-900 bg-opacity-60 flex flex-col m-auto py-10 items-center justify-center text-center mx-2 rounded-[10px]">
              <h2 className="font-bold  text-white text-xl  capitalize">
                Office of Examinations
                <span className="ml-2 ">(DHIU)</span>
              </h2>
              <p className="lg:ml-[10px] mt-3 text-white text-sm px-6">
                The DHIU Examination Board manages exam-related tasks, from
                scheduling to conducting exams transparently. It evaluates
                scripts, publishes results, and issues certificates for
                Secondary, Senior Secondary, UG, and PG levels. Led by the Chief
                Examination Controller. The Board, which consists of reputed
                scholars and academicians, is operating under the Chief
                Examination Controller who coordinates examination procedures at
                all affiliated colleges and study centres
              </p>
            </div>
            <Swiper />

            <div className="flex flex-col items-center py-2  justify-center text-center mx-2 rounded-[10px]">
              <div
                id="toast-default"
                className="flex items-center hover:bg-gray-800 cursor-pointer transition w-full m-2 p-4 text-gray-100 bg-gray-900 rounded-lg shadow "
                role="alert"
              >
                <div className="inline-flex items-center  justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg ">
                  <FontAwesomeIcon icon={faBell} className="h-4" />
                </div>
                <div className="ml-3 text-sm font-normal">
                  DEGREE HALF YEARLY EXAMINATION SEP 2022; TIME TABLE PUBLISHED
                </div>
              </div>
              <div
                id="toast-default"
                className="flex items-center w-full m-2 p-4 hover:bg-gray-800 cursor-pointer transition text-gray-100 bg-gray-900 rounded-lg shadow "
                role="alert"
              >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg ">
                  <FontAwesomeIcon icon={faBell} className="h-4" />
                </div>
                <div className="ml-3 text-sm font-normal">
                  PG RABEE' SEMESTER REGULAR/ SUPPLEMENTARY EXAMINATION, SEP-OCT
                  2022; APPLY FOR SUPPLEMENTARY
                </div>
              </div>
              <div
                id="toast-default"
                className="flex items-center w-full m-2 p-4 hover:bg-gray-800 cursor-pointer transition text-gray-100 bg-gray-900 rounded-lg shadow "
                role="alert"
              >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg ">
                  <FontAwesomeIcon icon={faBell} className="h-4" />
                </div>
                <div className="ml-3 text-sm font-normal">
                  MAHDIYYA EVEN SEMESTER EXAMINATION MAR 2022; TIME TABLE
                  PUBLISHED
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:mt-10 justify-center lg:mb-3 mb-[2rem]">
            <a target="_blank" href="https://dhexams.000webhostapp.com/">
              <div className="flex mt-2 bg-[#11373d] py-5 mx-1 px-8 rounded-[30px] cursor-pointer  items-center justify-center text-white  hover:bg-white hover:text-[#11373d] border border-[#11373d] transition-colors duration-300">
                <FontAwesomeIcon icon={faSearch} className="h-4 mr-2" />
                <p className="capitalize ">enquiry portal</p>
              </div>
            </a>
            <a target="_blank" href="https://result.dhiu.in/">
              <div className="flex mt-2 bg-[#11373d] py-5 mx-1 px-8 rounded-[30px] cursor-pointer  items-center justify-center text-white  hover:bg-white hover:text-[#11373d] border border-[#11373d] transition-colors duration-300">
                <FontAwesomeIcon icon={faBook} className="h-4 mr-2" />
                <p className="capitalize ">result portal</p>
              </div>
            </a>

            <a target="_blank" href="#">
              <div className="flex mt-2 bg-[#11373d] py-5 mx-1 px-8 rounded-[30px] cursor-pointer  items-center justify-center text-white  hover:bg-white hover:text-[#11373d] border border-[#11373d] transition-colors duration-300">
                <FontAwesomeIcon icon={faPen} className="h-4 mr-2" />
                <p className="capitalize ">admission portal</p>
              </div>
            </a>
            <a target="_blank" href="https://pg.dhiu.in/studentlogin">
              <div className="flex mt-2 bg-[#11373d] py-5 mx-1 px-8 rounded-[30px] cursor-pointer  items-center justify-center text-white  hover:bg-white hover:text-[#11373d] border border-[#11373d] transition-colors duration-300">
                <FontAwesomeIcon icon={faGraduationCap} className="h-4 mr-2" />
                <p className="capitalize ">Student's Portal PG</p>
              </div>
            </a>
            <a target="_blank" href="https://portal.dhiu.in/parent">
              <div className="flex mt-2 bg-[#11373d] py-5 mx-1 px-8 rounded-[30px] cursor-pointer  items-center justify-center text-white  hover:bg-white hover:text-[#11373d] border border-[#11373d] transition-colors duration-300">
                <FontAwesomeIcon icon={faPerson} className="h-4 mr-2" />
                <p className="capitalize ">parent portal</p>
              </div>
            </a>
            <a target="_blank" href="https://portal.dhiu.in/">
              <div className="flex mt-2 bg-[#11373d] py-5 mx-1 px-8 rounded-[30px] cursor-pointer  items-center justify-center text-white  hover:bg-white hover:text-[#11373d] border border-[#11373d] transition-colors duration-300">
                <FontAwesomeIcon icon={faBookAtlas} className="h-4 mr-2" />
                <p className="capitalize ">academic portal</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
