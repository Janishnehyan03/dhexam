import {
  faBell,
  faBook,
  faPen,
  faPerson,
  faSearch,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swiper from './components/Swiper'

export default function Home() {
  return (
    <>
      {/* <section className="slider" id="home">
        <div className="slide">
          <h2 className="font-bold text-3xl text-center lg:text-4xl ">
            Office of Examinations
            <span className="text-3xl lg:text-5xl ml-2 ">(DHIU)</span>
          </h2>
          <p className="lg:ml-[10px] text-white text-center">
            The DHIU Examination Board conducts and controls all the
            examinations and its procedures, arranges for the valuation of
            answer scripts, processes marks, and announces results and issues
            secondary, senior secondary, degree and P.G certificates. The
            valuation of answer scripts is carried out at centralized valuation
            camps and results of all examinations are announced in time. The
            Board, which include reputed scholars and academicians, works under
            the chief examination controller who co-ordinates the examination
            procedures at all the affiliated colleges. A separate examination
            board conducts and supervises the entire procedure of the PG
            examinations.
          </p>
        </div>
      </section> */}

      <div className="grid grid-flow-row gap-8 items-center text-neutral-600 sm:grid-cols-1  lg:grid-cols-3">
        <div className="bg-gray-200 flex flex-col m-auto py-10 items-center justify-center text-center mx-2 rounded-[10px]">
          <h2 className="font-bold  text-xl  uppercase">
            Office of Examinations
            <span className="ml-2 ">(DHIU)</span>
          </h2>
          <p className="lg:ml-[10px] text-center">
            The DHIU Examination Board conducts and controls all the
            examinations and its procedures, arranges for the valuation of
            answer scripts, processes marks, and announces results and issues
            secondary, senior secondary, degree and P.G certificates. The
            valuation of answer scripts is carried out at centralized valuation
            camps and results of all examinations are announced in time.
          </p>
        </div>
        <Swiper />

        <div className="flex flex-col items-center py-2  justify-center text-center mx-2 rounded-[10px]">

          <div
            id="toast-default"
            className="flex items-center w-full m-2 p-4 text-gray-100 bg-gray-600 rounded-lg shadow "
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg ">
              <FontAwesomeIcon icon={faBell} className="h-4" />
            </div>
            <div className="ml-3 text-sm font-normal">
              DEGREE HALF YEARLY EXAMINATION SEP 2022; TIME TABLE PUBLISHED
            </div>
          </div>
          <div
            id="toast-default"
            className="flex items-center w-full m-2 p-4 text-gray-100 bg-gray-600 rounded-lg shadow "
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
            className="flex items-center w-full m-2 p-4 text-gray-100 bg-gray-600 rounded-lg shadow "
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg ">
              <FontAwesomeIcon icon={faBell} className="h-4" />
            </div>
            <div className="ml-3 text-sm font-normal">
              MAHDIYYA EVEN SEMESTER EXAMINATION MAR 2022; TIME TABLE PUBLISHED
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:mt-3">
      <a href="#">
          <div className=" bg-[#2d689b] p-4 mx-3 px-7 rounded-[10px] cursor-pointer flex flex-col items-center justify-center text-white  hover:bg-white hover:text-[#2d689b] border border-[#2d689b] transition-colors duration-300">
            <FontAwesomeIcon icon={faBell} className="h-10" />
            <p className="uppercase my-3">NOTIFICATIONS</p>
          </div>
        </a>
        <a href="#">
          <div className=" bg-[#2d689b] p-4 mx-3 px-7 rounded-[10px] cursor-pointer flex flex-col items-center justify-center text-white  hover:bg-white hover:text-[#2d689b] border border-[#2d689b] transition-colors duration-300">
            <FontAwesomeIcon icon={faBook} className="h-10" />
            <p className="uppercase my-3">result portal</p>
          </div>
        </a>
       
        <a href="#">
          <div className=" bg-[#2d689b] p-4 mx-3 px-7 rounded-[10px] cursor-pointer flex flex-col items-center justify-center text-white  hover:bg-white hover:text-[#2d689b] border border-[#2d689b] transition-colors duration-300">
            <FontAwesomeIcon icon={faPen} className="h-10" />
            <p className="uppercase my-3">admission portal</p>
          </div>
        </a>
        <a href="#">
          <div className=" bg-[#2d689b] p-4 mx-3 px-7 rounded-[10px] cursor-pointer flex flex-col items-center justify-center text-white  hover:bg-white hover:text-[#2d689b] border border-[#2d689b] transition-colors duration-300">
            <FontAwesomeIcon icon={faPerson} className="h-10" />
            <p className="uppercase my-3">parent portal</p>
          </div>
        </a>
      
        <a href="#">
          <div className=" bg-[#2d689b] p-4 mx-3 px-7 rounded-[10px] cursor-pointer flex flex-col items-center justify-center text-white  hover:bg-white hover:text-[#2d689b] border border-[#2d689b] transition-colors duration-300">
            <FontAwesomeIcon icon={faSearch} className="h-10" />
            <p className="uppercase my-3">enquiry portal</p>
          </div>
        </a>
      </div>
      <div className="grid grid-cols-3 gap-2 lg:mt-6">
        <div
          id="toast-default"
          className="flex items-center w-full m-2 p-4 text-gray-500 bg-gray-200 rounded-lg shadow "
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg ">
            <FontAwesomeIcon icon={faCalendar} className="h-4" />
          </div>
          <div className="ml-3 text-sm font-normal">
            DEGREE HALF YEARLY EXAMINATION SEP 2022; TIME TABLE PUBLISHED
          </div>
        </div>
        <div
          id="toast-default"
          className="flex items-center w-full m-2 p-4 text-gray-500 bg-gray-200 rounded-lg shadow "
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg ">
            <FontAwesomeIcon icon={faCalendar} className="h-4" />
          </div>
          <div className="ml-3 text-sm font-normal">
            PG RABEE' SEMESTER REGULAR/ SUPPLEMENTARY EXAMINATION, SEP-OCT 2022;
            APPLY FOR SUPPLEMENTARY
          </div>
        </div>

        <div
          id="toast-default"
          className="flex items-center w-full m-2 p-4 text-gray-500 bg-gray-200 rounded-lg shadow "
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg ">
            <FontAwesomeIcon icon={faCalendar} className="h-4" />
          </div>
          <div className="ml-3 text-sm font-normal">
            MAHDIYYA EVEN SEMESTER EXAMINATION MAR 2022; TIME TABLE PUBLISHED
          </div>
        </div>
      </div>
    </>
  );
}
