import React from "react";

import { Header } from "./Header";

import "../index.css";

export const Contact = () => {
  return (
    <div>
      <Header />
      <div className="about-bg lg:h-[400px] md:h-[300px] h-96  flex justify-center items-center ">
        <h3 className=" lg:text-6xl md:text-4xl text-3xl text-white ">
          {" "}
          Contact Us
        </h3>
      </div>
      <div className="flex flex-col md:flex-row justify-between contact  p-10 max-w-[1300px] mx-auto">
        <div className="md:w-1/3 w-full flex justify-center flex-col mb-5">
          <h2 className="text-5xl text-[#124E66] font-semibold">Get Started</h2>
          <p className="text-3xl text-[#124E66] my-9 mx-auto">
            We Provide high class services at attractive prices. Please reach
            out to us via details given below or leave a query on the form
            given.
          </p>
        </div>

        <form
          action="https://formspree.io/f/mkndrqdg"
          method="POST"
          className="md:w-1/2 w-full"
        >
          <div className="input-box">
            <input type="text" name="name" placeholder="Full Name" />
            <input type="email" name="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="number" name="number" placeholder="Mobile Number" />
            <input type="text" name="subject" placeholder="Email Subject" />
          </div>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="bg-white p-4 w-full text-3xl hover:bg-[#124E66] hover:text-yellow-500 rounded-xl"
          >
            Send Message
          </button>
        </form>
      </div>
      <div></div>
    </div>
  );
};
