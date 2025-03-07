import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from "./components/ErrorPage/Error.tsx";
import { PATHS } from "./constants.ts";
import ContactPage from "./components/ContactPage/ContactPage.tsx";
import WorksPage from "./components/WorkPage/WorksPage.tsx";
import HomePage from "./components/HomePage/HomePage.tsx";
import ReactLenis from "lenis/react";
import TesterPage from "./components/TesterPage.tsx";
import { WorkDetailPage } from "./components/WorkPage/WorkDetailPage.tsx";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary FallbackComponent={FallbackRender}>
    <BrowserRouter>
      <ReactLenis
        root
        options={{
          anchors: true,
          touchMultiplier: 0,
        }}
      >
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={PATHS.WORKS.index}>
              <Route index element={<WorksPage />} />
              <Route path={PATHS.WORKS.workId} element={<WorkDetailPage />} />
            </Route>
            <Route path={PATHS.CONTACT.index} element={<ContactPage />} />
            <Route path="testerPage" element={<TesterPage />} />
          </Route>
        </Routes>
      </ReactLenis>
    </BrowserRouter>
  </ErrorBoundary>
);
