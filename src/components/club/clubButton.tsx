'use client';
import { QuickActionButton } from '@/components/QuickActionButton';
import Link from 'next/link';
import React from 'react';

// Export ClubData type
export type ClubData = {
  clubName: string;
  slug: string; // Unique identifier for dynamic routing
};

export const ClubButtons = ({ clubs }: { clubs: ClubData[] }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Clubs
        </h1>
        <div className="space-y-3">
          {/* Club Buttons */}
          {clubs.map((club) => (
            <div key={club.slug} className="flex justify-center">
              <Link href={`/club/${club.slug}`}>
                <QuickActionButton
                  text={club.clubName}
                  className="w-full py-3 text-lg font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors rounded-lg shadow-md"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};