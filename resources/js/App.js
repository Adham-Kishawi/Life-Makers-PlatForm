import Home from './Home/Home.jsx'
import About from "./About/AllAbout.jsx";
import Login from "./Login/Login.jsx";
import Attraction from "./Files/Attraction.jsx";
import AllContact from "./Contact/AllContact.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      element: <Login />,
    },
    {
      path: "Attraction",
      element: <Attraction />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
