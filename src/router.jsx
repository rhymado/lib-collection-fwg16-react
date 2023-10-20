import { createBrowserRouter } from "react-router-dom";

import Private from "./components/Private";

import pages from "./pages";

const { App, Auth, SeeAll, Calc } = pages;

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
    element: (
      <Private>
        <SeeAll />
      </Private>
    ),
  },
  {
    path: "/calculator",
    element: <Calc />,
  },
]);

export default router;
