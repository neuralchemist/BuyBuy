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

function Product({ product, onAddToCart }) {

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardHeader title={product.name} subheader={`$${product.price}`} />
      <CardMedia
        component="img"
        // sx={{ pt: "56.25%", border: '1px solid red' }}
        width='350px'
        height='200px'
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>

      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton
          aria-label="add to cart"
          test-id='add to cart'
          onClick={() => onAddToCart(product)}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;
