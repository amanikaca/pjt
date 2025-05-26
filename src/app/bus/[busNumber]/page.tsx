// This is a dynamic page component used to display bus locations.
// When a user clicks on any bus button (e.g., Bus 1, Bus 2),
// they are redirected here to this single page.
// The UI/UX layout stays the same for all buses,
// but the content (bus location details) changes dynamically
// based on which bus was selected.
// This approach avoids creating multiple static pages and keeps the code DRY.
export default function Home() {
  return (
    <div>
      <p>
        In this dynamic page, when you click any bus button, the UI/UX for all bus locations remains the same. 
        We use a dynamic page system so that clicking on, for example, the "Bus 1" button redirects here, 
        but the displayed content updates to show the respective bus's location.
      </p>
    </div>
  );
}


// src/app/bus/[busNumber]/page.tsx
// import { notFound } from 'next/navigation';

// // Mock data for bus timings
// const busTimings = [
//   {
//     slug: 'bus-1',
//     heading: 'Bus 1 Timings',
//     locations: [
//       { name: 'Location A', morning: '7:00 AM', afternoon: '1:00 PM' },
//       { name: 'Location B', morning: '8:00 AM', afternoon: '2:00 PM' },
//     ],
//   },
//   {
//     slug: 'bus-2',
//     heading: 'Bus 2 Timings',
//     locations: [
//       { name: 'Location X', morning: '7:30 AM', afternoon: '1:30 PM' },
//       { name: 'Location Y', morning: '8:30 AM', afternoon: '2:30 PM' },
//     ],
//   },
//   // Add more bus timings as needed
// ];

// // Props type inferred inline for simplicity
// export default function BusTimingPage({
//   params,
// }: {
//   params: { busNumber: string };
// }) {
//   const { busNumber } = params;

//   // Find matching bus timing
//   const busTiming = busTimings.find((bus) => bus.slug === busNumber);

//   if (!busTiming) {
//     notFound(); // Show 404 page if no match
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black text-white">
//       {/* Heading */}
//       <h1 className="text-4xl font-bold mb-6">{busTiming.heading}</h1>

//       {/* Timings Table */}
//       <div className="w-full max-w-2xl overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-700">
//           <thead>
//             <tr className="bg-gray-800">
//               <th className="p-3 text-left">Location</th>
//               <th className="p-3 text-left">Morning Time</th>
//               <th className="p-3 text-left">Afternoon Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {busTiming.locations.map((location, index) => (
//               <tr key={index} className="border-b border-gray-700">
//                 <td className="p-3">{location.name}</td>
//                 <td className="p-3">{location.morning}</td>
//                 <td className="p-3">{location.afternoon}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
