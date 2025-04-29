import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
    </Routes>
  </BrowserRouter>
);
