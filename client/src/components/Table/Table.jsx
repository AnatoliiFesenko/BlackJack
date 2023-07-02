import React from "react";
import CardDeck from "../CardDeck/CardDeck";
import styles from "./Table.module.scss";
import Game from "../Game/Game";
import Balance from "../Balance/Balance";
import { useDispatch } from "react-redux";
import { logout } from "../../redusers/userReducer";
import { useNavigate } from "react-router";
import { LOGIN_ROUTE } from "../../utils/consts";

const Table = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOut = () => {
    dispatch(logout());
    navigate(LOGIN_ROUTE);
  };

  return (
    <div className={styles.wrapperTable}>
      <header className={styles.header}>
        <Balance />
        <button onClick={signOut} className={styles.logout}>
          Logout
        </button>
      </header>
      <main className={styles.main}>
        <CardDeck />

        <div className={styles.gameZone}>
          <Game />
        </div>
      </main>
    </div>
  );
};

export default Table;
