import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
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
    children: [{ path: "/home", element: <Home /> },{ path: "/categories", element: <Categories /> },{ path: "/cart", element: <Cart /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
