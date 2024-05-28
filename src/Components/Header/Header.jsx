import React from "react";
import "./Header.css";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <button className="btn">
        <FaCartPlus className="icon" /> Cart
      </button>
    </div>
  );
};

export default Header;
