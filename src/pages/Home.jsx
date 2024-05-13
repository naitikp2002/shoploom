import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../index.css"
import axios from "axios";
import Skeleton from "../components/Skeleton";
import {SearchInput} from "../components/SearchInput";
const Home = () => {
  const [Products, setProducts]=useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search,setSearch]=useState("");
  const [filteredProducts,setFilteredProducts] = useState(null)
  const handleSearch = async (e) => {
    // e.preventDefault();
    setFilteredProducts(Products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    ))
  }
  console.log(filteredProducts);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products"
        );
        console.log(response.data.products);
        setProducts(response.data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  if (loading)
    return (
      <div>
        <Skeleton />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  // if (!categories) return <></>;
  return (
    <div className="bg-color" style={{padding:"20px"}}>
      <SearchInput handleSearch={handleSearch} setSearch={setSearch}/>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gridGap: "20px",
        }}
      >
        {search.trim()!== "" && filteredProducts && filteredProducts.map((data) => (
          <ProductCard data={data} />
        ))}
        {search.trim() === "" && Products && Products.map((data) => (
          <ProductCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
