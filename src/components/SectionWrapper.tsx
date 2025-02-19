import { motion } from "framer-motion";
import { ReactNode } from "react";

const SectionWrapper = ({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="py-20 px-4 md:px-8 lg:px-16"
    id={id}
  >
    {children}
  </motion.section>
);

export default SectionWrapper;
