import * as React from "react";
import App from "./App";
import About from "./About/AllAbout";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login/Login";
import Attraction from "./Files/Attraction";
import AllContact from "./Contact/AllContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Contact",
    element: <AllContact />,
  },

  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "Attraction",
    element: <Attraction />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
