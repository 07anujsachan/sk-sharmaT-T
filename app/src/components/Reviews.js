import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

// Sample reviews data
const reviews = [
  {
    id: 1,
    text: "I had an incredible experience with this car travel service! The booking process was seamless, and the vehicle was in pristine condition. The driver was punctual, professional, and made the journey extremely comfortable. Highly recommend for anyone looking for a hassle-free travel experience!",

    star: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    name: "Anuj Sachan",
  },
  {
    id: 2,
    text: "Absolutely thrilled with the service! The car was clean and well-maintained, and the driver was friendly and knowledgeable about the local area. The entire trip was smooth, and I appreciated the attention to detail. Will definitely be using this service again for future travels.",
    star: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    name: "Priya patel",
  },
  {
    id: 3,
    text: "This car travel service exceeded my expectations. From the ease of booking to the courteous and skilled driver, everything was top-notch. The car ride was comfortable, and I felt safe throughout the journey. A perfect choice for anyone seeking reliable and luxurious travel.",
    star: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    name: "Arjun Verma",
  },
  {
    id: 4,
    text: "I was impressed with how professional and efficient this service was. The driver arrived on time, and the car was spotless. The ride was smooth, and the driver made sure to accommodate all our needs. This is definitely the best car travel service I’ve used so far!",
    star: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    name: "Sneha Reddy",
  },
  {
    id: 5,
    text: "Exceptional service from start to finish! The booking was straightforward, and the communication was clear. The driver was courteous and drove safely. The car was equipped with all the amenities we needed for a comfortable journey. Highly recommended for business or leisure travel.",
    star: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    name: "Vikram Mehta",
  },
  {
    id: 6,
    text: "The level of service provided was fantastic. The car was not only clean but also smelled great, and the driver was very polite. We reached our destination on time, and the whole experience was pleasant and stress-free. I will definitely book with them again.",
    star: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    name: "Anjali Desai",
  },
  {
    id: 7,
    text: "I couldn’t have asked for a better travel experience! The car was luxurious, and the driver was both friendly and professional. They made sure we were comfortable throughout the trip. If you’re looking for a reliable car travel service, this is it!",
    star: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    name: "Rohan Kapoor",
  },
  {
    id: 8,
    text: "The service was impeccable from booking to drop-off. The driver was punctual and made us feel at ease during the entire journey. The car was well-maintained and comfortable, making our travel experience delightful. I highly recommend this service to anyone looking for quality car travel.",
    star: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    name: "Ishita Singh",
  },
  {
    id: 9,
    text: "Outstanding service! The car was in excellent condition, and the driver was very attentive to our needs. The trip was smooth, and we arrived at our destination on time. This car travel service is now my go-to for all my travel needs.",
    star: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️",
    name: "Rahul Sharma",
  },
];

export const Reviews = () => {
  const isMobile = window.innerWidth <= 640;
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsToShow = isMobile ? 1 : 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + reviewsToShow, reviews.length - reviewsToShow)
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - reviewsToShow, 0));
  };

  return (
    <div>
      {/* reviews section  */}
      <section className="px-10  md:px-40 lg:px-80 py-16">
        <h3 className="text-center text-4xl md:text-6xl font-bold mb-12">
          What Our Customers Say
        </h3>

        <div className="flex justify-between ">
          <button onClick={handlePrevious} disabled={currentIndex === 0}>
            <FontAwesomeIcon className="text-3xl" icon={faChevronLeft} />
          </button>
          {reviews
            .slice(currentIndex, currentIndex + reviewsToShow)
            .map((review) => (
              <div
                key={review.id}
                className="py-8 px-14 review-border mx-4 md:w-[30%]"
              >
                <p className="my-4 text-2xl font-semibold text-[#124E66]">
                  {" "}
                  {review.name}
                </p>
                <p className="my-4"> {review.star}</p>
                <p className="text-xl">{review.text}</p>
              </div>
            ))}
          <button
            onClick={handleNext}
            disabled={currentIndex + reviewsToShow >= reviews.length}
          >
            <FontAwesomeIcon className="text-3xl" icon={faChevronRight} />
          </button>
        </div>
      </section>
    </div>
  );
};
