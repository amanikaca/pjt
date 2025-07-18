'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function ComplaintForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [place, setPlace] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !place.trim() || !image) {
      alert('Please fill in all fields and upload an image.');
      return;
    }

    console.log({ title, description, place, image });
    alert('Complaint submitted successfully!');
    // 🔧 You can add backend logic here (e.g., upload to a server or database)
  };

  return (
    <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
      {/* Image Upload Section */}
      <div className="border rounded-lg p-4 text-center bg-gray-100">
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Preview"
            className="mx-auto w-full max-w-xs h-40 object-cover rounded mb-2"
          />
        )}
        <label className="cursor-pointer underline text-gray-700">
          Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Title Field */}
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        placeholder="Title Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      {/* Description Field */}
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      {/* Place Field */}
      <label htmlFor="place">Place</label>
      <input
        id="place"
        type="text"
        placeholder="Place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      {/* Submit Button */}
      <button type="submit" className="w-full bg-black text-white py-2 rounded">
        Confirm
      </button>
    </form>
  );
}
