import { useState } from "react";
// mui 5
import Box from "@mui/material/Box";
// stripe
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// custom components
import NavigateStepper from "./NavigateStepper";
// custom hook
import { useCart } from "../../context/CartContext";
import { useCheckout } from "./context/CheckoutContext";
import { Typography } from "@mui/material";

function StripePayment() {
  const [paymentError, setPaymentError] = useState("");

  // custom context
  const { cart, onSuccessfulCheckout } = useCart();
  const { shippingData, handleNext } = useCheckout();
  // stripe hook
  const stripe = useStripe();
  const elements = useElements();

  // handle payment function
  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // ------------ create payment method --------
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("paymentMethod ERROR: ", error.message);
      setPaymentError(error.message);
      return;
    }

    const billingInfo = {
      line_items: cart.items,
      customer: {
        firstname: shippingData.firstName,
        lastname: shippingData.lastName,
        email: shippingData.email,
      },
      shipping: {
        name: "Primary",
        street: shippingData.address1,
        town_city: shippingData.city,
        county_state: shippingData.shippingSubdivision,
        country: shippingData.Country,
        postal_zip_code: shippingData.zip,
      },
      fulfillment: {
        shipping_method: shippingData.shippingOption,
      },
      payment: {
        gateway: "stripe",
        stripe: {
          payment_method_id: paymentMethod.id,
        },
      },
    };

    // capture the order
    onSuccessfulCheckout(billingInfo);
    // move to confirmation page
    handleNext();
  };

  return (
    <Box component="form" onSubmit={handlePayment}>
      <CardElement />
      {paymentError && (
        <Typography mt={2} variant="subtitle1" color="error">
          {paymentError}
        </Typography>
      )}
      <NavigateStepper disabled={!stripe} />
    </Box>
  );
}

export default StripePayment;
