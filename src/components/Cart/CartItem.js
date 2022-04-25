import React from "react";
// mui5
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
// custom context
import { useCart } from "../../context/CartContext";

function CartItem({ item }) {
  const {
    onRemoveItemFromCart,
    onIncrementItemQuantity,
    onDecrementItemQuantity,
  } = useCart();
  return (
    <Card>
      <CardMedia
        component="img"
        height="260px"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.price}</Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button size="small" onClick={() => onDecrementItemQuantity(item)}>
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button size="small" onClick={() => onIncrementItemQuantity(item)}>
            +
          </Button>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onRemoveItemFromCart(item)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;
