import React from "react";
import styles from "./Balance.module.scss";
import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector((state) => state.balance.balance);
  return <div className={styles.balance}>Balance: {balance}</div>;
};

export default Balance;
