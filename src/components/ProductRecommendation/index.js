import React from "react";
// mui 5
import Box from "@mui/material/Box";
import { styled, Typography } from "@mui/material";
// custom components
import Product from "../Products/Product";
// dummy data
import { products } from "../DummyData/products";

// custom style
const MarqueeContainer = styled(Box)({
  height: "450px",
  width: "100%",
  overflowX: "hidden",
});

const Marquee = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  width: "150%",
  height: "100%",
  animation: "scroll 20s linear infinite",
  // hover
  ":hover": {
    animationPlayState: "paused",
  },
  // keyframe

  "@keyframes scroll": {
    from: {
      transform: "translateX(10%)",
    },
    to: {
      transform: "translateX(-100%)",
    },
  },
});

function ProductRecommendation() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        You may also like
      </Typography>

      <MarqueeContainer>
        <Marquee>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Marquee>
      </MarqueeContainer>
    </Box>
  );
}

export default ProductRecommendation;
