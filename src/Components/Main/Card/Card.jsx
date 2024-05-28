import React, { useContext } from "react";
import { CartContext } from "../../../Context/Context";
import "./Card.css";

function Card(props) {
  const { increaseAmount } = useContext(CartContext);

  return (
    <div>
      <div className="Card-item">
        <div className="Card-image">
          <img className="img-item" src={props.image}></img>
        </div>
        <div className="Card-Content">
          <h3>{props.name}</h3>
          <p>{props.info}</p>
          <p>{props.price}</p>
          <button className="addtocart-button" onClick={increaseAmount}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
