import { Image } from "@chakra-ui/react";
import React from "react";
// import Image from '@chakra-ui';

import { Box, Flex } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ data }) => {
  const navigate= useNavigate();
  const {
    title,
    price,
    thumbnail
  } = data;
  return (
    <div>
      <Box
        // mx={5}
        onClick={()=> navigate(`${data.id}`)}
        cursor={"pointer"}
        maxW="xs"
        mx={5}
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        shadow="lg"
        rounded="lg"
      >
        <Box px={4} py={2}>
          <chakra.h1
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
            fontSize="xl"
            textTransform="uppercase"
          >
            {title}
          </chakra.h1>
          {/* <chakra.p
            mt={1}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            {description}
          </chakra.p> */}
        </Box>

        <Image
          h={48}
          w="full"
          fit="cover"
          mt={2}
          src={thumbnail}
          alt="image"
        />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          bg="gray.900"
          roundedBottom="lg"
        >
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            ${price}
          </chakra.h1>
          {/* <Text
            as="span"
            float={"left"}
            // ml={2}
            fontSize="sm"
            color="white"
            textDecoration="line-through"
          >
            ₹17,500
          </Text> */}
          <chakra.button
            sx={{float: 'right'}}
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "gray.200",
            }}
            _focus={{
              bg: "gray.400",
            }}
          >
            Add to cart
          </chakra.button>
        </Flex>
      </Box>

      {/* <Card
      mb={5}
        sx={{margin:"20px", width:"700px"}}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={thumbnail}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>

            <Text py="2" noOfLines={4}>
              {description}
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Add to Cart
            </Button>
          </CardFooter>
        </Stack>
      </Card> */}
    </div>
  );
};

export default ProductCard;
