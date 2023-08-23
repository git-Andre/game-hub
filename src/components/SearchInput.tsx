import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />}/>
      <Input placeholder='Search games' borderRadius={20} variant='filled' marginX={10}/>
    </InputGroup>
  );
};
