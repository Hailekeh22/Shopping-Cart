import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [amount, setamount] = useState(0);
  const [cartItem, setcartItem] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const addToCart = (item) => {
    setcartItem([...cartItem, item]);
    setamount(() => cartItem.length + 1);
    console.log(cartItem);
  };

  const removeFromCart = (itemName) => {
    setcartItem(cartItem.filter((item) => item.name !== itemName));
    setamount(() => cartItem.length - 1);
  };

  return (
    <CartContext.Provider
      value={{
        cartOpen,
        amount,
        cartItem,
        addToCart,
        removeFromCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
