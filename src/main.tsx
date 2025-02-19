import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import Layout from "./components/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<>about</>} />

        <Route
          element={
            <>
              asdasd {/* Ini akan selalu tampil */}
              <Outlet /> {/* Di sinilah komponen register/login akan muncul */}
            </>
          }
        >
          <Route path="login" element={<>login</>} />
          <Route path="register" element={<>register</>} />
        </Route>

        <Route path="concerts">
          <Route index element={<>concert</>} />
          <Route path=":city" element={<>city</>} />
          <Route path="trending" element={<>trending</>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
