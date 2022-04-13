// mui 5
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// custom hook
import { useCheckout } from "./context/CheckoutContext";

function NavigateStepper({ disabled = false }) {
  const { activeStep, handleBack, STEPS } = useCheckout();
  return (
    <Box mb={2}>
      <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={disabled}
        >
          {activeStep === STEPS.length - 1 ? "Pay" : "Next"}
        </Button>
      </Box>
    </Box>
  );
}

export default NavigateStepper;
