import ReactDOM from "react-dom";

const CartPortal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById("cart"));
};

export default CartPortal;
