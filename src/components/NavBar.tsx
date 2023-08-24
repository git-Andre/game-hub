import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch.tsx";
import { SearchInput } from "./SearchInput.tsx";

interface Props {
  onSearch: ( searchText: string ) => void;
}

export const NavBar = ( { onSearch }: Props ) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px'/>
      <Text>Hallo Rolimaus</Text>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch/>
    </HStack>
  );
};
