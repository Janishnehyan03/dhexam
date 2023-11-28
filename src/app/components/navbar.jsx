"use client";
import {
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`bg-white border-gray-200 lg:h-auto ${menuOpen && "h-screen"}`}
    >
      <div className=" flex flex-wrap items-center justify-between p-3">
        <a
          href="/"
          className="hidden lg:flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo dh.png" className="h-24" alt="Logo" />
        </a>
        <a href="/" className="lg:hidden flex">
          <img src="/logo dh.png" className="h-12" alt="Logo" />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${menuOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <div className="lg:flex hidden  justify-end text-gray-500 mb-3">
            <a
              href="tel:918547290575"
              className="flex items-center space-x-2 mr-3"
            >
              <FontAwesomeIcon size="sm" icon={faPhone} />{" "}
              <p className="text-sm">+918547290575</p>
            </a>
            <a
              href="mailto:exams@dhiu.in"
              className="flex items-center space-x-2 mr-3 "
            >
              <FontAwesomeIcon size="sm" icon={faEnvelope} />{" "}
              <p className="text-sm">exams@dhiu.in </p>
            </a>
            <a
              href="https://www.dhiu.in"
              className="flex items-center space-x-2 mr-3"
            >
              <FontAwesomeIcon size="sm" icon={faGlobe} />{" "}
              <p className="text-sm">www.dhiu.in</p>
            </a>
          </div>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row  rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            <li className="lg:border-r-2 mx-2 lg:border-gray-300">
              <a
                href="#"
                className="block py-2   text-gray-600 md:bg-transparent md:text-gray-700 md:p-0 mr-2"
              >
                Home
              </a>
            </li>

            <li className="lg:border-r-2 mx-2 lg:border-gray-300">
              <a
                href="/about"
                className="block py-2   text-gray-600 md:bg-transparent md:text-gray-700 md:p-0 mr-2"
              >
                About Us
              </a>
            </li>
            <li className="lg:border-r-2 mx-2 lg:border-gray-300">
              <a
                href="/services"
                className="block py-2   text-gray-600 md:bg-transparent md:text-gray-700 md:p-0 mr-2"
              >
                Our Services
              </a>
            </li>
            <li className="lg:border-r-2 mx-2 lg:border-gray-300">
              <a
                href="#"
                className="block py-2   text-gray-600 md:bg-transparent md:text-gray-700 md:p-0 mr-2"
              >
                Notifications
              </a>
            </li>
            <li className="mx-2">
              <a
                href="#"
                className="block py-2   text-gray-600 md:bg-transparent md:text-gray-700 md:p-0 mr-2"
              >
                Enquiry Portal
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:hidden flex flex-col items-center justify-center text-gray-500 ml-4 absolute bottom-2 mb-3">
        <h1 className="text-center font-bold mb-2">Contact Us</h1>
        <a href="tel:918547290575" className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} /> <p></p>
        </a>
        <a href="mailto:exams@dhiu.in" className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faEnvelope} /> <p>exams@dhiu.in</p>
        </a>
        <a href="https://www.dhiu.in" className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faGlobe} /> <p>www.dhiu.in</p>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
