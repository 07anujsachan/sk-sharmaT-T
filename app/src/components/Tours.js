import React from "react";
import { Header } from "./Header";

export const Tours = () => {
  const sendMessage = () => {
    const phoneNumber = "8219129088";
    const message = encodeURIComponent(
      "Hello, I need more information about this tour."
    ); // Customize your message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <>
      <Header />
      <div className="about-bg lg:h-[400px] md:h-[300px] h-96  flex justify-center items-center ">
        <h3 className=" lg:text-6xl md:text-4xl text-3xl text-white ">
          {" "}
          Our Hot Tours
        </h3>
      </div>

      <div className="px-10  md:px-40 lg:px-80 py-16">
        <h3 className="text-center text-4xl md:text-6xl font-bold mb-12">
          Hot Tours
        </h3>
        <div>
          <div className="flex flex-col md:flex-row my-20 border-tour ">
            <figure className="md:w-1/2 w-full">
              <img className="h-full tour-img" src="/domestic.webp" alt="#" />
            </figure>
            <div className="md:px-40 md:py-32 p-10 md:w-1/2 w-full ">
              <h3 className="text-4xl font-semibold my-4">Domestic Tours</h3>
              <ul className="w-full ml-4">
                <li className="list-disc mt-2  text-xl ">
                  ⁠Golden Triangle Tour (Delhi-Agra-Jaipur)
                </li>
                <li className="list-disc mt-2  text-xl">
                  Himachal Pradesh Tour (Shimla-Manali-Dharamshala)
                </li>
                <li className="list-disc mt-2  text-xl">
                  Kerala Backwaters Tour
                </li>
                <li className="list-disc mt-2  text-xl">
                  ⁠Rajasthan Desert Tour (Jodhpur-Jaisalmer-Bikaner)
                </li>
                <li className="list-disc mt-2  text-xl">
                  ⁠North East India Tour (Darjeeling-Gangtok-Kalimpong)
                </li>
              </ul>
              <button
                onClick={sendMessage}
                className="more-info text-2xl font-semibold px-6 py-4 mt-8 "
              >
                More Info
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row my-20 ">
            <figure className="md:w-1/2 w-full">
              <img className="h-full tour-img" src="/activity.jpg" alt="#" />
            </figure>
            <div className="md:px-40 md:py-32 p-10 md:w-1/2 w-full border-tour">
              <h3 className="text-4xl font-semibold my-4">Adventure Tours</h3>
              <ul className="w-full ml-4">
                <li className="list-disc mt-2  text-xl ">
                  ⁠ ⁠Trekking in Himalayas
                </li>
                <li className="list-disc mt-2  text-xl">
                  ⁠ ⁠Rafting in Rishikesh
                </li>
                <li className="list-disc mt-2  text-xl">⁠ ⁠Skiing in Manali</li>
                <li className="list-disc mt-2  text-xl">
                  Bungee Jumping in Rishikesh
                </li>
                <li className="list-disc mt-2  text-xl">
                  Hot Air Balloon in Manali
                </li>
              </ul>
              <button
                onClick={sendMessage}
                className="more-info text-2xl font-semibold px-6 py-4 mt-8 "
              >
                More Info
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row my-20 ">
            <figure className="md:w-1/2 w-full ">
              <img className="h-full tour-img" src="/pilgrimage.jpg" alt="#" />
            </figure>
            <div className="md:px-40 md:py-32 p-10 md:w-1/2 w-full  border-tour">
              <h3 className="text-4xl font-semibold my-4">Pilgrimage Tours</h3>
              <ul className="w-full ml-4">
                <li className="list-disc mt-2  text-xl ">
                  ⁠ ⁠Char Dham Yatra (Badrinath-Kedarnath-Gangotri-Yamunotri)
                </li>
                <li className="list-disc mt-2  text-xl">⁠Amarnath Yatra</li>
                <li className="list-disc mt-2  text-xl">
                  ⁠ ⁠Tirupati Balaji Tour
                </li>
                <li className="list-disc mt-2  text-xl">⁠Vaishno Devi Tour</li>
                <li className="list-disc mt-2  text-xl">
                  ⁠ ⁠Golden Temple Tour (Amritsar)
                </li>
              </ul>
              <button
                onClick={sendMessage}
                className="more-info text-2xl font-semibold px-6 py-4 mt-8 "
              >
                More Info
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row my-20 ">
            <figure className="md:w-1/2 w-full ">
              <img className="h-full tour-img" src="/luxry.jpeg" alt="#" />
            </figure>
            <div className="md:px-40 md:py-32 p-10 md:w-1/2 w-full border-tour">
              <h3 className="text-4xl font-semibold my-4">Luxury Tours</h3>
              <ul className="w-full ml-4">
                <li className="list-disc mt-2  text-xl ">
                  ⁠ ⁠Luxury Rajasthan Tour
                </li>
                <li className="list-disc mt-2  text-xl">
                  ⁠ ⁠ ⁠Luxury Kerala Tour
                </li>
                <li className="list-disc mt-2  text-xl">
                  ⁠ ⁠ ⁠Luxury Himachal Tour
                </li>
                <li className="list-disc mt-2  text-xl">⁠ ⁠Luxury Goa Tour</li>
                <li className="list-disc mt-2  text-xl">
                  ⁠Luxury Jammu & Kashmir Tour
                </li>
              </ul>
              <button
                onClick={sendMessage}
                className="more-info text-2xl font-semibold px-6 py-4 mt-8 "
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
