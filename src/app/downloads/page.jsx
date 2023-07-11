import React from "react";

function page() {
  const downloads = [1, 1, 1, 1, 1, 1];
  return (
    <>
    <h1 className="text-center font-bold text-xl">DOWNLOADS</h1>
    <div className="lg:grid grid-cols-3">
      {downloads.map((download, key) => (
          <a
          key={key}
          href={download.fileName}
          className="relative  w-full group mt-2 mx-2"
          target={"_blank"}
          >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#97d7e9] to-[#d9e3ff] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative min-h-[150px] px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="space-y-2">
              <p className="text-slate-800 uppercase">
              HALL TICKET PUBLISHED; DEGREE I, III and V SEMESTERS PUBLIC EXAMINATIONS SEP 2022
              </p>
              <a
                href={`/${download.fileName}`}
                className="block text-indigo-400 font-bold group-hover:text-slate-800 transition duration-200"
                target="_blank"
                >
                Download
              </a>
            </div>
          </div>
        </a>
      ))}
    </div>
      </>
  );
}

export default page;
