import React from "react";
import Card from "./Card/Card";
import data from "../../assets/Products";

function ShowItems() {
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
          />
        );
      })}
    </div>
  );
}

export default ShowItems;
