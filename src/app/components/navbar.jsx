"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#fff] bg-opacity-80">
      <div
        className="mx-auto flex items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/" className="-m-1.5 hidden lg:flex p-1.5">
            <img className="h-20" src="/logo dh.png" alt="" />
          </Link>
          <Link
            href="/"
            className="-m-1.5 lg:hidden flex items-center justify-between p-1.5"
          >
            <img className="h-20 mr-3" src="/logo.png" alt="" />
            <div className="text-center">
              <h1 className="font-bold text-[10px] text-center uppercase text-[#251e74]">
                Office Of the Controller Of Examinations
              </h1>
              <h1 className="text-[#251e74]  font-bold text-xl">
                مكتب المراقب الامتحانات
              </h1>
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="text-center">
            <h1 className="font-bold text-[15px] text-center uppercase text-[#251e74]">
              Office Of the Controller Of Examinations
            </h1>
            <h1 className="text-[#251e74]  font-bold text-3xl">
              مكتب المراقب الامتحانات
            </h1>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Navbar;
