import React from 'react'
// mui 5
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// yup
import { object, string } from "yup";
// react-hook-form
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// custom components
import NavigateStepper from "./NavigateStepper";
import CustomTextField from "../CustomFormFields/CustomTextField";
import CustomSelectField from "../CustomFormFields/CustomSelectField";
// custom hook
import { useCheckout } from "./context/CheckoutContext";
// custom utils
import {
  shippingCountries,
  shippingSubdivisions,
  shippingOptions,
  isEmptyObj,
} from "./utils";

const schema = object({
  firstName: string().max(20, "too long").required("Required"),
  lastName: string().max(20, "too long").required("Required"),
  address1: string().max(40, "too long").required("Required"),
  email: string().required("Required").email("invalid email format"),
  zip: string().max(20, "too long").required("Required"),
  city: string().max(20, "too long").required("Required"),
  shippingCountry: string().required("Required"),
  shippingSubdivision: string().required("Required"),
  shippingOption: string().required("Required"),
});

const initialData = {
  firstName: "",
  lastName: "",
  address1: "",
  email: "",
  zip: "",
  city: "",
  shippingCountry: "",
  shippingSubdivision: "",
  shippingOption: "",
};

function AddressForm() {
  const { shippingData, handleAddressSubmit } = useCheckout();
  const defaultValues = isEmptyObj(shippingData) ? initialData : shippingData;

  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });

  return (
    <Box>
      <Typography variant="h6">Shipping Address</Typography>
      {/* react-hook-form */}
      <FormProvider {...methods}>
        <Box
          component="form"
          autoComplete="off"
          noValidate
          onSubmit={methods.handleSubmit(handleAddressSubmit)}
          sx={{
            mt: 1,
          }}
        >
          <Grid container spacing={3}>
            <CustomTextField label="First Name" name="firstName" required />
            <CustomTextField label="Last Name" name="lastName" required />
            <CustomTextField type="email" label="Email" name="email" required />
            <CustomTextField label="Address" name="address1" required />
            <CustomTextField type="text" label="City" name="city" required />
            <CustomTextField label="ZIP / Postal code" name="zip" required />
            <CustomSelectField
              options={shippingCountries}
              label="Shipping Countries"
              name="shippingCountry"
              required
            />
            <CustomSelectField
              options={shippingSubdivisions}
              label="Shipping Subdivisions"
              name="shippingSubdivision"
              required
            />
            <CustomSelectField
              options={shippingOptions}
              label="Shipping Options"
              name="shippingOption"
              required
            />
          </Grid>

          <NavigateStepper />
        </Box>
      </FormProvider>
    </Box>
  );
}

export default AddressForm;
