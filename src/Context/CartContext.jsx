import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setcartItem] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const addToCart = (item) => {
    setcartItem([...cartItem, item]);
  };

  const removeFromCart = (item) => {
    setcartItem(cartItem.filter((cartItem) => cartItem !== item));
  };

  return (
    <CartContext.Provider
      value={{ cartOpen, cartItem, addToCart, removeFromCart, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
