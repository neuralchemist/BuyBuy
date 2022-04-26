import React from "react";
// mui 5
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
// custom context
import { useCart } from "../../context/CartContext";

function Toast() {
  // custom context
  const { open, handleClose } = useCart();
  return (
    <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
      <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
        "Added to cart"
      </Alert>
    </Snackbar>
  );
}

export default Toast;
