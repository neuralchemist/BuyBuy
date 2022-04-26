import React from "react";
// mui 5
import Grid from "@mui/material/Grid";
// custom components
import PokemonCard from "./PokemonCard";
import ErrorMessage from "../CommonComponents/ErrorMessage";
// custom hooks
import useGetAllPokemon from "./hooks/useGetAllPokemon";

function Pokemons() {
  // custom hook
  const { data, isLoading, isError, isSuccess } = useGetAllPokemon();

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
    <Grid container justifyContent="center" spacing={4}>
      {data.map((pokemon) => (
        <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Pokemons;
