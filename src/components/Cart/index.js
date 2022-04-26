import React from "react";
// mui 5
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// custom components
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import PokemonRecommendation from "../PokemonRecommendation";
import Toast from "../Toast";
// custom context
import { useCart } from "../../context/CartContext";

function Cart() {
  const { cart } = useCart();
  const isEmpty = cart.items.length === 0;

  return (
    <Container maxWidth="lg" component="main" sx={{ mt: 9 }}>
      <Typography variant="h3" mb={2}>
        Your shopping cart
      </Typography>
      {isEmpty ? (
        <EmptyCart />
      ) : (
        <>
          <FilledCart />
          <PokemonRecommendation />
          <Toast />
        </>
      )}
    </Container>
  );
}

export default Cart;
