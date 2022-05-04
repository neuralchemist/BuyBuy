import React from "react";
// mui5
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// custom context
import { useCart } from "../../context/CartContext";
// custom components
import PokemonTypes from "./PokemonTypes";
import PokemonAbilities from "./PokemonAbilities";
// custom style
import { AddToCartButton, CardContainer, PokemonCardContent } from "./style";

function PokemonCard({ pokemon }) {
  // custom context
  const { onAddToCart } = useCart();
  return (
    <CardContainer>
      <CardHeader
        title={pokemon.name}
        subheader={
          <Typography color="whitesmoke">{`$${pokemon.price}`}</Typography>
        }
        sx={{ color: "goldenrod" }}
      />
      <CardMedia
        sx={{ objectFit: "none", height: "96px" }}
        component="img"
        image={pokemon.image}
        alt={pokemon.name}
      />
      <PokemonCardContent>
        <PokemonTypes types={pokemon.types} />
        <PokemonAbilities abilities={pokemon.abilities} />
      </PokemonCardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "#232323",
        }}
      >
        <AddToCartButton
          aria-label="add to cart"
          test-id="add to cart"
          onClick={() => onAddToCart(pokemon)}
        >
          <AddShoppingCartIcon />
        </AddToCartButton>
      </CardActions>
    </CardContainer>
  );
}

export default PokemonCard;
