// // CctvPlayer.tsx
// import React, { useEffect, useRef, useState } from "react";
// import videojs, { VideoJsPlayer } from "video.js";
// import "video.js/dist/video-js.css";
// import "@videojs/http-streaming";

// interface CctvPlayerProps {
//   streamUrl: string;
//   cctvName: string;
// }

// const CctvPlayer: React.FC<CctvPlayerProps> = ({ streamUrl, cctvName }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const playerRef = useRef<videojs.Player | null>(null);
//   const [isMounted, setIsMounted] = useState(false); // Flag untuk menandai apakah komponen sudah di-mount

//   useEffect(() => {
//     setIsMounted(true); // Set flag menjadi true saat komponen di-mount

//     return () => {
//       // Cleanup: Hancurkan player saat komponen di-unmount
//       if (playerRef.current) {
//         playerRef.current.dispose();
//         playerRef.current = null;
//       }
//       setIsMounted(false);
//     };
//   }, []); // Dependency array kosong: hanya dijalankan saat mount dan unmount

//   useEffect(() => {
//     // Inisialisasi Video.js hanya jika komponen sudah di-mount, videoRef ada, dan player belum diinisialisasi
//     if (isMounted && videoRef.current && !playerRef.current) {
//       const player = (playerRef.current = videojs(videoRef.current, {
//         controls: true,
//         autoplay: false,
//         preload: "auto",
//         sources: [
//           {
//             src: streamUrl,
//             type: "application/x-mpegURL",
//           },
//         ],
//         width: 640,
//         height: 360,
//       }));

//       console.log("kedua", streamUrl); // Sekarang harusnya muncul

//       player.on("error", (error: any) => {
//         console.error("Video.js Error:", error);
//       });

//       player.on("play", () => {
//         console.log(`Video ${cctvName} is playing`);
//       });
//     }
//   }, [isMounted, streamUrl, videoRef]); // Dependensi: isMounted, streamUrl, dan videoRef

//   return (
//     <div data-vjs-player>
//       <h2>{cctvName}</h2>
//       <video ref={videoRef} className="video-js vjs-default-skin" />
//     </div>
//   );
// };

// export default CctvPlayer;
