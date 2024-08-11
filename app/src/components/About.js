import React from "react";
import { useState } from "react";
import { Header } from "./Header";

export const About = () => {
  return (
    <div>
      <Header />
      <div className="about-bg lg:h-[400px] md:h-[300px] h-96  flex justify-center items-center ">
        <h3 className=" lg:text-6xl md:text-4xl text-3xl text-white ">
          {" "}
          About S K Sharma Tour & Travels
        </h3>
      </div>
      <div className="mx-auto max-w-[900px] my-20 p-8">
        <div className="flex justify-center items-center flex-col">
          <p className="text-2xl my-4">
            "Welcome to SK Sharma Tour & Travel Agency, your trusted partner for
            exploring the beauty of India. Established in 2000 in the
            picturesque town of Dharamshala, Himachal Pradesh, we have been
            curating unforgettable travel experiences for over two decades.
          </p>
          <p className="text-2xl my-4">
            Our passion for travel and commitment to excellence has led us to
            create tailored tours that showcase the diversity and richness of
            India's culture, history, and natural wonders. From the majestic
            Himalayas to the vibrant cities, we invite you to discover the magic
            of India with us.
          </p>
          <p className="text-2xl my-4">
            To ensure a comfortable and hassle-free journey, we offer a wide
            range of cars at reasonable fares, driven by experienced and
            knowledgeable drivers who will take you on a memorable ride. Whether
            you're looking for a luxurious experience or a budget-friendly
            option, we have the perfect vehicle for you.
          </p>
          <p className="text-2xl my-4">
            With our expertise and local knowledge, we guarantee a seamless and
            enjoyable journey, leaving you with memories to cherish for a
            lifetime. Join us on a journey that will take you to the heart of
            India!"
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-center text-4xl md:text-6xl  font-bold my-12">
          The Essence of Our Image Craft
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-8">
          <figure className="">
            <img className="w-full" src=".//vars.jpeg" alt="" />
          </figure>
          <figure className="">
            <img className="w-full" src=".//vars.jpeg" alt="" />
          </figure>
          <figure className="">
            <img className="w-full" src=".//vars.jpeg" alt="" />
          </figure>
          <figure className="">
            <img className="w-full" src=".//vars.jpeg" alt="" />
          </figure>
          <figure className="">
            <img className="w-full" src=".//vars.jpeg" alt="" />
          </figure>
          <figure className="">
            <img className="w-full" src=".//vars.jpeg" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};
