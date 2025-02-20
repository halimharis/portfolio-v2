import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import Layout from "./components/Layout.tsx";
import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from "./components/Error.tsx";
import { PATH } from "./constants.ts";
import Journey from "./components/Journey.tsx";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary FallbackComponent={FallbackRender}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PATH.JOURNEY} element={<Journey />} />

          <Route
            element={
              <>
                asdasd {/* Ini akan selalu tampil */}
                <Outlet />{" "}
                {/* Di sinilah komponen register/login akan muncul */}
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
  </ErrorBoundary>
);
