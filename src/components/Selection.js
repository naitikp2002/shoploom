import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
const Selection = ({ categories }) => {
  return (
    <Box m={5}>
      <Menu>
        <MenuButton
          minW={"200px"}
          colorScheme="blue"
          as={Button}
          rightIcon={<FaChevronDown />}
        >
          Categories
        </MenuButton>
        <MenuList
        sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "4px",
            padding:3
          }}>
          {categories.map((item) => (
            <MenuItem>{item}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Selection;