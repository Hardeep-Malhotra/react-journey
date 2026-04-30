import React from "react";

export default function Card({
  username,
  dsecription,
  btnText = "Click"
}) {
  return (
    <div className="mb-4 ml-12 mt-12 block max-w-sm p-6 border rounded shadow">
      <a href="#">
        <img
          className="rounded"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>

      <h5 className="mt-6 mb-2 text-2xl font-semibold">
        {username}
      </h5>

      <p className="mb-6">
        {dsecription}
      </p>

      <a
        href="#"
        className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded text-sm px-4 py-2.5"
      >
        {btnText}
        <svg
          className="w-4 h-4 ms-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </a>
    </div>
  );
}
