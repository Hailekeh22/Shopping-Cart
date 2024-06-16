import React, { useContext } from "react";
import Card from "./Card/Card";
import data from "../../assets/Products";
import { CartContext } from "../../Context/CartContext";

function ShowItems() {
  const { addToCart } = useContext(CartContext);

  function handleAddToCart(item) {
    addToCart({ name: item.Name });
  }

  return (
    <div className="card-container">
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            name={item.Name}
            image={item.image}
            info={item.info}
            price={item.Price}
            addToCart={() => handleAddToCart(item)}
          />
        );
      })}
    </div>
  );
}

export default ShowItems;
