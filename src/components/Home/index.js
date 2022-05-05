import React from "react";
// mui 5
import Container from "@mui/material/Container";
// custom components

import FeaturedProduct from "../FeaturedProduct";
import Toast from "../Toast";
import Pokemons from "../Pokemons";
import Promotions from "../Promotions";

function Home() {
  return (
    <Container maxWidth="lg" component="main" sx={{ mt: 9 }}>
      <FeaturedProduct />
      <Promotions />
      <Pokemons />
      <Toast />
    </Container>
  );
}

export default Home;
