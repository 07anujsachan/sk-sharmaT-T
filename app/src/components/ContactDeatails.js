import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Details = () => {
    const address = {
        
        number: "+91-9459588163",
        number1: "+91-8219129088",
        gmail:"sharmatourandtravel786@gmail.com"
      };
    
  return <div className=" flex justify-between bg-[#124E66] p-4">
     <div className="flex">
       <p className="text-xl text-yellow-500">Call US: {address.number}, {address.number1} |</p>  
       <p className="text-xl text-yellow-500">{address.gmail}</p>
     </div>
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
  </div>;
};
