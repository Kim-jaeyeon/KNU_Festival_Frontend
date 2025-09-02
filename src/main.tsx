import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import FAQ from "./pages/FAQ.tsx";
import Guestbook from "./pages/Guestbook.tsx";
import "@fontsource/hahmlet/700.css"; // Bold
import "./index.css";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 기본 진입은 FAQ로 보냄 */}
        <Route path="/" element={<Navigate to="/faq" replace />} />
        <Route path="/home" element={<App />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/guestbook" element={<Guestbook />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
