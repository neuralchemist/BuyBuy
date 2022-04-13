import { useContext, createContext, useState } from "react";

const checkoutContext = createContext(null);

export function useCheckout() {
  return useContext(checkoutContext);
}

const STEPS = ["Shipping address", "Payment details"];

export function CheckoutProvider({ children }) {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleAddressSubmit = (data) => {
    setShippingData((prev) => ({ ...prev, ...data }));
    handleNext();
  };

  const value = {
    STEPS,
    activeStep,
    shippingData,
    handleBack,
    handleNext,
    handleAddressSubmit,
  };

  return (
    <checkoutContext.Provider value={value}>
      {children}
    </checkoutContext.Provider>
  );
}
