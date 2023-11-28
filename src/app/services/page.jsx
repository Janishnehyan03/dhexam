import { faDochub } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faBuilding,
  faCalendar,
  faCertificate,
  faGraduationCap,
  faPaperPlane,
  faPen,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function page() {
  return (
    <div className="h-screen bg-white">
      <h1 className="text-center font-bold text-2xl my-3 text-orange-600">
        Our Services
      </h1>
      <div className="lg:grid grid-cols-3 gap-2 mt-4">
        <div className="p-6 flex flex-col items-center text-gray-700 bg-gray-200 shadow-md rounded hover:bg-gray-100 transition hover:cursor-pointer ">
          <FontAwesomeIcon
            icon={faPen}
            size="2x"
            className="mb-3"
            color="#31304D"
          />
          <h1 className="block mb-2 font-sans text-center text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
            DH ADMISSION TEST (DAT) <br /> HUDAWI | ZAHRAWIYYA | HIFZ COURSES{" "}
          </h1>
        </div>
        <div className="p-6 flex flex-col items-center text-gray-700 bg-gray-200 shadow-md rounded hover:bg-gray-100 transition hover:cursor-pointer ">
          <FontAwesomeIcon
            icon={faCalendar}
            size="2x"
            className="mb-3"
            color="#31304D"
          />
          <h1 className="block mb-2 font-sans text-center text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
            ACADEMIC CALENDAR
          </h1>
        </div>
        <div className="p-6 flex flex-col items-center text-gray-700 bg-gray-200 shadow-md rounded hover:bg-gray-100 transition hover:cursor-pointer ">
          <FontAwesomeIcon
            icon={faBuilding}
            size="2x"
            className="mb-3"
            color="#31304D"
          />
          <h1 className="block mb-2 font-sans text-center text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
            EXAM ADMINISTRATION (ALL SECTIONS)
          </h1>
        </div>
        <div className="p-6 flex flex-col items-center text-gray-700 bg-gray-200 shadow-md rounded hover:bg-gray-100 transition hover:cursor-pointer ">
          <FontAwesomeIcon
            icon={faBook}
            size="2x"
            className="mb-3"
            color="#31304D"
          />
          <h1 className="block mb-2 font-sans text-center text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
            PG THESIS & DEGREE DISSERTATION PROCESS
          </h1>
        </div>
        <div className="p-6 flex flex-col items-center text-gray-700 bg-gray-200 shadow-md rounded hover:bg-gray-100 transition hover:cursor-pointer ">
          <FontAwesomeIcon
            icon={faPeopleGroup}
            size="2x"
            className="mb-3"
            color="#31304D"
          />
          <h1 className="block mb-2 font-sans text-center text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
            CENTRALIZED VALUATION CAMPS
          </h1>
        </div>
        <div className="p-6 flex flex-col items-center text-gray-700 bg-gray-200 shadow-md rounded hover:bg-gray-100 transition hover:cursor-pointer ">
          <FontAwesomeIcon
            icon={faPaperPlane}
            size="2x"
            className="mb-3"
            color="#31304D"
          />
          <h1 className="block mb-2 font-sans text-center text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
            RESULT TABULATION
          </h1>
        </div>
        <div className="p-6 flex flex-col items-center text-gray-700 bg-gray-200 shadow-md rounded hover:bg-gray-100 transition hover:cursor-pointer ">
          <FontAwesomeIcon
            icon={faCertificate}
            size="2x"
            className="mb-3"
            color="#31304D"
          />
          <h1 className="block mb-2 font-sans text-center text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
            CERTIFCATES & MARKLISTS ISSUING
          </h1>
        </div>
        <div className="p-6 flex flex-col items-center text-gray-700 bg-gray-200 shadow-md rounded hover:bg-gray-100 transition hover:cursor-pointer ">
          <FontAwesomeIcon
            icon={faDochub}
            size="2x"
            className="mb-3"
            color="#31304D"
          />
          <h1 className="block mb-2 font-sans text-center text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
            DOCUMENT VERIFICATION
          </h1>
        </div>
        <div className="p-6 flex flex-col items-center text-gray-700 bg-gray-200 shadow-md rounded hover:bg-gray-100 transition hover:cursor-pointer ">
          <FontAwesomeIcon
            icon={faGraduationCap}
            size="2x"
            className="mb-3"
            color="#31304D"
          />
          <h1 className="block mb-2 font-sans text-center text-xl antialiased  leading-snug tracking-normal text-blue-gray-900">
            CONVOCATION ASSISTANCE{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default page;
