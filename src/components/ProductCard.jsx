import { Image } from "@chakra-ui/react";
import React from "react";
// import Image from '@chakra-ui';
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Stack, Heading, Button, Text } from "@chakra-ui/react";
const ProductCard = ({ data }) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    thumbnail,
    images,
  } = data;
  return (
    <div>
      <Card
        sx={{margin:"20px", minW:"800px"}}
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

            <Text py="2">
              {description}
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default ProductCard;
