import React from "react";
// mui 5
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// react-router
import { useNavigate } from "react-router-dom";
// custom components
import CartItemCard from "./CartItemCard";
// custom context
import { useCart } from "../../context/CartContext";
// custom routes
import { CHECKOUT } from "../../utils/routes";

function FilledCart() {
  const { cart, onEmptyCart } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <Grid container spacing={3}>
        {cart.items.map((item) => (
          <Grid item xs={12} sm={4} md={3} key={item.id}>
            <CartItemCard pokemon={item} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          mt: 2,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">
          Subtotal: {`$${cart.subtotal.toFixed(2)}`}
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
        >
          <Button
            size="medium"
            variant="contained"
            color="secondary"
            sx={{
              minWidth: "150px",
              mb: { xs: 1, sm: 0 },
              mr: { xs: 0, sm: 4 },
            }}
            onClick={onEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            sx={{ minWidth: "150px" }}
            onClick={() => navigate(CHECKOUT)}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default FilledCart;
