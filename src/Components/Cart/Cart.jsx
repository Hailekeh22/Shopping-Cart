import React from "react";
import ReactDOM from "react-dom";

const Cart = () => {
  return ReactDOM.createPortal(
    <h2>Helo From Cart</h2>,
    document.getElementById("cart")
  );
};

export default Cart;
