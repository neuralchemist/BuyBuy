// mui5
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

// react-hook-form
import { useFormContext, Controller } from "react-hook-form";

function SimpleSelect({ field, options, label, name, required }) {
  // react-hook-form
  const {
    formState: { errors },
  } = useFormContext();

  // mui config
  const muiConfig = {
    variant: "standard",
    margin: "normal",
    fullWidth: true,
  };

  return (
    <FormControl {...muiConfig} error={!!errors[name]} required={required}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select  labelId="select-label" {...field}>
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errors[name]?.message ?? ""}</FormHelperText>
    </FormControl>
  );
}

function CustomSelectField({ options, label, name, required }) {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <SimpleSelect
            field={field}
            options={options}
            label={label}
            name={name}
            required={required}
          />
        )}
      />
    </Grid>
  );
}

export default CustomSelectField;
