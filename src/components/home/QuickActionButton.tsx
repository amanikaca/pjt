"use client";

import React from "react";

interface QuickActionButtonProps {
  text: string;
  onClick?: () => void; // Ensure `onClick` is optional
}

export const QuickActionButton: React.FC<QuickActionButtonProps> = ({ text, onClick }) => {
  return (
    <button 
      className="flex-1 bg-white text-black py-4 rounded-xl text-sm font-medium" 
      onClick={onClick} 
    >
      {text}
    </button>
  );
};

