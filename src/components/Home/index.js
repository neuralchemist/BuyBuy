// mui 5
import Container from "@mui/material/Container";
// custom components
import Products from "../Products";
import FeaturedProduct from "../FeaturedProduct";
import Toast from "../Toast";

function Home() {


  return (
    <Container maxWidth="lg" component="main" sx={{ mt: 9 }}>
      <FeaturedProduct />
      <Products  />
      <Toast />
    </Container>
  );
}

export default Home;
