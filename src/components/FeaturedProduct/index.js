import React from "react";
// mui 5
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// custom components
import ErrorMessage from "../CommonComponents/ErrorMessage";
// custom hooks
import useGetFeaturedProduct from "./hooks/useGetFeaturedProduct";

function FeaturedProduct() {
  // custom hook
  const featuredProductState = useGetFeaturedProduct();

  // wait for featured product to load
  if (featuredProductState.isLoading) {
    return <ErrorMessage msg="Loading featured product..." />;
  }
  // show error
  if (featuredProductState.isError) {
    return <ErrorMessage msg="Sorry could not load featured product" />;
  }

  // empty collection message
  if (
    featuredProductState.isSuccess &&
    featuredProductState.data.length === 0
  ) {
    return <ErrorMessage msg="No featured product in collection" />;
  }

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${featuredProductState.data.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={featuredProductState.data.image}
          alt={featuredProductState.data.imageText}
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {featuredProductState.data.product}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {featuredProductState.data.description}
            </Typography>
            <Button component={Link} to="#">
              {featuredProductState.data.buttonText}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default FeaturedProduct;
