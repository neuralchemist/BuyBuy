import React from "react";
// mui5
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// custom context
import { useCart } from "../../context/CartContext";

// custom style
const addToCartStyle = {
  transition: "transform .4s ease",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.2,1.2)",
    color: "darkgreen",
  },
};

const productCardStyle = {
  maxWidth: "100%",
  height: "420px",
  transform: "scale(1, 1)",
  transition: "transform .5s ease",
  ":hover": {
    transform: "scale(1.05,1.05)",
  },
};

function Product({ product }) {
  // custom context
  const { onAddToCart } = useCart();
  return (
    <Card sx={productCardStyle}>
      <CardHeader title={product.name} subheader={`$${product.price}`} />
      <CardMedia
        component="img"
        sx={{
          backgroundColor: "#ebebeb",
        }}
        width="100%"
        height="200px"
        image={product.image}
        alt={product.name}
      />
      <CardContent sx={{ height: "80px" }}>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>

      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton
          sx={addToCartStyle}
          aria-label="add to cart"
          test-id="add to cart"
          onClick={() => onAddToCart(product)}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;
