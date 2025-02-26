import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();

  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.scrollTo("top", {
      duration: 0.5,
    });
  }, [lenis]);

  return (
    <>
      <Navbar />
      <div key={location.pathname}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
