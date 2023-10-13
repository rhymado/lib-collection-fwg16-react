import { createBrowserRouter } from "react-router-dom";

import Auth from "./pages/Auth";
import App from "./pages/App";
import SeeAll from "./pages/SeeAll";

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
  {
    path: "/see-all",
    element: <SeeAll />,
  },
]);

export default router;
