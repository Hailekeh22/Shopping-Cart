import React, { useState } from "react";
import "./Main.css";
import ShowItems from "./ShowItems";

const Mainbody = () => {
  const [showMen, setShowMen] = useState(false);
  const [showWomen, setShowWomen] = useState(false);

  const filtermen = () => {
    setShowMen(!showMen);
    setShowWomen(false);
  };

  const filterwomen = () => {
    setShowWomen(!showWomen);
    setShowMen(false);
  };

  return (
    <div className="body-container">
      <div className="Products-list">
        <div className="Item-toogle">
          <button onClick={filtermen}>Men</button>
          <button className="women-item" onClick={filterwomen}>
            Women
          </button>
        </div>
        <div className="Item-view">
          <div>
            <ShowItems men={showMen} women={showWomen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
