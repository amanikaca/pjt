'use client';

import React from 'react';

type QuickActionButtonProps = {
  text: string;
  onClick?: () => void; // Ensure `onClick` is optional
};

export const QuickActionButton: React.FC<QuickActionButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <button
      className="flex-1 rounded-xl bg-white py-4 text-sm font-medium text-black"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
