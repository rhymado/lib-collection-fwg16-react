import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// import App from "./App.jsx";
import "./index.css";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* props dikirimkan sebagai atribut untuk komponen react */}
    {/* <App title="Beginner Frontend" /> */}
    {/* <Auth /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
