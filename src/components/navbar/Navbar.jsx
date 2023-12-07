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
    <>
      <nav className="bg-white z-10 fixed shadow-sm dark:bg-gray-900">
        <div className="w-screen flex flex-wrap items-center justify-between mx-auto  p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="Logo/roda-cepat-car-rental-logo.png"
              className="w-12"
              alt="Roda Cepat Car Rental Logo"
            />
          </Link>
          <button
            onClick={dropDownShow}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-md text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <div className=" w-full md:block md:w-auto" id="navbar-default">
            {/* <ul className="lg:flex lg:flex-row lg:justify-end lg:gap-8 lg:w-full">
              <li className="py-2 font-sans text-md">
                <a
                  href="#OurService"
                  alt="OurService"
                  className="hover:text-[#5CB85F] lg:max-h-[20px]"
                >
                  Our Service
                </a>
              </li>
              <li className="py-2 font-sans text-md">
                <a href="#WhyUs" alt="WhyUs" className="hover:text-[#5CB85F]">
                  Why Us
                </a>
              </li>
              <li className="py-2 font-sans text-md">
                <a
                  href="#Testimonial"
                  alt="Testimonial"
                  className="hover:text-[#5CB85F]"
                >
                  Testimonial
                </a>
              </li>
              <li className="py-2 font-sans text-md">
                <a href="#FAQ" alt="FAQ" className="hover:text-[#5CB85F]">
                  FAQ
                </a>
              </li>
              <li>
                <Button text={"Register"} />
              </li>
            </ul> */}
            {dropDown && (
              <div data-aos="fade-right" className="mt-3">
                <Listbar />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
