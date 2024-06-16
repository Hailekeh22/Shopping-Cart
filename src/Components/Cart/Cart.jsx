import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";

const Cart = ({ close }) => {
  const { cartItem, removeFromCart } = useContext(CartContext);

  function removeitem(itemname) {
    removeFromCart(itemname);
  }

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <FaCartPlus className="cart-icon" />
          <FaRegWindowClose onClick={close} className="cart-icon close-cart" />
        </div>
        <div className="cart-body">
          <ul>
            {cartItem.map((item, index) => (
              <li key={index} className="cart-items">
                {item.name}
                <FaRegTrashAlt
                  onClick={() => {
                    removeitem(item.name);
                  }}
                  className="removebtn"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
