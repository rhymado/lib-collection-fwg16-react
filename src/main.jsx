import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// import App from "./App.jsx";
import "./index.css";
import router from "./router";
import { UserProvider } from "./contexts/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* props dikirimkan sebagai atribut untuk komponen react */}
    {/* <App title="Beginner Frontend" /> */}
    {/* <Auth /> */}
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
