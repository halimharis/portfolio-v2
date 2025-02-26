import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PageTransition = () => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          className="absolute top-0 left-0 w-full h-screen bg-red-600 z-50 origin-bottom"
          initial={{ y: "100%" }}
          animate={{
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          asdasd
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
