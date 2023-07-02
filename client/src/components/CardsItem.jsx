import React from "react";
import cards from "./assets/ObjCards";

const CardsItem = () => {
  console.log(cards);
  return (
    <div>
      {cards.map((item) => {
        return <img key={item.id} src={item.img} height={100} />;
      })}
    </div>
  );
};

export default CardsItem;
