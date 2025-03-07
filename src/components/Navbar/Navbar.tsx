import { useLocation } from "react-router-dom";
import { PATHS } from "../../constants";
import NavItem from "./NavItem";
import { motion, useScroll, useTransform } from "framer-motion";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -101]);

  const { pathname } = useLocation();

  const isWhite = pathname === PATHS.WORKS.index;

  console.log(isWhite, pathname, PATHS.WORKS.index);

  return (
    <motion.div
      style={{ y }}
      className={`fixed bg-transparent w-full top-0 z-50 flex items-center justify-center gap-5 border-b ${isWhite ? "border-b-black" : "border-b-white"} sm:overflow-hidden font-onest`}
    >
      <ul className=" items-center text-sm font-medium uppercase flex">
        {Object.entries(PATHS).map(([key, value]) => (
          <NavItem key={key} href={value.index} label={key} isWhite={isWhite} />
        ))}
      </ul>
    </motion.div>
  );
}

export default Navbar;
