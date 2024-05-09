import React from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div style={{padding:"20px"}}>
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
