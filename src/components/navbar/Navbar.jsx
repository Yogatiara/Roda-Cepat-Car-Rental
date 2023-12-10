import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import AOS from "aos";

import Listbar from "../list/Listbar";
import "aos/dist/aos.css";
import Button from "../button/Button";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const location = useLocation();

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
    <nav className="bg-white fixed z-10 border-gray-200 border-b-2 dark:bg-gray-900">
      <div className="w-screen flex flex-wrap items-center justify-between md:pr-10 md:pl-10 min-[880px]:pr-20 min-[880px]:pl-20 lg:pr-10 lg:pl-10  min-[1190px]:pr-20  min-[1190px]:pl-20 p-3">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="Logo/roda-cepat-car-rental-logo.png"
            className="w-10 md:w-16"
            alt="Flowbite Logo"
          />
        </Link>

        {location.pathname !== "/car-search" ? (
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
        ) : (
          <Button text={"Daftar"} />
        )}

        {location.pathname !== "/car-search" && (
          <div className="w-full hidden md:block md:w-auto">
            <Listbar showListBar={true} showButton={true} />
          </div>
        )}

        {dropDown && (
          <div data-aos="fade-right" className="w-full space-y-3">
            <Listbar showListBar={true} showButton={true} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
