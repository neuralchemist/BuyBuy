// mui 5
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// custom components
import CustomStepper from "./CustomStepper";
import ResetStepper from "./ResetStepper";
// import NavigateStepper from "./NavigateStepper";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";
// custom hook
import { useCheckout } from "./context/CheckoutContext";

function Checkout() {
  const { activeStep, STEPS } = useCheckout();

  const FORM = activeStep === 0 ? <AddressForm /> : <PaymentForm />;

  return (
    <Container maxWidth="sm" component="main" sx={{ mt: 9 }}>
      <Paper elevation={2}>
        <Typography variant="h4" align="center">
          Checkout
        </Typography>
        <CustomStepper />

        {activeStep === STEPS.length ? (
          <>
            <Confirmation />
            <ResetStepper />
          </>
        ) : (
          <>{FORM}</>
        )}
      </Paper>
    </Container>
  );
}

export default Checkout;


