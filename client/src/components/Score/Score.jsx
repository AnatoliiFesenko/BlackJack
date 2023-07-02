import React from "react";
import styles from "./Score.module.scss";

const Score = ({ userScore, dillerScore }) => {
  return (
    <div className={styles.wrapScore}>
      <div className={styles.nameScore}>Score Diller</div>
      <div className={styles.scoreCount}>{userScore}</div>:
      <div className={styles.scoreCount}>{dillerScore}</div>
      <div className={styles.nameScore}>Score User</div>
    </div>
  );
};

export default Score;
