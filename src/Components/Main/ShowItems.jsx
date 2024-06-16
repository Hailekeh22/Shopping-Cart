import React, { useContext } from "react";
import Card from "./Card/Card";
import data from "../../assets/Products";
import { CartContext } from "../../Context/CartContext";

function ShowItems({ men, women }) {
  const { addToCart } = useContext(CartContext);

  const MenProducts = data.filter((product) => product.for === "Men");
  const WomenProduts = data.filter((product) => product.for === "Women");

  function handleAddToCart(item) {
    addToCart({ name: item.Name });
  }

  return (
    <div className="card-container">
      {men &&
        MenProducts.map((item, index) => {
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
      {women &&
        WomenProduts.map((item, index) => {
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
      {!women &&
        !men &&
        data.map((item, index) => {
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
