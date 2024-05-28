import Header from "./Components/Header/Header";
import Mainbody from "./Components/Main/Mainbody";
import { CartProvider } from "./Context/Context";
import Cart from "./Components/Cart/Cart";
import { CartContext } from "./Context/Context";
import { useState, useContext } from "react";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Mainbody />
        <Cartwrapper />
      </CartProvider>
    </>
  );
}

const Cartwrapper = () => {
  const { cartopen } = useContext(CartContext);

  return cartopen && <Cart />;
};

export default App;
