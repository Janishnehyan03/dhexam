import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-[#ededed] mb-5">
      <div
        className="mx-auto flex  items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-28" src="/logo.png" alt />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div>
            <h1 className="font-bold text-2xl text-center uppercase text-[#251e74]">
              {" "}
              Office Of the Controller
            </h1>
            <h1 className="font-bold text-2xl text-center uppercase text-[#251e74]">
              Of Examinations
            </h1>
          </div>
        </div>

        {/* <div className="hidden lg:flex">
          <FontAwesomeIcon
            icon={faFacebook}
            className="h-6 mx-2 text-gray-800"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className="h-6 mx-2 text-gray-800"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="h-6 mx-2 text-gray-800"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="h-6 mx-2 text-gray-800"
          />
        </div> */}
        <ul className="flex mt-5">
          <li>
            <a className="mx-2  uppercase" href="">
              Home
            </a>
          </li>
          <li>
            <a className="mx-2  uppercase" href="">
              About us
            </a>
          </li>
          <li>
            <a className="mx-2  uppercase" href="">
              Services
            </a>
          </li>
          <li>
            <a className="mx-2  uppercase" href="">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div className="lg:hidden" role="dialog" aria-modal="true">
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">OFFICE OF EXAMINATION - DHIU </span>
              <img
                className="h-8 w-auto"
                src="https://www.dhiu.in/resources/img/uni-logo.png"
                alt
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
