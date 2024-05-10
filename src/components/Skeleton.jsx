import React from "react";
import { Box,SkeletonCircle,SkeletonText } from "@chakra-ui/react";

const Skeleton = () => {
  return (
    <div className="bg-color" style={{padding:"20px"}}>
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" skewX={300}/>
      </Box>
    </div>
  );
};

export default Skeleton;
