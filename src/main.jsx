import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// import App from "./App.jsx";
import "./index.css";
import router from "./router";
import { UserProvider } from "./contexts/userContext";
import { Provider as ReduxProvider } from "react-redux";
import reduxStore from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* props dikirimkan sebagai atribut untuk komponen react */}
    {/* <App title="Beginner Frontend" /> */}
    {/* <Auth /> */}
    <ReduxProvider store={reduxStore}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ReduxProvider>
  </React.StrictMode>
);
