import React from "react";
// mui5
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// custom context
import { useCart } from "../../context/CartContext";

// custom style
const addToCartStyle = {
  transition: "transform .4s ease",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.2,1.2)",
    color: "darkgreen",
  },
};

const pokemonCardStyle = {
  maxWidth: "100%",
  minWidth: "200px",
  height: "300px",
  transform: "scale(1, 1)",
  transition: "transform .5s ease",
  ":hover": {
    transform: "scale(1.05,1.05)",
  },
};

function PokemonCard({ pokemon }) {
  // custom context
  const { onAddToCart } = useCart();
  return (
    <Card sx={pokemonCardStyle}>
      <CardHeader title={pokemon.name} subheader={`$${pokemon.price}`} />
      <CardMedia
        sx={{ objectFit: "none", height: "96px", backgroundColor: "grey.100" }}
        component="img"
        image={pokemon.image}
        alt={pokemon.name}
      />
      <CardContent sx={{ height: "60px" }}>
        <Typography variant="body2" color="text.secondary">
          {pokemon.description}
        </Typography>
      </CardContent>

      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton
          sx={addToCartStyle}
          aria-label="add to cart"
          test-id="add to cart"
          onClick={() => onAddToCart(pokemon)}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PokemonCard;
