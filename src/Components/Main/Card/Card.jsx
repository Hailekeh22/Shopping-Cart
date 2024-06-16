import React, { useContext } from "react";
import "./Card.css";

function Card(props) {
  const name = props.name;
  const info = props.info;
  const price = props.price;
  return (
    <div>
      <div className="Card-item">
        <div className="Card-image">
          <img className="img-item" src={props.image}></img>
        </div>
        <div className="Card-Content">
          <h3>{name}</h3>
          <p>{info}</p>
          <p>{price}</p>
          <button className="addtocart-button" onClick={props.addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
