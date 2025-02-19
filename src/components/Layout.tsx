// src/components/site/Hero.tsx

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ReactLenis from "lenis/react";
import Footer from "./Footer";

function Layout() {
  return (
    <ReactLenis
      options={{
        anchors: true,
      }}
      root
    >
      <div className="flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default Layout;
