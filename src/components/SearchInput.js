import React, { ReactElement, ReactNode } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const SearchInput = ({handleSearch,setSearch,search}) => {
    const handleChange = (e) => {
        setSearch(e.target.value);
      }
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <InputGroup
        borderRadius={5}
        size="sm"
        width={"700px"}
        marginY={10}
      >
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input value={search} type="text" placeholder="Search..." border="1px solid #949494" onChange={handleChange} />
        <InputRightAddon p={0} border="none">
          <Button
            size="sm"
            borderLeftRadius={0}
            borderRightRadius={3.3}
            border="1px solid #949494"
            onClick={handleSearch}
          >
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </div>
  );
};
