'use client';
import { FloorButtons } from '@/components/map/floorButton';

const floorData = [
  { floorNumber: 'Ground', pdfLink: '/pdfs/ground-floor.pdf' },
  { floorNumber: '1', pdfLink: '/pdfs/first-floor.pdf' },
  { floorNumber: '2', pdfLink: '/pdfs/second-floor.pdf' },
  { floorNumber: '3', pdfLink: '/pdfs/third-floor.pdf' },
];

export default function CollegeMapPage() {
  return (
    <div>
      <FloorButtons floors={floorData} />
    </div>
  );
}