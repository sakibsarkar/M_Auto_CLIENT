import "./index.css";
import AddProduct from "./AddProduct/AddProduct";
import AuthProvider from "./AuthProvider";
import BrandProduct from "./BrandProduct/BrandProduct";
import Details from "./Details/Details";
import Home from "./Home/Home";
import HomeLayout from "./HomeLayout/HomeLayout";
import LogIn from "./LogIn/LogIn.jsx";
import MyCart from "./MyCart/MyCart";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import React from "react";
import ReactDOM from "react-dom/client";
import SignIn from "./SignIn/SignIn";
import Update from "./Update/Update";
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
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/cars/details/:brand/:model",
        element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: "/cars/update/:brandName/:model",
        element: <PrivateRoute><Update></Update></PrivateRoute>
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>,
)
