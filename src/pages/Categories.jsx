import React from "react";
import ProductCard from "../components/ProductCard";
import "../index.css";
import Selection from "../components/Selection";
import axios from "axios";
import { useState, useEffect } from "react";
import Skeleton from "../components/Skeleton";
// import { Skeleton } from "../components/Skeleton";

const Categories = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after initial render

  if (loading) return <div><Skeleton/></div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!categories) return <></>;

  return (
    <div className="bg-color categories">
      <Selection
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductCard />
      {/* <Skeleton/> */}
    </div>
  );
};

export default Categories;
