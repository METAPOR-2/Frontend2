import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LicenseRegister from "./pages/license_register";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/license-register" element={<LicenseRegister />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
