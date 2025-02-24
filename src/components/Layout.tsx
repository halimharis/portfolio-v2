import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ReactLenis from "lenis/react";
import Footer from "./Footer/Footer";
import { PageTransition } from "./PageTransition";

function Layout() {
  const { pathname } = useLocation();

  return (
    <ReactLenis
      options={{
        anchors: true,
        touchMultiplier: 0,
      }}
      root
    >
      <PageTransition pagekey={pathname} />
      <div className="flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default Layout;
