// mui 5
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// custom hook
import { useCheckout } from "./context/CheckoutContext";

function CustomStepper() {
  const { activeStep, STEPS } = useCheckout();
  return (
    <Stepper activeStep={activeStep}>
      {STEPS.map((step) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default CustomStepper;
