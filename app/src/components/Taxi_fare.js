import React from "react";
import { Header } from "./Header";

export const Price = () => {
  const taxis = [
    {
      image: ".//cars/alto.webp",
      name: "Alto",
      features: [
        "4 + 1 seater",
        "Individual rides",
        "Small family rides",
        "Short / Long tours",
        "One way / Two way",
      ],
    },
    {
      image: ".//cars/dzire.jpg",
      name: "Swift Desire",
      features: [
        "4 + 1 seater",
        "Individual rides",
        "Small family rides",
        "Short / Long tours",
        "One way / Two way",
      ],
    },
    {
      image: ".//cars/etios.webp",
      name: "Etios",
      features: [
        "4 + 1 seater",
        "Individual rides",
        "Small family rides",
        "Short / Long tours",
        "One way / Two way",
      ],
    },
    {
      image: ".//cars/innova.avif",
      name: "Innova Crysta",
      features: [
        "7 seater",
        "Group rides",
        "Medium size family rides",
        "Short / Long tours",
        "One way / Two way",
      ],
    },
    {
      image: ".//cars/ertiga.jpeg",
      name: "Ertiga",
      features: [
        "7 seater",
        "Group rides",
        "Medium size family rides",
        "Short / Long tours",
        "One way / Two way",
      ],
    },
  ];
  return (
    <div>
      <Header />
      <div className="about-bg lg:h-[400px] md:h-[300px] h-96  flex justify-center items-center ">
        <h3 className=" lg:text-6xl md:text-4xl text-3xl text-white ">
          {" "}
          Our Prices
        </h3>
      </div>
      <div className="mx-auto max-w-[1200px] my-20 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {taxis.map((taxi) => (
            <div className="service-border m-4">
              <figure>
                <img src={taxi.image} alt="alto" />
              </figure>
              <div className="p-10">
                <h3 className="md:text-3xl text-xl text-[#124e66] font-bold">
                  {taxi.name}
                </h3>
                <ul className="ml-5 text-2xl mt-4">
                  {taxi.features.map((f) => (
                    <li className="list-disc mb-2">{f}</li>
                  ))}
                </ul>
                <button className="py-4 text-lg mt-6 px-8 bg-[#124e66] text-white rounded-xl font-semibold">
                  Get Prices
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
