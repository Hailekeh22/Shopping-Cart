import Header from "./Components/Header/Header";
import Mainbody from "./Components/Main/Mainbody";
import CartPortal from "./Components/Cart/Cart Portal/CartPortal";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

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
