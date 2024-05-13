import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import { Box, Flex, chakra } from "@chakra-ui/react";
import Rating from "../components/Rating";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        console.log(selectedImage);
        setProduct(response.data);
        setSelectedImage(response.data.thumbnail);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <Skeleton />;
  }
  return (
    <Flex className="bg-color" padding={"20px"}>
      <Box paddingLeft={"20px"}>
        <img
          style={{
            width: "650px",
            height: "500px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
          src={selectedImage}
          alt={product.name}
        />
        <Flex width={100} height={100}>
          {product.images.map((img) => (
            <img
              key={img}
              onMouseEnter={() => setSelectedImage(img)}
              style={{
                margin: "20px 20px 0px 0px",
                border: "2px solid black",
                cursor: "pointer",
              }}
              src={img}
              alt={product.name}
            />
          ))}
        </Flex>
      </Box>
      <Box paddingLeft={"20px"}>
        <chakra.h1
          fontSize={"xx-large"}
          fontWeight={"bold"}
          marginBottom={"20px"}
        >
          {product.title}
        </chakra.h1>
        <chakra.p fontSize={"large"} marginBottom={"20px"}>
          {product.description}
        </chakra.p>
        <Flex gap={"8px"} alignItems={"end"}>
          <chakra.p color={"red"} fontWeight={"bold"} fontSize={"x-large"}>
            -{product.discountPercentage}%
          </chakra.p>
          <chakra.h2 fontWeight={"bold"} fontSize={"28px"}>
            {" "}
            ${product.price}
          </chakra.h2>
        </Flex>
        <chakra.hr marginTop={"10px"} border={"1px solid black"} />
        <Rating value={product.rating}/>
      </Box>
    </Flex>
  );
};

export default ProductDetails;
