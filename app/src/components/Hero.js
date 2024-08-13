import React from "react";

import { useState, useEffect } from "react";
import { Header } from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faCity,
  faBuildingFlag,
  faFaceSmile,
  faWallet,
  faFire,
  faHeadphones,
  faAward,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Reviews } from "./Reviews";
import { Link } from "react-router-dom";

export const Hero = () => {
  // prices
  const taxis = [
    {
      image: "/cars/alto.webp",
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
      image: "/cars/dzire.jpg",
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
      image: "/cars/etios.webp",
      name: "Etios",
      features: [
        "4 + 1 seater",
        "Individual rides",
        "Small family rides",
        "Short / Long tours",
        "One way / Two way",
      ],
    },
  ];
  // more Info button
  const sendMessage = () => {
    const phoneNumber = "8219129088";
    const message = encodeURIComponent(
      "Hello, I need more information about this tour."
    ); // Customize your message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  const sendMessagePrice = () => {
    const phoneNumber = "8219129088";
    const message = encodeURIComponent(
      `Hello, I need more information about your car prices.`
    ); // Customize your message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  // Array of background images
  const images = [
    "/bridge.jpeg",
    "/mountain.jpeg",
    "/hpcas.jpg",
    "/triund.jpg",
    "/trek.jpeg",
    "/snow.jpeg",
    // Add more images as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  // Style for the background image
  const backgroundStyle = {
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    transition: "background-image 0.5s ease-in-out",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "2rem",
  };
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <>
      <div style={backgroundStyle}>
        <Header />

        <div style={overlayStyle}>
          <h2 className="text-white">Let's Travel the INDIA with us</h2>
          <h1 className="md:text-9xl text-6xl w-2/4 text-center mt-9 mb-20 font-bold">
            <strong className="outline1 md:text-9xl text-6xl">DISCOVER</strong>{" "}
            THE INDIA WITH US
          </h1>
          <Link to="/prices">
            <button className="bg-yellow-600 text-white py-5 px-10 rounded-xl font-semibold">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-slate-200">
        <h3 className="pt-8 font-semibold text-center lg:text-5xl md:text-3xl text-2xl  text-[#124E66]">
          7 Years of Following The Dream
        </h3>
        <div className="mx-auto items-center flex justify-between md:px-52 lg:px-96 px-20  py-20 bg-slate-200">
          <div className="flex items-center flex-col">
            <FontAwesomeIcon
              className="text-2xl md:text-6xl mb-2 text-gray-400"
              icon={faCity}
            />
            <div>
              <p className="font-bold text-3xl md:text-8xl text-[#124266]">
                20+
              </p>
            </div>
            <h5 className="text-yellow-500 text-2xl md:text-4xl ">Cities</h5>
          </div>
          <div className="flex items-center flex-col">
            <FontAwesomeIcon
              className="text-2xl md:text-6xl mb-2 text-gray-400"
              icon={faCar}
            />
            <div>
              <p className="font-bold text-3xl md:text-8xl text-[#124266]">
                10+
              </p>
            </div>
            <h5 className="text-yellow-500 text-2xl md:text-4xl ">Cars</h5>
          </div>
          <div className="flex items-center flex-col">
            <FontAwesomeIcon
              className="text-2xl md:text-6xl  mb-2 text-gray-400"
              icon={faFaceSmile}
            />
            <div>
              <p className="font-bold text-3xl md:text-8xl text-[#124266]">
                500+
              </p>
            </div>
            <h5 className="text-yellow-500 text-2xl md:text-4xl text-center w-20 md:w-auto">
              Happy Customers
            </h5>
          </div>
          <div className="flex items-center flex-col">
            <FontAwesomeIcon
              className="text-2xl md:text-6xl  mb-2 text-gray-400"
              icon={faBuildingFlag}
            />
            <div>
              <p className="font-bold text-3xl md:text-8xl text-[#124266]">
                200+
              </p>
            </div>
            <h5 className="text-yellow-500 text-2xl md:text-4xl ">Tours</h5>
          </div>
        </div>
      </div>

      <div className=" py-40 w-full">
        <div className="flex lg:flex-row flex-col justify-between px-20 md:px-40 lg:px-80">
          <figure className="basis-[45%] mb-12 lg:md-1">
            <img className="w-full rounded-2xl " src="/hpcas.jpg" alt="" />
          </figure>
          <div className="basis-1/2 ">
            <h2 className="md:text-5xl text-3xl font-semibold  mb-10">
              Discover New Horizons
            </h2>
            <div className="flex space-x-4 my-4 justify-between  items-center">
              <button
                className={` py-2 rounded ${
                  activeButton === 1
                    ? "text-yellow-500 border-yellow"
                    : "text-gray-500 border-gray"
                } text-xl md:text-3xl`}
                onClick={() => handleButtonClick(1)}
              >
                ABOUT US
              </button>
              <button
                className={`py-2 rounded border-b-8 ${
                  activeButton === 2
                    ? "text-yellow-500 border-yellow"
                    : "text-gray-500 border-gray"
                } text-xl md:text-3xl `}
                onClick={() => handleButtonClick(2)}
              >
                WHY CHOOSE US
              </button>
              <button
                className={`py-2 rounded border-b-8 ${
                  activeButton === 3
                    ? "text-yellow-500 border-2 border-yellow"
                    : "text-gray-500 border-gray"
                } text-xl md:text-3xl`}
                onClick={() => handleButtonClick(3)}
              >
                OUR MISSON
              </button>
            </div>
            <div className="">
              {activeButton === 1 && (
                <p className="py-4 text-2xl">
                  Established in 2017 in the picturesque town of Dharamshala,
                  Himachal Pradesh, we have been curating unforgettable travel
                  experiences for over two decades. Our passion for travel and
                  commitment to excellence has led us to create tailored tours
                  that showcase the diversity and richness of India's culture,
                  history, and natural wonders.
                </p>
              )}
              {activeButton === 2 && (
                <p className="py-4 text-2xl">
                  We are proud to offer excellent quality and value for money in
                  our tours, which give you the chance to experience your chosen
                  destination in an authentic and exciting way.
                </p>
              )}
              {activeButton === 3 && (
                <p className="py-4 text-2xl">
                  Our mission is to provide the ultimate travel planning
                  experience while becoming a one-stop shop for every travel
                  service available in the industry.
                </p>
              )}
            </div>
            <Link to="/about">
              <button className="bg-yellow-500 text-white py-5 px-10 rounded-xl font-semibold text-2xl mt-12">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* service section */}

      <section className="px-10  md:px-40 lg:px-80 py-16">
        <div className="">
          <h3 className="text-center text-4xl md:text-6xl font-bold mb-12">
            What we Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
            <article className="p-14  service-border text-center m-4 ">
              <div className="">
                <FontAwesomeIcon
                  className="text-6xl mb-6 text-yellow-500"
                  icon={faSliders}
                  rotation={90}
                />
                <h5 className="text-4xl text-[#124E66]">
                  <a href="services.html">Personalized Matching</a>
                </h5>
                <p className="box-icon-classic-text m-6 text-2xl text-gray-400">
                  Our unique matching system lets you find just the tour you
                  want for your next holiday.
                </p>
              </div>
            </article>

            <article className="p-14  service-border text-center m-4  ">
              <div className="">
                <FontAwesomeIcon
                  className="text-6xl mb-6 text-yellow-500"
                  icon={faAward}
                />
                <h5 className="text-4xl">
                  <a href="services.html">Wide Variety of Tours</a>
                </h5>
                <p className="box-icon-classic-text m-6 text-2xl text-gray-400">
                  We offer a wide variety of personally picked tours with
                  destinations all over the globe.
                </p>
              </div>
            </article>

            <article className="p-14  service-border text-center m-4 ">
              <div className="">
                <FontAwesomeIcon
                  className="text-6xl mb-6 text-yellow-500"
                  icon={faStar}
                />
                <h5 className="text-4xl">
                  <a href="services.html">Highly Qualified Service</a>
                </h5>
                <p className="box-icon-classic-text m-6 text-2xl text-gray-400">
                  Our tour managers are qualified, skilled, and friendly to
                  bring you the best service.
                </p>
              </div>
            </article>

            <article className="p-14  service-border text-center m-4 ">
              <div className="">
                <FontAwesomeIcon
                  className="text-6xl mb-6 text-yellow-500"
                  icon={faHeadphones}
                />
                <h5 className="text-4xl">
                  <a href="services.html">24/7 Support</a>
                </h5>
                <p className="box-icon-classic-text m-6 text-2xl text-gray-400">
                  You can always get professional support from our staff 24/7
                  and ask any question you have.
                </p>
              </div>
            </article>

            <article className=" p-14  service-border text-center  m-4 ">
              <div className="">
                <FontAwesomeIcon
                  className="text-6xl mb-6 text-yellow-500"
                  icon={faFire}
                />
                <h5 className="text-4xl">
                  <a href="services.html">Handpicked Hotels</a>
                </h5>
                <p className="box-icon-classic-text m-6 text-2xl text-gray-400">
                  Our team offers only the best selection of affordable and
                  luxury hotels to our clients.
                </p>
              </div>
            </article>

            <article className=" p-14  service-border text-center m-4">
              <div className="">
                <FontAwesomeIcon
                  className="text-6xl mb-6 text-yellow-500"
                  icon={faWallet}
                />
                <h5 className="text-4xl">
                  <a href="services.html">Best Price Guarantee</a>
                </h5>
                <p className="box-icon-classic-text m-6 text-2xl text-gray-400">
                  If you find tours that are cheaper than ours, we will
                  compensate the difference.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* tours section  */}
      <section className="px-10  md:px-40 lg:px-80 py-16">
        <h3 className="text-center text-4xl md:text-6xl font-bold mb-12">
          Hot Tours
        </h3>
        <div>
          <div className="flex flex-col md:flex-row my-20  ">
            <figure className="md:w-1/2 w-full ">
              <img className="h-full tour-img" src="/domestic.webp" alt="#" />
            </figure>
            <div className="md:px-40 md:py-32 p-10 md:w-1/2 w-full border-tour ">
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
              <Link to="/tours">
                <button
                  onClick={sendMessage}
                  className="more-info text-2xl font-semibold px-6 py-4 mt-8 "
                >
                  More Info
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row my-20 ">
            <figure className="md:w-1/2 w-full ">
              <img className="h-full tour-img" src="/activity.jpg" alt="#" />
            </figure>
            <div className="md:px-40 md:py-32 p-10 md:w-1/2 w-full  border-tour">
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
              <Link to="/tours">
                <button
                  onClick={sendMessage}
                  className="more-info text-2xl font-semibold px-6 py-4 mt-8 "
                >
                  More Info
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      {/* our prices section  */}

      <section className="px-10  md:px-40 lg:px-80 py-16">
        <div>
          <h1 className="text-5xl text-[#124e66] my-12 font-semibold">
            Our Prices
          </h1>
          <p className="text-2xl text-gray-600 ">
            S K Sharma Tours is a popular travel agency based in Dharamshala,
            Himachal Pradesh, India. The agency specializes in providing various
            travel services, including car rentals, tour packages, and taxi
            services.S K Sharma Tours is committed to providing
            high-quality and affordable travel services to their customers.
          </p>
          <Link to="/prices">
            <button className="more-info text-2xl font-semibold px-6 py-4 mt-8">
              {" "}
              View More
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {taxis.map((taxi) => (
            <div className="service-border my-4 mr-4">
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
                <button
                  onClick={sendMessagePrice}
                  className="py-4 text-lg mt-6 px-8 bg-[#124e66] text-white rounded-xl font-semibold"
                >
                  Get Prices
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* places to visit section  */}
      <section className="px-10  md:px-40 lg:px-80 py-16">
        <div>
          <h1 className="text-5xl text-[#124e66] my-12 font-semibold">
            Popular destination
          </h1>
          <p className="text-2xl text-gray-600 ">
            Dharamshala is a popular tourist destination in Himachal Pradesh,
            and S K Sharma Tours offers a range of services to help travelers
            explore the area. Some of the most popular destinations in
            Dharamshala include:
          </p>
          <Link to="/attractions">
            <button className="more-info text-2xl font-semibold px-6 py-4 mt-8">
              {" "}
              View More
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8  overflow-scroll">
          <div className="image-container w-1/2">
            <img
              src="/attractions/shimla.jpg"
              alt="Description"
              className="image w-full"
            />
            <div className="overlay">
              <div className="text">Shimla</div>
            </div>
          </div>
          <div className="image-container w-1/2">
            <img
              src="/attractions/hidimba.jpg"
              alt="Description"
              className="image w-full"
            />
            <div className="overlay">
              <div className="text">Manali</div>
            </div>
          </div>
          <div className="image-container w-1/2">
            <img
              src="/attractions/khajjiyar.jpg"
              alt="Description"
              className="image w-full"
            />
            <div className="overlay">
              <div className="text">Dalhousie</div>
            </div>
          </div>
          <div className="image-container w-1/2">
            <img
              src="/attractions/golden-tmp.webp"
              alt="Description"
              className="image w-full"
            />
            <div className="overlay">
              <div className="text">Amritsar</div>
            </div>
          </div>
          <div className="image-container w-1/2">
            <img
              src="/attractions/Bir-Billing.jpg"
              alt="Description"
              className="image w-full"
            />
            <div className="overlay">
              <div className="text">Bir Billing</div>
            </div>
          </div>
          <div className="image-container w-1/2">
            <img
              src="/attractions/teagarden.avif"
              alt="Description"
              className="image w-full"
            />
            <div className="overlay">
              <div className="text">Palampur</div>
            </div>
          </div>
        </div>
      </section>
      {/* contact form */}
      <section className="px-10  md:px-40 lg:px-80 py-16 contact">
        <h1 className="text-5xl text-[#124e66] my-12 font-semibold text-center">
          Get In Touch
        </h1>
        <form
          action="https://formspree.io/f/mkndrqdg"
          method="POST"
          className="md:w-1/2 w-full mx-auto my-0"
        >
          <div className="flex justify-between">
            <input
              className="w-full mr-2 px-[1.5rem] py-[1.5rem] text-[1.6rem] text-[var(--text-color)] bg-[var(--bg-color)] rounded-[0.8rem] my-[0.7rem] shadow-[0_0.1rem_0.5rem_var(--shadow-color)]"
              type="text"
              name="name"
              placeholder="Full Name"
            />
            <input
              className="w-full mr-2 px-[1.5rem] py-[1.5rem] text-[1.6rem] text-[var(--text-color)] bg-[var(--bg-color)] rounded-[0.8rem] my-[0.7rem] shadow-[0_0.1rem_0.5rem_var(--shadow-color)]"
              type="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex justify-between ">
            <input
              className="w-full mr-2 px-[1.5rem] py-[1.5rem] text-[1.6rem] text-[var(--text-color)] bg-[var(--bg-color)] rounded-[0.8rem] my-[0.7rem] shadow-[0_0.1rem_0.5rem_var(--shadow-color)]"
              type="number"
              name="number"
              placeholder="Mobile Number"
            />
            <input
              className="w-full mr-2 px-[1.5rem] py-[1.5rem] text-[1.6rem] text-[var(--text-color)] bg-[var(--bg-color)] rounded-[0.8rem] my-[0.7rem] shadow-[0_0.1rem_0.5rem_var(--shadow-color)]"
              type="text"
              name="subject"
              placeholder="Email Subject"
            />
          </div>
          <textarea
            className="w-full mr-2 px-[1.5rem] py-[1.5rem] text-[1.6rem] text-[var(--text-color)] bg-[var(--bg-color)] rounded-[0.8rem] my-[0.7rem] shadow-[0_0.1rem_0.5rem_var(--shadow-color)]"
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="bg-white p-4 w-full text-3xl hover:bg-[#124E66] hover:text-yellow-500 rounded-xl  msg-btn"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};
