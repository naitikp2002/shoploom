import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Navbar />
      {/* <h1>Hello</h1> */}
      <Home />
    </div>
    </ChakraProvider>
  );
}

