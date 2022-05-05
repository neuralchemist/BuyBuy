import React from "react";
// mui 5
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// custom components
import ErrorMessage from "../CommonComponents/ErrorMessage";
// custom hooks
import useGetFeaturedProduct from "./hooks/useGetFeaturedProduct";
import { BannerContainer } from "./styles";

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
    <BannerContainer image={featuredProductState.data.image}>
      <Box
        sx={{
          p: { xs: 3, md: 6 },
        }}
      >
        <Typography variant="h3" gutterBottom>
          {featuredProductState.data.product}
        </Typography>
        <Typography variant="h5">
          {featuredProductState.data.description}
        </Typography>
      </Box>
    </BannerContainer>
  );
}

export default FeaturedProduct;
