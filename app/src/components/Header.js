import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        className={`p-4 flex justify-between items-center fixed top-0 left-0 w-full px-[6%] py-8   z-[100] transition duration-500 ${
          isScrolled ? "bg-[#124E66]  shadow-lg" : "bg-transparent"
        }`}
      >
        <img
          className=" logo  md:w-[150px] w-[100px] "
          src=".//logo.png"
          alt="#"
        />

        <nav className="navbar">
          <Link to="/" className="text-3xl mr-14 font-medium text-yellow-500">
            Home
          </Link>
          <Link
            className="text-3xl mr-14 font-medium text-gray-200"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-3xl mr-14 font-medium text-gray-200"
            to="/tours"
          >
            Hot Tours
          </Link>
          <Link
            className="text-3xl mr-14 font-medium text-gray-200"
            to="/attractions"
          >
            Attractions
          </Link>
          <Link
            className="text-3xl mr-14 font-medium text-gray-200"
            to="/prices"
          >
            Our Prices
          </Link>
          <Link
            className="text-3xl mr-14 font-medium text-gray-200"
            to="/contact"
          >
            Contact Us
          </Link>
        </nav>

        <div className="bx bx-moon" id="darkMode-icon"></div>

        <div className="bx bx-menu" id="menu-icon"></div>
      </div>
    </>
  );
};
