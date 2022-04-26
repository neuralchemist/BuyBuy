import React from "react";
// mui 5
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useCart } from "../../context/CartContext";

function Confirmation() {
  const { order } = useCart();

  return (
    <Box mt={2}>
      <Typography variant="h5">
        Thank you for your purchase, {order.customer.firstname}{" "}
        {order.customer.lastname}
      </Typography>
      <Divider />
      <Typography variant="subtitle2" mt={2}>
        Order ref: {order.order_ref}
      </Typography>
    </Box>
  );
}

export default Confirmation;
