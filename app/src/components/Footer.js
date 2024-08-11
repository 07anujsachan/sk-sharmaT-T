import React from "react";

export const Footer = () => {
  const address = {
    name: "S K Sharma Tour & Travels",
    address: "VPO Sarah , Dharamshala",
    state: "Himachal Pradesh",
    pincode: "176215",
    number: "9459588163",
  };

  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.021452555192!2d76.3126525!3d32.2036526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b5180a59a9cef%3A0xaf5caa22fc1779bf!2sTaxi%20Service%20Dharamshala%20-SK%20Tours!5e0!3m2!1sen!2sin!4v1723363837846!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  return (
    <>
      <footer className="bg-gray-800 text-white py-40 px-32">
        <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img src=".//logo.png" alt="Company Logo" className="w-1/2" />
          </div>

          {/* Contact Details */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="mb-1 text-2xl font-semibold">{address.name}</p>
            <p className="mb-1 text-2xl font-semibold">{address.address}</p>
            <p className="mb-1 text-2xl font-semibold">{address.state}</p>
            <p className="mb-1 text-2xl font-semibold">
              Pincode: {address.pincode}
            </p>
            <p className="mb-1 text-2xl font-semibold">
              Contact : {address.number}
            </p>
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
        <p className="text-3xl">
          &copy: S K Sharma Tour & Travels All Right Reserved @2024
        </p>
      </div>
    </>
  );
};
