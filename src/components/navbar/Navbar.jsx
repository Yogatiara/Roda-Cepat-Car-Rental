import { Link } from "react-router-dom";
import { useState } from "react";

import AOS from "aos";

import Listbar from "../list/Listbar";
import "aos/dist/aos.css";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  const dropDownShow = () => {
    setDropDown(true);
    AOS.init({
      once: true,
      duration: 600,
    });
    if (dropDown) {
      setDropDown(false);
    }
  };

  return (
    <nav className="bg-white fixed border-gray-200 border-b-2 dark:bg-gray-900">
      <div className="w-screen flex flex-wrap items-center justify-between md:pr-10 md:pl-10 min-[880px]:pr-20 min-[880px]:pl-20 lg:pr-10 lg:pl-10  min-[1190px]:pr-20  min-[1190px]:pl-20 p-4">
        <Link
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="Logo/roda-cepat-car-rental-logo.png"
            className="w-12 md:w-16"
            alt="Flowbite Logo"
          />
        </Link>
        <button
          onClick={dropDownShow}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
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
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`w-full hidden md:block md:w-auto`} id="navbar-default">
          <Listbar />
        </div>
        {dropDown && (
          <div data-aos="fade-right" className="w-full space-y-3">
            <Listbar />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
