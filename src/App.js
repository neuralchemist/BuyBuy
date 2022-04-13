// react-router
import { Routes, Route } from "react-router-dom";
// custom components
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
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
          <Route path={HOME} element={<Products />} />
          <Route path={CART} element={<Cart />} />
          <Route path={CHECKOUT} element={<CheckoutForm />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
