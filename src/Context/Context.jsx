import react, { createContext, useState } from "react";

export const CartProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);

  const [cartopen, setcartopen] = useState(false);

  const tooglecart = () => {
    setcartopen(!cartopen);
  };

  const increaseAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  return (
    <CartContext.Provider
      value={{ amount, increaseAmount, cartopen, tooglecart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext();
