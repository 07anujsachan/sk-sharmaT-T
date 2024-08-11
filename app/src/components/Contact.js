import React from "react";
import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
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
      <div className="flex justify-between contact mt-7">
        <div className="p-9 ">
          <h2 className="text-3xl text-center">Get Started</h2>
          <p className="text-2xl">
            We Provide high class services at attractive prices. Please reach
            out to us via details given below or leave a query on the form
            given.
          </p>
        </div>

        <form action="https://formspree.io/f/mkndrqdg" method="POST">
          <div class="input-box">
            <input type="text" name="name" placeholder="Full Name" />
            <input type="email" name="email" placeholder="Email Address" />
          </div>
          <div class="input-box">
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
          <button type="submit" class="btn">
            Send Message
          </button>
        </form>
      </div>
      <div></div>
    </div>
  );
};
