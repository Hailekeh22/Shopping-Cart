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

    console.log(cartItem);
  };

  const removeFromCart = (itemName) => {
    setcartItem(cartItem.filter((item) => item.name !== itemName));

    console.log(cartItem);
  };

  return (
    <CartContext.Provider
      value={{ cartOpen, cartItem, addToCart, removeFromCart, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
