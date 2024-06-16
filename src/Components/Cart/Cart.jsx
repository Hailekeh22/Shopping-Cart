import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import "./Cart.css";

const Cart = ({ close }) => {
  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <FaCartPlus className="cart-icon" />
          <FaRegWindowClose onClick={close} className="cart-icon close-cart" />
        </div>
        <div className="cart-body">
          <ul>
            <li className="cart-items">
              ABCE <FaRegTrashAlt className="removebtn" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
