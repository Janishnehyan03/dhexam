import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
function Navbar() {
  return (
    <div className="bg-[#fff] bg-opacity-80 p-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="-m-1.5 hidden lg:flex p-1.5">
          <img className="h-20" src="/logo dh.png" alt="" />
        </Link>

        <Link
          href="/"
          className="-m-1.5 lg:hidden flex items-center justify-between p-1.5"
        >
          <img className="h-20 mr-3" src="/logo.png" alt="" />
          <div className="text-center">
            {/* <h1 className="font-bold text-[10px] text-center uppercase text-[#251e74]">
              Office Of the Controller Of Examinations
            </h1>
            <h1 className="text-[#251e74]  font-bold text-xl">
              مكتب مراقب الامتحانات
            </h1> */}
            <img src="/text.png" className="h-14" alt="" />
            {/* <img src="/english.png" className="h-5" alt="" /> */}
          </div>
        </Link>

        <div className="hidden lg:flex">
          <div className="text-center flex flex-col items-center">
            {/* <h1 className="font-bold text-[12px] text-center uppercase text-[#212121]">
              Office Of the Controller Of Examinations
            </h1> */}
            {/* <h1 className="text-[#251e74]  font-bold text-3xl">
              مكتب مراقب الامتحانات
            </h1> */}
            <img src="/text.png" className="h-16" alt="" />
            {/* <img src="/english.png" className="h-6" alt="" /> */}
          </div>
        </div>
        <div className="justify-center hidden lg:flex items-center">
          <a
            href="https://www.facebook.com/DHIUniversity/"
            className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-900  rounded-lg "
          >
            <FontAwesomeIcon icon={faFacebook} className="h-4" />
          </a>
          <a
            href="https://www.youtube.com/@dhmediayt"
            className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-900  rounded-lg "
          >
            <FontAwesomeIcon icon={faYoutube} className="h-4" />
          </a>
          <a
            href="https://www.instagram.com/darulhudaislamicuniversity/"
            className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-900  rounded-lg "
          >
            <FontAwesomeIcon icon={faInstagram} className="h-4" />
          </a>
          <a
            href="https://twitter.com/DarulHudaIU"
            className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-900  rounded-lg "
          >
            <FontAwesomeIcon icon={faTwitter} className="h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
