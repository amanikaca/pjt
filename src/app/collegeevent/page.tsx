"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function EventsSection() {
  const [isUpcoming, setIsUpcoming] = useState(true);

  const toggleForm = () => {
    setIsUpcoming(!isUpcoming);
  };

  const upcomingEvents = [
    {
      title: "INVENTO",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      image: "/INVENTO.jpg",
    },
  ];

  const pastEvents = [
    {
      title: "DHAKSHA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image: "/DHAKSHA.jpg",
    },
  ];

  const events = isUpcoming ? upcomingEvents : pastEvents;

  return (
    <div className="p-6 bg-[#1E1E1E] min-h-screen relative">
      <h2 className="text-2xl font-semibold mb-6 text-white">Events</h2>
      <div className="bg-black w-[80%] mx-auto rounded-3xl mb-6 p-1 flex items-center transition-all duration-300 ease-in-out">
        <button
          onClick={toggleForm}
          type="button"
          aria-label="Switch to Upcoming"
          className={`flex-1 text-xl font-bold rounded-3xl text-center p-2 transition-all duration-300 ease-in-out ${
            isUpcoming
              ? "bg-white text-black"
              : "bg-transparent text-white text-opacity-65 hover:text-opacity-100"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={toggleForm}
          type="button"
          aria-label="Switch to Past"
          className={`flex-1 text-xl font-bold rounded-3xl text-center p-2 transition-all duration-300 ease-in-out ${
            !isUpcoming
              ? "bg-white text-black"
              : "bg-transparent text-white text-opacity-65 hover:text-opacity-100"
          }`}
        >
          Past
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                src={event.image}
                alt={event.title}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {event.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {event.description}
              </p>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  Report
                </button>
                <div>
                  <button
                    type="button"
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link href="/collegeevent/addEvent">
          <button
            type="button"
            className="bg-white flex justify-center items-center w-14 h-14  rounded-lg fixed bottom-16 right-8 shadow-md hover:bg-gray-100  shadow-gray-800"
          >
            <svg
              className="w-8 h-8 text-[#5671EA] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-7 7V5"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
