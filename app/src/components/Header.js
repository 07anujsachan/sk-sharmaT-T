import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    console.log(isScrolled);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  return (
    <>
      <div
        className={`p-4 flex justify-between items-center fixed top-0 left-0 w-full px-[6%] py-8 z-[100] transition duration-500 ${
          isScrolled ? "bg-[#124E66] shadow-lg" : "bg-transparent"
        }`}
      >
        <img
          className="logo md:w-[150px] w-[100px] z-20"
          src="/finallogo.png"
          alt="Logo"
        />

        <nav
          className={`navbar flex flex-col md:flex-row items-center absolute md:static top-[2px] left-0 h-screen md:h-auto  w-full md:w-auto bg-[#124E66] md:bg-transparent pt-6  md:pt-0 transition-all duration-500 ease-in-out ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 text-3xl md:mr-14 font-medium py-2 md:py-0"
                : "text-gray-200 text-3xl md:mr-14 font-medium py-2 md:py-0"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 text-3xl md:mr-14 font-medium py-2 md:py-0"
                : "text-gray-200 text-3xl md:mr-14 font-medium py-2 md:py-0"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/tours"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 text-3xl md:mr-14 font-medium py-2 md:py-0"
                : "text-gray-200 text-3xl md:mr-14 font-medium py-2 md:py-0"
            }
          >
            Hot Tours
          </NavLink>
          <NavLink
            to="/attractions"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 text-3xl md:mr-14 font-medium py-2 md:py-0"
                : "text-gray-200 text-3xl md:mr-14 font-medium py-2 md:py-0"
            }
          >
            Attractions
          </NavLink>
          <NavLink
            to="/prices"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 text-3xl md:mr-14 font-medium py-2 md:py-0"
                : "text-gray-200 text-3xl md:mr-14 font-medium py-2 md:py-0"
            }
          >
            Our Prices
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 text-3xl md:mr-14 font-medium py-2 md:py-0"
                : "text-gray-200 text-3xl md:mr-14 font-medium py-2 md:py-0"
            }
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="flex items-center space-x-4 z-20">
          <div
            className="bx bx-moon text-3xl text-gray-200"
            id="darkMode-icon"
          ></div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
