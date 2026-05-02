import React from "react";
import "remixicon/fonts/remixicon.css";

export default function LeftPageContent() {
  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/3 p-4">
      {/* Top Content */}
      <div>
        <h3 className="mb-7 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Prospective <br />
          <span className="text-blue-600">customer</span>
          <br /> segmentation
        </h3>

        <p className="text-base md:text-lg lg:text-xl font-medium text-gray-600">
          Segment your prospective customers based on their behavior,
          preferences, and engagement with your brand. This allows you to tailor
          your marketing efforts and create personalized experiences that
          resonate with each segment.
        </p>
      </div>

      {/* Bottom Icon */}
      <div className="text-5xl md:text-7xl lg:text-8xl self-end">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
}
