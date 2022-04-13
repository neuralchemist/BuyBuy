// mui 5
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// custom components
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
// custom context
import { useCart } from "../../context/CartContext";

function Cart() {
  const { cart } = useCart();
  const isEmpty = cart.items.length === 0;
  console.log("%cCart Rendered", "color: pink");

  return (
    <Container maxWidth="lg" component="main" sx={{ mt: 9 }}>
      <Typography variant="h3" mb={2}>
        Your shopping cart
      </Typography>
      {isEmpty ? (
        <EmptyCart />
      ) : (
        <FilledCart  />
      )}
    </Container>
  );
}

export default Cart;
