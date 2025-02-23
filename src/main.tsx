import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from "./components/ErrorPage/Error.tsx";
import { PATH } from "./constants.ts";
import ContactPage from "./components/ContactPage/ContactPage.tsx";
import WorksPage from "./components/WorkPage/WorksPage.tsx";
import HomePage from "./components/HomePage/HomePage.tsx";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary FallbackComponent={FallbackRender}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={PATH.WORKS} element={<WorksPage />} />
          <Route path={PATH.CONTACT} element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);
