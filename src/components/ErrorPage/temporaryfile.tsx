// // Home.tsx
// import React, { useState, useEffect } from "react";
// import CctvPlayer from "./CctvPlayer"; // Sesuaikan path

// // Interface untuk data CCTV
// interface CctvAttributes {
//   "stream-url": string;
//   name: string;
// }

// interface CctvData {
//   type: string;
//   id: string;
//   attributes: CctvAttributes;
// }

// // Interface untuk response API
// interface ApiResponse {
//   data: CctvData[];
//   // meta: any; // Jika ada data meta, definisikan typenya
//   // links: any; // Jika ada data links, definisikan typenya
// }

// const Home: React.FC = () => {
//   const [cctvData, setCctvData] = useState<CctvData[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(
//           "https://mam.jogjaprov.go.id/api/v1/cctvapplications/c3d1b947-1e56-4256-b0fa-c513815d9fce/cctvs?filter%5Bis_featured%5D=true&page%5Bnumber%5D=1&page%5Bsize%5D=6"
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data: ApiResponse = await response.json();
//         setCctvData(data.data);
//       } catch (error: any) {
//         setError(error.message); //  error message
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <section className="bg-gray-100 py-20 px-4 font-extrabold font-poppins">
//       <div className="container mx-auto text-center">
//         <h1 className="text-4xl md:text-6xl text-gray-800 mb-4 uppercase tracking-tighter">
//           Build your portfolio your way
//         </h1>
//         {loading && <p>Loading CCTV data...</p>} {/* Tampilkan pesan loading */}
//         {error && <p>Error: {error}</p>} {/* Tampilkan pesan error */}
//         {/* {!loading && !error && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {cctvData.map((cctv) => (
//               <CctvPlayer
//                 key={cctv.id}
//                 streamUrl={cctv.attributes["stream-url"]}
//                 cctvName={cctv.attributes.name}
//               />
//             ))}
//           </div>
//         )} */}
//       </div>
//     </section>
//   );
// };

// export default Home;
