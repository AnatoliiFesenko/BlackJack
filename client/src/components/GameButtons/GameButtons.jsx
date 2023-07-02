import React, { useEffect, useState } from "react";
import styles from "./GameButtons.module.scss";
import {
  fetchBalances,
  fetchOneBalance,
  changeOneBalance,
} from "../../https/balanceAPI";

import { useSelector } from "react-redux";

const GameButtons = ({
  addCard,
  stop,
  newGame,
  placeBet,
  changeMode,
  result,
  setResult,
}) => {
  const [value, setValue] = useState(0);
  const [mode, setMode] = useState(true);
  const user = useSelector((state) => state.user.currentUser);
  const balance = useSelector((state) => state.balance.balance);

  useEffect(() => {
    setMode(!mode);
  }, [changeMode]);

  // const testApi = async () => {
  //   await fetchBalances().then((data) => {
  //     console.log(data);
  //   });
  // // await fetchOneBalance(5).then((data) => {
  // //   console.log(data);
  // // });
  // await changeOneBalance(3, 900).then((data) => {
  //   console.log(data);
  // });
  //   console.log(user.id);
  //   console.log(balance);
  // };

  const acceptBet = () => {
    if (value >= 10 && value <= balance) {
      placeBet(value);
      setMode(true);
      newGame();
      setResult("");
    }
  };

  return (
    <div>
      {/* <button onClick={testApi}>test</button> */}
      {mode ? (
        <div className={styles.wrapperButtons}>
          <button className={styles.buttons} onClick={addCard}>
            add card
          </button>
          <button
            className={styles.buttonsStop}
            onClick={() => {
              stop();
              setMode(false);
            }}
          >
            stop
          </button>
        </div>
      ) : (
        <div className={styles.wrapperButtons}>
          <div className={styles.input}>
            <input
              className={styles.bet}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="bet"
            />
            <div>Min bet: 10</div>
          </div>
          <div className={styles.result}>{result}</div>
          <button className={styles.buttons} onClick={acceptBet}>
            Appect bet
          </button>
        </div>
      )}
    </div>
  );
};

export default GameButtons;
