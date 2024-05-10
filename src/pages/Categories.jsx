import React from "react";
import ProductCard from "../components/ProductCard";
import "../index.css";
import Selection from "../components/Selection";
import axios from "axios";
import { useState, useEffect } from "react";
import Skeleton from "../components/Skeleton";
import { Box, Flex } from "@chakra-ui/react";
// import { Skeleton } from "../components/Skeleton";

const Categories = () => {
  const [categories, setCategories] = useState(null);
  const [CategoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);


  useEffect(() => {
    const fetchListOfCategories = async () => {
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

    fetchListOfCategories();
  }, []); // Empty dependency array means this effect runs once after initial render

    const fetchCategoryData = async (cat) => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${cat}`
        );
        console.log(response.data.products);
        setCategoryData(response.data.products);
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    // console.log(CategoryData);
  if (loading)
    return (
      <div>
        <Skeleton />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  // if (!categories) return <></>;

  return (
    <div className="bg-color categories">
      <Selection
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        fetchCategoryData={fetchCategoryData}
      />
      <Flex sx={{}}>
      {CategoryData && CategoryData.map((data) => (
        <ProductCard data={data}/>
      ))}
      </Flex>
      {/* <Skeleton/> */}
    </div>
  );
};

export default Categories;
