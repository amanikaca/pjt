'use client';

import { useState } from 'react';
import ComplaintCard from '@/components/complaint/Complaintcard'; 
import Tabs from '@/components/complaint/Tabs';
import Link from 'next/link';

type Complaint = {
  id: number;
  title: string;
  description: string;
  time: string;
  date: string;
  solved: boolean;
  imageUrl?: string;
};

const complaints: Complaint[] = [
  {
    id: 1,
    title: 'Filter Problem',
    description: 'Water filter leaking in the corner.',
    time: '10:30am',
    date: '25-06-2025',
    solved: true,
    imageUrl: '/images/filter.jpg',
  },
  {
    id: 2,
    title: 'Broken Fan',
    description: 'Fan not working in Room 104.',
    time: '2:00pm',
    date: '22-06-2025',
    solved: false,
    imageUrl: '/images/filter.jpg',
  },
];

export default function ComplaintPage() {
  const [selectedTab, setSelectedTab] = useState<'solved' | 'unsolved'>('solved');

  return (
    <div className="min-h-screen p-4 pb-28 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-4">Complaint</h1>

      {/* Tabs */}
      <Tabs selected={selectedTab} onChange={setSelectedTab} />

      {/* Complaint Cards */}
      {complaints
        .filter((c) => c.solved === (selectedTab === 'solved'))
        .map((c) => (
          <ComplaintCard key={c.id} complaint={c} />
        ))}

      {/* Floating + Button */}
      <Link href="/complaint/new">
        <button
          className="fixed bottom-24 right-4 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full text-2xl shadow-lg"
          aria-label="Add new complaint"
        >
          +
        </button>
      </Link>
    </div>
  );
}
