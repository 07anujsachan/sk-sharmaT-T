import React from "react";

export const Loader = () => {
  return (
    <div className=" flex justify-center items-center flex-col text-center h-screen">
      <div className="loader"></div>;
      <div className="mt-12">
        <h3 className=" md:text-5xl lg:text-5xl text-2xl font-semibold">
          {" "}
          Welcome to S K Sharma Tours
        </h3>
        <h2 className=" md:text-5xl lg:text-5xl text-2xl font-semibold mt-4">
          Please Wait...
        </h2>
      </div>
    </div>
  );
};
