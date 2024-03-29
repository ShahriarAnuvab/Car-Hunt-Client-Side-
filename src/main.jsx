import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Home from "./Pages/Home/Home";
import AddProduct from "./Pages/Add Product/AddProduct";
import Cart from "./Pages/Cart/Cart";
import LogIn from "./Pages/Login/LogIn";
import Registration from "./Pages/Registration/Registration";
import ProductsAdded from "./Pages/Products Added/ProductsAdded";
import UpdateProduct from "./Pages/Update/UpdateProduct";
import AuthProvider from "./Auth Provider/AuthProvider";
import PrivateRoute from "./Private Route/PrivateRoute";
import ErrorPage from "./Pages/Error Page/ErrorPage";
import BrandCars from "./Pages/Home/Home Car/BrandCars";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/cars"),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/addedproduct",
        element: (
          <PrivateRoute>
            <ProductsAdded></ProductsAdded>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/cars"),
      },
      {
        path: "/updateproduct/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.id}`),
      },
      {
        path: `/brand/:brand`,
        element: (
          <PrivateRoute>
            <BrandCars></BrandCars>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/brand`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
