import React from "react";
// mui 5
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// custom components
import PokemonCard from "../Pokemons/PokemonCard";
import ErrorMessage from "../CommonComponents/ErrorMessage";
// custom hooks
import useGetAllPokemonRecommendation from "./hooks/useGetAllPokemonRecommendation";
// custom style
import { Marquee, MarqueeContainer } from "./style";

function PokemonRecommendation() {
  // custom hook
  const {
    data,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllPokemonRecommendation();

  // wait for all pokemons to load
  if (isLoading) {
    return <ErrorMessage msg="Loading pokemons..." />;
  }
  // show error
  if (isError) {
    return <ErrorMessage msg="Sorry could not load pokemons" />;
  }

  // empty collection message
  if (isSuccess && data.length === 0) {
    return <ErrorMessage msg="No pokemons in collection" />;
  }
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        You may also like
      </Typography>

      <MarqueeContainer>
        <Marquee>
          {data.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Marquee>
      </MarqueeContainer>
    </Box>
  );
}

export default PokemonRecommendation;
