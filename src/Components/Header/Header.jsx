import React, { useState, useContext } from "react";
import "./Header.css";
import { FaCartPlus } from "react-icons/fa";

const Header = ({ open }) => {
  const [amount, setamount] = useState(0);

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
