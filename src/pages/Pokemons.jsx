import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Pokemon from "../components/Pokemon";
import { getPokemonsByPage } from "../http/api";

function Pokemons() {
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const changePage = (number) => {};
  useEffect(() => {
    getPokemonsByPage(page, setPokemons);
  }, [page]);

  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr 1fr;
  // grid-gap: 1.2rem;
  return (
    <Box
      paddingTop="2rem"
      bg="#EFCE49"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box bg="#EFCE49">
        <Button>{"<-"}</Button>
        <Button>{page}</Button>
        <Button>{"->"}</Button>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        gridGap="7rem"
        bg="purple"
        justifyContent="center"
      >
        {pokemons.map((pok) => (
          <Pokemon key={pok.name} pokemon={pok} />
        ))}
      </Box>
    </Box>
  );
}

export default Pokemons;
