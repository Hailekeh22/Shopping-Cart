import React, { useState, useContext } from "react";
import "./Header.css";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../../Context/CartContext";

const Header = ({ open }) => {
  const { amount } = useContext(CartContext);

  return (
    <div className="header">
      <button className="btn" onClick={open}>
        <FaCartPlus className="icon" /> Cart
        <span className="cart-count">{amount}</span>
      </button>
    </div>
  );
};

export default Header;
