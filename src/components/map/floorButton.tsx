'use client';
import { QuickActionButton } from '@/components/QuickActionButton';
import Link from 'next/link';
import React from 'react';

// Export FloorData type
export type FloorData = {
  floorNumber: string; // e.g., "Ground", "1", "2", "3"
  pdfLink: string; // Link to the PDF file
};

export const FloorButtons = ({ floors }: { floors: FloorData[] }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          College Map Floors
        </h1>
        <div className="space-y-3">
          {/* Floor Buttons */}
          {floors.map((floor) => (
            <div key={floor.floorNumber} className="flex justify-center">
              <Link href={floor.pdfLink} target="_blank" rel="noopener noreferrer">
                <QuickActionButton
                  text={`Floor ${floor.floorNumber}`}
                  className="w-full py-3 text-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-lg shadow-md"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};