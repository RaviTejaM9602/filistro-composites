import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import SignUp from "./Components/SignUp";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Components/Footer";

const AppLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>  )
  }

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{
      path: "/",
      element: (
       <Home />
      ),
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "signup",
      element: <SignUp />,
    }]
  }
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
