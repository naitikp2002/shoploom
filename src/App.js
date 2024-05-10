import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/categories", element: <Categories /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
export function App() {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </React.StrictMode>
  );
}
