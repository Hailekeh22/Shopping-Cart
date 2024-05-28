import React, { useState, useContext } from "react";
import "./Header.css";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../../Context/Context";

const Header = () => {
  // const [amount, setamount] = useState(0);

  const { amount } = useContext(CartContext);

  return (
    <div className="header">
      <button className="btn">
        <FaCartPlus className="icon" /> Cart
        <span className="cart-count">{amount}</span>
      </button>
    </div>
  );
};

export default Header;
