import React from "react";

function page() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h1 className="text-center font-bold text-orange-700 uppercase">
          About Us
        </h1>
        <p className="text-center">
          The DHIU Examination Board conducts and controls all the examinations
          and its procedures, arranges for the valuation of answer scripts,
          processes marks, and announces results and issues secondary, senior
          secondary, degree and P.G certificates. The valuation of answer
          scripts is carried out at centralized valuation camps and results of
          all examinations are announced in time. The Board, which include
          reputed scholars and academicians, works under the chief examination
          controller who co-ordinates the examination procedures at all the
          affiliated colleges. A separate examination board conducts and
          supervises the entire procedure of the PG examinations.
        </p>
      </div>
    </section>
  );
}

export default page;
