export default function Home() {
  return (
    <div>
      <p>
        In this dynamic page, when you click any club button, the UI/UX for all club  remains the same. 
        We use a dynamic page system so that clicking on
      </p>
    </div>
  );
}

// import { notFound } from 'next/navigation';

// // Mock data for clubs (replace with actual data fetching logic)
// const clubsData = [
//   {
//     slug: 'coding',
//     clubName: 'Coding Club',
//     subheading: 'Innovate. Code. Build.',
//     image: '/images/coding-club.jpg',
//     description: 'Join us to learn and build amazing projects with the latest technologies.',
//     socialMedia: {
//       instagram: 'https://instagram.com/codingclub',
//       linkedin: 'https://linkedin.com/company/codingclub',
//       whatsapp: 'https://wa.me/1234567890',
//     },
//   },
//   {
//     slug: 'drama',
//     clubName: 'Drama Club',
//     subheading: 'Act. Perform. Inspire.',
//     image: '/images/drama-club.jpg',
//     description: 'Express yourself through the art of drama and theater.',
//     socialMedia: {
//       instagram: 'https://instagram.com/dramaclub',
//       linkedin: 'https://linkedin.com/company/dramaclub',
//       whatsapp: 'https://wa.me/1234567890',
//     },
//   },
//   // Add more clubs as needed
// ];

// export default function ClubDetailPage({ params }: { params: { slug: string } }) {
//   const { slug } = params;

//   // Find the club data based on the slug
//   const club = clubsData.find((club) => club.slug === slug);

//   // If club not found, return a 404 page
//   if (!club) {
//     notFound();
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black text-white">
//       {/* Heading */}
//       <h1 className="text-4xl font-bold mb-2">{club.clubName}</h1>

//       {/* Subheading */}
//       <h2 className="text-xl text-gray-400 mb-6">{club.subheading}</h2>

//       {/* Picture */}
//       <img
//         src={club.image}
//         alt={club.clubName}
//         className="w-full max-w-md rounded-lg mb-6"
//       />

//       {/* Description */}
//       <p className="text-lg text-center max-w-2xl mb-8">{club.description}</p>

//       {/* Social Media Icons */}
//       <div className="flex space-x-4">
//         <a href={club.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
//           <img src="/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
//         </a>
//         <a href={club.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
//           <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
//         </a>
//         <a href={club.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer">
//           <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
//         </a>
//       </div>
//     </div>
//   );
// }