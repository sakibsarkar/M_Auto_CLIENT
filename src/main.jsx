import "./index.css";
import BrandProduct from "./BrandProduct/BrandProduct";
import Home from "./Home/Home";
import HomeLayout from "./HomeLayout/HomeLayout";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/cars/:brand",
        element: <BrandProduct></BrandProduct>,
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
