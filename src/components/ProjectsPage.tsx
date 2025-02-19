// // components/Projects.tsx
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";
// import { PROJECTS } from "../projects";

// export default function Projects() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section ref={ref} className="py-20 container mx-auto px-4">
//       <motion.h2
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//         className="text-3xl font-bold mb-8 text-center"
//       >
//         Featured Projects
//       </motion.h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {PROJECTS.map((project, index) => (
//           <motion.div
//             key={project.id}
//             initial={{ opacity: 0, y: 50 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: index * 0.1 }}
//             className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
//           >
//             {/* Konten project sama dengan sebelumnya */}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
