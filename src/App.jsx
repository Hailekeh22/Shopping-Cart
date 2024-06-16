import Header from "./Components/Header/Header";
import Mainbody from "./Components/Main/Mainbody";
import CartPortal from "./Components/Cart/Cart Portal/CartPortal";
import Cart from "./Components/Cart/Cart";
import { useContext, useState } from "react";
import { CartContext } from "./Context/CartContext";

function App() {
  const { cartOpen, toggleCart } = useContext(CartContext);

  return (
    <>
      <Header open={toggleCart} />
      <Mainbody />
      {cartOpen && (
        <CartPortal>
          <Cart close={toggleCart} />
        </CartPortal>
      )}
    </>
  );
}

export default App;
