import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faRocketchat, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleCall = () => {
    window.location.href = "tel:9459588163";
  };

  const handleWhatsapp = () => {
    window.location.href = "https://wa.me/8219129088";
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      <button
        className={`bg-blue-500 text-white p-9 mb-1 text-2xl rounded-full shadow-lg focus:outline-none ${
          isOpen ? "rotate-90 bg-red-500" : ""
        } `}
        onClick={handleToggle}
      >
        {isOpen ? (
          <FontAwesomeIcon className="text-4xl" icon={faCircleXmark} />
        ) : (
          <FontAwesomeIcon className="text-4xl" icon={faRocketchat} />
        )}
      </button>

      {isOpen && (
        <div className="flex flex-col gap-3 mb-4">
          <button
            className="bg-green-500 text-white p-9 text-2xl rounded-full shadow-lg focus:outline-none"
            onClick={handleCall}
          >
            <FontAwesomeIcon className="text-4xl" icon={faPhone} />
          </button>
          <button
            className="bg-green-600 text-white p-9 rounded-full shadow-lg focus:outline-none"
            onClick={handleWhatsapp}
          >
            <FontAwesomeIcon className="text-5xl" icon={faWhatsapp} />
          </button>
        </div>
      )}
    </div>
  );
};
