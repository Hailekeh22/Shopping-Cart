import React from "react";
import "./Main.css";
import ShowItems from "./ShowItems";

const Mainbody = () => {
  const filtermen = () => {};

  const filterwomen = () => {};
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
            <ShowItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
