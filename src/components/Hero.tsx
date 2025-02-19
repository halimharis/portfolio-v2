// src/components/site/Hero.tsx
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="py-20 bg-gray-100 text-center" // Sesuaikan styling
    >
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-medium tracking-tight text-transparent text-outline sm:text-6xl md:text-8xl uppercase font-oswald"
        >
          ABDUL HARIS HALIM
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-600 dark:text-gray-400"
        >
          This is a simple hero section.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default Hero;
