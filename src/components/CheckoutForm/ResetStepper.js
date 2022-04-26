import React from "react";
// mui 5
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// react router
import { Link } from "react-router-dom";
// custom routes
import { HOME } from "../../utils/routes";

function ResetStepper() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        pt: 2,
      }}
    >
      <Button variant="outlined" component={Link} to={HOME}>
        Back to Shopping
      </Button>
    </Box>
  );
}

export default ResetStepper;
