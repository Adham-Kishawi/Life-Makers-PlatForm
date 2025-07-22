import * as React from "react";
import App from "./App"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Login from "./Login/Login";
import Attraction from "./Files/Attraction";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "login",
    element: (
        <Login></Login>
    ),
  },
 {
  path: "Attraction",
  element: <Attraction />
}

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
