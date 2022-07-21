import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { POKE_API_IMG } from "../http/Http";

function Pokemon({ pokemon }) {
  return (
    <Box
      width="10rem"
      height="15rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      bg="purple"
    >
      <Box width="100%" height="80%">
        <Image
          src={
            "https://img.pokemondb.net/artwork/large/" + pokemon.name + ".jpg"
          }
          width="100%"
          height="100%"
        />
      </Box>
      <Button height="20%">{pokemon.name}</Button>
    </Box>
  );
}

export default Pokemon;
