import { PATH } from "../constants";
import NavItem from "./NavItem";
import { motion, useScroll, useTransform } from "framer-motion";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -101]);

  return (
    <motion.div
      style={{ y }}
      className="fixed bg-transparent w-full top-0 z-50 flex items-center justify-center gap-5 border-b border-b-white sm:overflow-hidden font-onest max-md:hidden"
    >
      <ul className="hidden items-center text-sm font-medium uppercase sm:flex">
        {Object.entries(PATH).map(([key, value]) => (
          <NavItem key={key} href={value} label={key} />
        ))}
      </ul>
    </motion.div>
  );
}

export default Navbar;
