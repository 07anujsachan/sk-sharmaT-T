import React from "react";
import { useState } from "react";
import { Header } from "./Header";

export const Attractions = () => {
  return (
    <div>
      <Header />
      <div className="about-bg lg:h-[400px] md:h-[300px] h-96  flex justify-center items-center ">
        <h3 className=" lg:text-6xl md:text-4xl text-3xl text-white ">
          {" "}
          Best Places To Visit In Himachal Pradesh
        </h3>
      </div>
      <div className="mx-auto max-w-[1100px] my-20  ">
        <div className=" flex w-full">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/hpca_tadium.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 px-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              H P C A Stadium
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12 ">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Tea Garden
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/teagarden.avif"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12  ">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/chamunda.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Chamunda Devi Temple
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Brijeshwari Devi Temple
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/kangra.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12 ">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/war-memorial.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              War Memorial
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Jwala Devi Temple
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/jwala-devi-temple.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12 ">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/MCLEODGANJ.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Mcleodganj
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Naddi View Point
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/naddi.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12 ">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/bhagsu.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Bhagsu Waterfall
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]"> Dal Lake</h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//dal-lake.jpeg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12 ">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//triund.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Triund Trek
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Kangra Fort
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//kangra-fort.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12 ">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/tantrik.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              DalaiLama Temple
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Sent John Church
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-lg"
              src=".//attractions/sjchurch.jpeg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/atal.png"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Atal Tunnel
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12 ">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Bir-Billing
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/bir-billing.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/hanumankatibba.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Hanuman Ka Tibba
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12 ">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Hidimba Devi Temple
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/hidimba.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/jogini.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Jogini Waterfall
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12 ">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Manikaran Sahib
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/mani.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/solang.webp"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Solang Valley
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
