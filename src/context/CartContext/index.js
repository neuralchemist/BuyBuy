import { useContext, createContext, useState } from "react";
import { products } from "./dummyData";

const cartContext = createContext(null);

export function useCart() {
  return useContext(cartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState({
    items: [],
    subtotal: 0,
    total_items: 0,
  });
  const [order, setOrder] = useState({});

  const onAddToCart = (product) => {
    // find product if already in cart
    const productInCart = cart.items.find((item) => item.id === product.id);

    if (productInCart) {
      // product already in cart, increment quantity
      onIncrementItemQuantity(productInCart);
    } else {
      // product not in cart, add to cart
      setCart((prev) => ({
        items: [...prev.items, { ...product, quantity: 1 }],
        subtotal: prev.subtotal + product.price,

        total_items: prev.total_items + 1,
      }));
    }

    console.log(`${product.id} is added to cart`);
  };

  const onEmptyCart = () => {
    setCart({
      items: [],
      subtotal: 0,
      total_items: 0,
    });
    console.log("cart emptied");
  };

  const onRemoveItemFromCart = (product) => {
    setCart((prev) => ({
      items: prev.items.filter((item) => item.id !== product.id),
      subtotal: prev.subtotal - product.price * product.quantity,
      total_items: prev.total_items - product.quantity,
    }));

    console.log(`${product.id} is removed from cart`);
  };

  const onIncrementItemQuantity = (product) => {
    setCart((prev) => ({
      items: prev.items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ),
      subtotal: prev.subtotal + product.price,
      total_items: prev.total_items + 1,
    }));

    console.log(`${product.id} is incremented in quantity`);
  };

  const onDecrementItemQuantity = (product) => {
    if (product.quantity > 1) {
      setCart((prev) => ({
        items: prev.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        subtotal: prev.subtotal - product.price,
        total_items: prev.total_items - 1,
      }));

      console.log(`${product.id} is decremented in quantity`);
    }
  };

  const onSuccessfulCheckout = (newOrder) => {
    setOrder({ ...newOrder, order_ref: `${newOrder.customer.firstname}_xyz123` });
    onEmptyCart();
  };

  const value = {
    products,
    cart,
    order,
    onAddToCart,
    onEmptyCart,
    onRemoveItemFromCart,
    onIncrementItemQuantity,
    onDecrementItemQuantity,
    onSuccessfulCheckout,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}
