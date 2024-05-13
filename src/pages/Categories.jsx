import React from "react";
import ProductCard from "../components/ProductCard";
import "../index.css";
import Selection from "../components/Selection";
import axios from "axios";
import { useState, useEffect } from "react";
import Skeleton from "../components/Skeleton";
import { Box, Flex,chakra } from "@chakra-ui/react";

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
  // if (!selectedCategory) return <>Hello</>;

  return (
    <div className="bg-color categories">
      <Selection
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        fetchCategoryData={fetchCategoryData}
      />
      <Flex sx={{}}>
      {!selectedCategory && <chakra.h2 fontSize={"x-large"} fontWeight={"bold"}>Select the Category!</chakra.h2>}
      {CategoryData && CategoryData.map((data) => (
        <ProductCard key={data.id} data={data}/>
      ))}
      </Flex>
      {/* <Skeleton/> */}
    </div>
  );
};

export default Categories;
