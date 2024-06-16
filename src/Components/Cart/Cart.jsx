import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import "./Cart.css";

const Cart = ({ close }) => {
  return (
    <div className="cart-overlay" onClick={close}>
      <div className="cart-container">
        <div className="cart-header">
          <FaCartPlus className="cart-icon" />
        </div>
        <div className="cart-body">
          <ul>
            <li className="cart-items">
              ABCE <FaRegWindowClose className="removebtn" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
