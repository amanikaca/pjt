"use client";
import React, { useState } from "react";

export default function AddEventDetails() {
  const [eventDetails, setEventDetails] = useState({
    title: "",
    subtitle: "",
    date: "",
    description: "",
    image: null as File | null,
  });

  // Handle text input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setEventDetails((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Event Details:", eventDetails);
    // Add form submission logic (e.g., API call)
  };

  return (
    <div className="p-6 bg-[#1E1E1E] min-h-screen pb-20 text-white">
      <h2 className="text-2xl font-semibold mb-6">Add Event Details</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={eventDetails.title}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Title Name"
            required
          />
        </div>

        {/* Subtitle */}
        <div>
          <label htmlFor="subtitle" className="block text-sm font-medium mb-2">Subtitle</label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={eventDetails.subtitle}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Subtitle"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-2">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={eventDetails.date}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={eventDetails.description}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Description"
            rows={4}
            required
          />
        </div>

        {/* Upload Image */}
        <div>
          <label
            htmlFor="image"
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition inline-block"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
            required
          />
          {eventDetails.image && <p className="text-gray-200 mt-2">{eventDetails.image.name}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
