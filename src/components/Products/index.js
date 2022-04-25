// mui 5
import Grid from "@mui/material/Grid";
// custom components
import Product from "./Product";
import ErrorMessage from "../CommonComponents/ErrorMessage";
// custom hooks
import useGetAllProducts from "./hooks/useGetAllProducts";

function Products() {
  // custom hook
  const all_products_state = useGetAllProducts();

  // wait for all current issues to load
  if (all_products_state.isLoading) {
    return <ErrorMessage msg="Loading products..." />;
  }
  // show error
  if (all_products_state.isError) {
    return <ErrorMessage msg="Sorry could not load products" />;
  }

  // empty collection message
  if (all_products_state.isSuccess && all_products_state.data.length === 0) {
    return <ErrorMessage msg="No products in collection" />;
  }

  return (
    <Grid container justifyContent="center" spacing={4}>
      {all_products_state.data.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
