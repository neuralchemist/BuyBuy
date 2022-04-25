import React from "react";
// mui 5
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// react-hook-form
import { useFormContext } from "react-hook-form";

function CustomTextField({ type = "text", label, name, required }) {
  // react-hook-form
  const {
    register,
    formState: { errors },
  } = useFormContext();
  // mui config
  const muiConfig = {
    variant: "standard",
    margin: "normal",
    fullWidth: true,
  };

  return (
    <Grid item xs={12} sm={6}>
      <TextField
        type={type}
        label={label}
        required={required}
        error={!!errors[name]}
        // helperText={errors[name]?.message ??  ""}
        helperText={errors[name] ? errors[name].message : ""}
        {...register(name)}
        {...muiConfig}
      />
    </Grid>
  );
}

export default CustomTextField;
