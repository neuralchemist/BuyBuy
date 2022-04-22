// mui 5
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// custom components
import Product from "./Product";
// custom context
import { useCart } from "../../context/CartContext";

function Products() {
  const { products, onAddToCart } = useCart();

  return (
    <Container maxWidth="lg" component="main" sx={{ mt: 9 }}>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;
