import React from "react";

import { Header } from "./Header";

import "../index.css";

export const Contact = () => {
  return (
    <div>
      <Header />
      <div className="about-bg lg:h-[400px] md:h-[300px] h-96  flex justify-center items-center ">
        <h3 className=" lg:text-6xl md:text-4xl text-3xl text-white font-semibold ">
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
          action="https://formspree.io/f/xdknzqkd"
          method="POST"
          className="md:w-1/2 w-full flex justify-center  flex-col"
        >
          <div className=" flex justify-between">
            <input
              className="w-full mr-2 px-[1.5rem] py-[1.5rem] text-[1.6rem] text-[var(--text-color)] bg-[var(--bg-color)] rounded-[0.8rem] my-[0.7rem] shadow-[0_0.1rem_0.5rem_var(--shadow-color)]"
              type="text"
              name="name"
              placeholder="Full Name"
            />
            <input
              className="w-full ml-2 px-[1.5rem] py-[1.5rem] text-[1.6rem] text-[var(--text-color)] bg-[var(--bg-color)] rounded-[0.8rem] my-[0.7rem] shadow-[0_0.1rem_0.5rem_var(--shadow-color)]"
              type="email"
              name="Email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex justify-between">
            <input
              className="w-full mr-2 px-[1.5rem] py-[1.5rem] text-[1.6rem] text-[var(--text-color)] bg-[var(--bg-color)] rounded-[0.8rem] my-[0.7rem] shadow-[0_0.1rem_0.5rem_var(--shadow-color)]"
              type="number"
              name="number"
              placeholder="Mobile Number"
            />
            <input
              className="w-full ml-2 px-[1.5rem] py-[1.5rem] text-[1.6rem] text-[var(--text-color)] bg-[var(--bg-color)] rounded-[0.8rem] my-[0.7rem] shadow-[0_0.1rem_0.5rem_var(--shadow-color)]"
              type="text"
              name="subject"
              placeholder="Email Subject"
            />
          </div>
          <textarea
            className="w-full px-[1.5rem] py-[1.5rem] text-[1.6rem] text-[var(--text-color)] bg-[var(--bg-color)] rounded-[0.8rem] my-[0.7rem] shadow-[0_0.1rem_0.5rem_var(--shadow-color)]"
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="bg-white p-4 w-full text-3xl hover:bg-[#124E66] hover:text-yellow-500 rounded-xl msg-btn"
          >
            Send Message
          </button>
        </form>
      </div>
      <div></div>
    </div>
  );
};
