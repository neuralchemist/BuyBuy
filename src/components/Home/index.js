import React from "react";
// mui 5
import Container from "@mui/material/Container";
// custom components
// import Products from "../Products";
import FeaturedProduct from "../FeaturedProduct";
import Toast from "../Toast";
import Pokemons from "../Pokemons";

function Home() {
  return (
    <Container maxWidth="lg" component="main" sx={{ mt: 9 }}>
      <FeaturedProduct />
      {/* <Products /> */}
      <Pokemons />
      <Toast />
    </Container>
  );
}

export default Home;
