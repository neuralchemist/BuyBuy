import React from "react";
// mui 5
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
// custom components
import Review from "./Review";
// stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripePayment from "./StripePayment";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function PaymentForm() {
  return (
    <Box>
      {/* review */}
      <Review />
      <Divider />
      <Typography variant="h6" my={4}>
        Payment Method
      </Typography>

      {/* form */}
      <Elements stripe={stripePromise}>
        <StripePayment />
      </Elements>
    </Box>
  );
}

export default PaymentForm;
