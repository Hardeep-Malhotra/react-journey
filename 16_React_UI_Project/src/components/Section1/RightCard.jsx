import React from "react";
import "remixicon/fonts/remixicon.css";

export const RightCard = (props) => {
  return (
    <div className="relative overflow-hidden w-full md:w-80 h-full rounded-2xl group">
      {/* Image */}
      <img
        src={props.img}
        alt="Customer"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Top Circle */}
        <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center shadow-md">
          {props.index + 1}
        </h2>

        {/* Bottom Content */}
        <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl">
          <p className="text-sm md:text-base leading-normal text-white">
            {props.intro}
          </p>

          <div className="flex justify-between items-center mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition rounded-full text-white text-sm font-medium px-4 py-2">
              {props.tag}
            </button>

            <button className="bg-white/20 hover:bg-white/30 transition rounded-full text-white p-2">
              <i className="ri-arrow-right-line text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
