// src/components/site/Hero.tsx

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ReactLenis from "lenis/react";
import Footer from "./Footer/Footer";
import { PageTransition } from "./PageTransition";

function Layout() {
  const { pathname } = useLocation();

  console.log("haha", pathname);

  return (
    <ReactLenis
      options={{
        anchors: true,
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
