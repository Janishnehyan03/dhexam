import React from "react";

function page() {
  return (
    <section className="relative isolate h-screen overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h1 className="text-center font-bold text-yellow-700  text-xl capitalize">
          About Us
        </h1>
        <p className="text-center">
          The DHIU Examination Board controls and coordinates all the
          examination-related activities. Its responsibilities include preparing
          and announcing the examination schedule in advance, preparing question
          papers, planning and conducting all examinations in a transparent,
          systematic and impeccable manner. The Board is also doing the
          functions of evaluating the answer scripts, processing the results,
          timely publishing the results for all examinations, and issuing
          Secondary, Senior Secondary, Undergraduate (UG), and Postgraduate (PG)
          mark lists and certificates as well as maintaining the accurate and
          secure records of exam-related documents. The Board, which consists of
          reputed scholars and academicians, is operating under the Chief
          Examination Controller who coordinates examination procedures at all
          affiliated colleges and study centres
        </p>
      </div>
    </section>
  );
}

export default page;
