import React from 'react'
// react-router
import { Routes, Route } from "react-router-dom";
// custom components
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
// custom context
import { CartProvider } from "./context/CartContext";
// custom routes
import { CART, CHECKOUT, HOME } from "./utils/routes";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={CART} element={<Cart />} />
          <Route path={CHECKOUT} element={<CheckoutForm />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
