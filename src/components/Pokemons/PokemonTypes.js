import React from "react";
// mui 5
import Box from "@mui/system/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { colors } from "@mui/material";
// custom style
import { PokemonContent } from "./style";

const ColorMap = {
  grass: colors.lightGreen[400],
  poison: colors.purple[400],
  water: colors.blue[800],
  flying: colors.blue[400],
  ice: colors.lightBlue[400],
  ground: colors.brown[600],
  fire: colors.orange[800],
  bug: colors.green[400],
  psychic: colors.pink[400],
};

function PokemonTypes({ types }) {
  return (
    <PokemonContent>
      <Typography color="teal" sx={{ mb: 1 }}>
        Types
      </Typography>
      <Box>
        {types.map((type) => (
          <Chip
            key={type}
            label={type}
            size="small"
            sx={{ mr: 1, backgroundColor: ColorMap[type] || colors.grey[400] }}
          />
        ))}
      </Box>
    </PokemonContent>
  );
}

export default PokemonTypes;
