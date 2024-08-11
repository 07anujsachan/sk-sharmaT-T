import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  const address = {
    name: "S K Sharma Tour & Travels",
    address: "VPO Sarah , Dharamshala",
    state: "Himachal Pradesh",
    pincode: "176215",
    number: "+91-9459588163",
    number1: "+91-8219129088",
    gmail:"sharmatourandtravel786@gmail.com"
  };

  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.021452555192!2d76.3126525!3d32.2036526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b5180a59a9cef%3A0xaf5caa22fc1779bf!2sTaxi%20Service%20Dharamshala%20-SK%20Tours!5e0!3m2!1sen!2sin!4v1723363837846!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  return (
    <>
      <footer className="bg-gray-800 text-white py-40 px-32">
        <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              src=".//logo.png"
              alt="Company Logo"
              className="lg:w-1/2 md:w-1/2 w-full "
            />
            <div className="flex lg:ml-8 mt-8 ml-2 md:ml-6">
              <a href="https://www.instagram.com/sk_sharma_tours?igsh=MTNybnlzeGR6dzlqZQ%3D%3D&utm_source=qr" target="_blank"><FontAwesomeIcon
                className="text-6xl  mx-4 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 rounded-lg bg-clip-border"
                icon={faInstagram}
              /></a>
              <a href="https://www.facebook.com/profile.php?id=61563539683762" target="_blank"><FontAwesomeIcon
                className="bg-blue-600 text-white font-bold text-3xl p-4 mx-8 rounded-lg"
                icon={faFacebookF}
              /></a>
              <a href="https://youtube.com/@sumitsharma4405?si=W-pJ_fjNv9NqfH_X" target="_blank"><FontAwesomeIcon
                className="bg-red-500 text-3xl py-4 px-2 mx-4 rounded-lg"
                icon={faYoutube}
              /></a>
              
              
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="mb-4 text-3xl font-bold">Address :-</p>
            <p className="mb-1 text-2xl font-semibold">{address.name}</p>
            <p className="mb-1 text-2xl font-semibold">{address.address}</p>
            <p className="mb-1 text-2xl font-semibold">{address.state}</p>
            <p className="mb-1 text-2xl font-semibold">
              Pincode: {address.pincode}
            </p>
            <p className="my-4 text-3xl font-bold">Contact :-</p>
            <p className="mb-1 text-2xl font-semibold">
              {address.number}, {address.number1}
            </p>
            <p className="my-4 text-3xl font-bold">Need Support :-</p>
            <a className="mb-1 text-2xl font-semibold" href="mailto:sharmatourandtravel786@gmail.com">
              {address.gmail}
            </a>
          </div>

          {/* Map */}
          <div className="">
            <iframe
              src={mapUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </footer>
      <div className="p-24 bg-black">
        <p className="text-3xl text-gray-300">
          &copy: S K Sharma Tour & Travels All Right Reserved @2024
        </p>
      </div>
    </>
  );
};
