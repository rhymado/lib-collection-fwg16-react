import { createBrowserRouter } from "react-router-dom";

import Auth from "./pages/Auth";
import App from "./pages/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    // errorElement: "",
  },
  {
    path: "/app",
    element: <App title="Beginner Frontend" />,
  },
]);

export default router;
