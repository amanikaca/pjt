'use client';
import { useState } from 'react';

type Complaint = {
  id: number;
  title: string;
  description: string;
  date: string;
  solved: boolean;
  imageUrl?: string; // ✅ Image support
};

type Props = {
  complaint: Complaint;
};

export default function ComplaintCard({ complaint }: Props) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment('');
    }
  };

  return (
    <div className="border rounded-xl shadow-md p-4 mb-4 bg-white">
      {/* ✅ Image Display */}
      {complaint.imageUrl && (
        <div className="w-full h-40 mb-3 rounded-md overflow-hidden bg-gray-100">
          <img
            src={complaint.imageUrl}
            alt="Complaint"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Complaint Info */}
      <h2 className="text-lg font-semibold">{complaint.title}</h2>
      <p className="text-sm text-gray-600">
        Complaint Time & Date: {complaint.date}
      </p>
      <p className="mt-2 text-gray-800">{complaint.description}</p>

      {/* Comment Toggle */}
      <button
        onClick={() => setShowComments(!showComments)}
        className="mt-3 text-blue-600 underline text-sm"
      >
        {showComments ? 'Hide Comments' : 'Comment'}
      </button>

      {/* Comment Section */}
      {showComments && (
        <div className="mt-4">
          {/* Existing Comments */}
          <div className="max-h-40 overflow-y-auto space-y-2 text-sm">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="border-b pb-1 text-gray-700">
                  {comment}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No comments yet.</p>
            )}
          </div>

          {/* Add New Comment */}
          <div className="flex mt-3 gap-2">
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 border rounded px-2 py-1 text-sm"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
