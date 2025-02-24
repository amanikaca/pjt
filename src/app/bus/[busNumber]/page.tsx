import { notFound } from 'next/navigation';

// Mock data for bus timings (replace with actual data fetching logic)
const busTimings = [
  {
    slug: 'bus-1',
    heading: 'Bus 1 Timings',
    locations: [
      {
        name: 'Location A',
        morning: '7:00 AM',
        afternoon: '1:00 PM',
      },
      {
        name: 'Location B',
        morning: '8:00 AM',
        afternoon: '2:00 PM',
      },
    ],
  },
  {
    slug: 'bus-2',
    heading: 'Bus 2 Timings',
    locations: [
      {
        name: 'Location X',
        morning: '7:30 AM',
        afternoon: '1:30 PM',
      },
      {
        name: 'Location Y',
        morning: '8:30 AM',
        afternoon: '2:30 PM',
      },
    ],
  },
  // Add more bus timings as needed
];

export default function BusTimingPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Find the bus timing data based on the slug
  const busTiming = busTimings.find((bus) => bus.slug === slug);

  // If bus timing not found, return a 404 page
  if (!busTiming) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black text-white">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6">{busTiming.heading}</h1>

      {/* Timings Table */}
      <div className="w-full max-w-2xl overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Morning Time</th>
              <th className="p-3 text-left">Afternoon Time</th>
            </tr>
          </thead>
          <tbody>
            {busTiming.locations.map((location, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="p-3">{location.name}</td>
                <td className="p-3">{location.morning}</td>
                <td className="p-3">{location.afternoon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}