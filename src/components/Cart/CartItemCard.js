import React from "react";
// mui5
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
// custom context
import { useCart } from "../../context/CartContext";

// custom style
const cartItemStyle = {
  display: "flex",
  maxWidth: "100%",
  transform: "scale(1, 1)",
  transition: "transform .5s ease",
  ":hover": {
    transform: "scale(1.05,1.05)",
  },
};

function CartItemCard({ pokemon }) {
  const {
    onRemoveItemFromCart,
    onIncrementItemQuantity,
    onDecrementItemQuantity,
  } = useCart();
  return (
    <Card  sx={cartItemStyle}>
      <CardMedia
        sx={{ objectFit: "none", width: "120px", backgroundColor: "grey.100" }}
        component="img"
        image={pokemon.image}
        alt={pokemon.name}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        <CardHeader title={pokemon.name} subheader={`$${pokemon.price}`} />
        <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <IconButton
              aria-label="decrement quantity"
              test-id="decrement quantity"
              onClick={() => onDecrementItemQuantity(pokemon)}
            >
              <RemoveIcon />
            </IconButton>
            <Typography>{pokemon.quantity}</Typography>
            <IconButton
              aria-label="increment quantity"
              test-id="increment quantity"
              onClick={() => onIncrementItemQuantity(pokemon)}
            >
              <AddIcon />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => onRemoveItemFromCart(pokemon)}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default CartItemCard;
