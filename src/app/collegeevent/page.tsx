
'use client';
import React, { useState } from 'react';

type EventDetails = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  image: File | null;
};

export default function AddEventDetails() {
  const [eventDetails, setEventDetails] = useState<EventDetails>({
    title: '',
    subtitle: '',
    date: '',
    description: '',
    image: null,
  });

  // Handle text input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setEventDetails(prev => ({ ...prev, [name]: value }));
  };

  // Handle image upload (Fixed type error)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null; // Ensure it's either File or null
    setEventDetails(prev => ({ ...prev, image: file }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.warn('Event Details:', eventDetails); // Changed from console.log
    // Add form submission logic (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] p-6 pb-20 text-white">
      <h2 className="mb-6 text-2xl font-semibold">Add Event Details</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={eventDetails.title}
            onChange={handleChange}
            className="w-full rounded-lg bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Title Name"
            required
          />
        </div>

        {/* Subtitle */}
        <div>
          <label htmlFor="subtitle" className="mb-2 block text-sm font-medium">
            Subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={eventDetails.subtitle}
            onChange={handleChange}
            className="w-full rounded-lg bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Subtitle"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="mb-2 block text-sm font-medium">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={eventDetails.date}
            onChange={handleChange}
            className="w-full rounded-lg bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={eventDetails.description}
            onChange={handleChange}
            className="w-full rounded-lg bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Description"
            rows={4}
            required
          />
        </div>

        {/* Upload Image */}
        <div>
          <label
            htmlFor="image"
            className="inline-block cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white shadow-md transition hover:bg-blue-700"
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
          {eventDetails.image && (
            <p className="mt-2 text-gray-200">
              Selected:
              <br />
              {eventDetails.image.name}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
