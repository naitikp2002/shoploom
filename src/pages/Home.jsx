import React from "react";
import ProductCard from "../components/ProductCard";
import "../index.css"
const Home = () => {
  return (
    <div className="bg-color" style={{padding:"20px"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
