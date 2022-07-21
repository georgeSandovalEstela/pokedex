import { Box, Button } from "@chakra-ui/react";
import React from "react";

function NavBar() {
  return (
    <Box
      as="nav"
      w="100%"
      p="16px"
      bg="#E36F4F"
      display="flex"
      justifyContent="space-around"
      //   borderRadius="6px"
    >
      <Button bg="transparent" _hover="">
        Pokemons
      </Button>
      <Button bg="transparent" _hover="">
        Developer
      </Button>
    </Box>
  );
}

export default NavBar;
