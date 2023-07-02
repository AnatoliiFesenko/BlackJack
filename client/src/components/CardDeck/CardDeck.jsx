import React from "react";
import styles from "./CardDeck.module.scss";
import imgCard from "../assets/imgCard/card2.png";

const CardDeck = () => {
  return (
    <div className={styles.wrapperDeck}>
      <img src={imgCard} />
    </div>
  );
};

export default CardDeck;
