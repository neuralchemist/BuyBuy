import React from "react";
// mui 5
import Typography from "@mui/material/Typography";
// custom style
import { PokemonContent } from "./style";

function PokemonAbilities({ abilities }) {
  return (
    <PokemonContent>
      <Typography color="teal" sx={{ my: 1 }}>
        Abilities
      </Typography>
      <Typography color="whitesmoke">{abilities.join(" / ")}</Typography>
    </PokemonContent>
  );
}

export default PokemonAbilities;
