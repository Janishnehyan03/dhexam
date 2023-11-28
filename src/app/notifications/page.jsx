import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function page() {
  return (
    <div className="h-screen bg-white">
        <h1 className="text-center font-bold text-2xl">Notifications</h1>
      <div className="lg:grid grid-cols-3 gap-2 ">
        <div
          id="toast-default"
          className="flex items-center hover:bg-gray-800 cursor-pointer transition w-full m-2 p-4 text-gray-100 bg-gray-700 rounded-lg shadow "
          role="alert"
        >
          <div className="inline-flex items-center  justify-center flex-shrink-0 w-8 h-8 text-gray-500 bg-gray-100 rounded-lg ">
            <FontAwesomeIcon icon={faBell} className="h-4" />
          </div>
          <div className="ml-3 text-sm font-normal">
            DEGREE HALF YEARLY EXAMINATION SEP 2023; TIME TABLE PUBLISHED
          </div>
        </div>
        <div
          id="toast-default"
          className="flex items-center hover:bg-gray-800 cursor-pointer transition w-full m-2 p-4 text-gray-100 bg-gray-700 rounded-lg shadow "
          role="alert"
        >
          <div className="inline-flex items-center  justify-center flex-shrink-0 w-8 h-8 text-gray-500 bg-gray-100 rounded-lg ">
            <FontAwesomeIcon icon={faBell} className="h-4" />
          </div>
          <div className="ml-3 text-sm font-normal">
            DEGREE HALF YEARLY EXAMINATION SEP 2023; TIME TABLE PUBLISHED
          </div>
        </div>
        <div
          id="toast-default"
          className="flex items-center hover:bg-gray-800 cursor-pointer transition w-full m-2 p-4 text-gray-100 bg-gray-700 rounded-lg shadow "
          role="alert"
        >
          <div className="inline-flex items-center  justify-center flex-shrink-0 w-8 h-8 text-gray-500 bg-gray-100 rounded-lg ">
            <FontAwesomeIcon icon={faBell} className="h-4" />
          </div>
          <div className="ml-3 text-sm font-normal">
            DEGREE HALF YEARLY EXAMINATION SEP 2023; TIME TABLE PUBLISHED
          </div>
        </div>
        <div
          id="toast-default"
          className="flex items-center hover:bg-gray-800 cursor-pointer transition w-full m-2 p-4 text-gray-100 bg-gray-700 rounded-lg shadow "
          role="alert"
        >
          <div className="inline-flex items-center  justify-center flex-shrink-0 w-8 h-8 text-gray-500 bg-gray-100 rounded-lg ">
            <FontAwesomeIcon icon={faBell} className="h-4" />
          </div>
          <div className="ml-3 text-sm font-normal">
            DEGREE HALF YEARLY EXAMINATION SEP 2023; TIME TABLE PUBLISHED
          </div>
        </div>
        <div
          id="toast-default"
          className="flex items-center hover:bg-gray-800 cursor-pointer transition w-full m-2 p-4 text-gray-100 bg-gray-700 rounded-lg shadow "
          role="alert"
        >
          <div className="inline-flex items-center  justify-center flex-shrink-0 w-8 h-8 text-gray-500 bg-gray-100 rounded-lg ">
            <FontAwesomeIcon icon={faBell} className="h-4" />
          </div>
          <div className="ml-3 text-sm font-normal">
            DEGREE HALF YEARLY EXAMINATION SEP 2023; TIME TABLE PUBLISHED
          </div>
        </div>
        <div
          id="toast-default"
          className="flex items-center hover:bg-gray-800 cursor-pointer transition w-full m-2 p-4 text-gray-100 bg-gray-700 rounded-lg shadow "
          role="alert"
        >
          <div className="inline-flex items-center  justify-center flex-shrink-0 w-8 h-8 text-gray-500 bg-gray-100 rounded-lg ">
            <FontAwesomeIcon icon={faBell} className="h-4" />
          </div>
          <div className="ml-3 text-sm font-normal">
            DEGREE HALF YEARLY EXAMINATION SEP 2023; TIME TABLE PUBLISHED
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
