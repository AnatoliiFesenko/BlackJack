import React, { useState } from "react";
import styles from "./Login.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { GAME_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import { login } from "../../https/userAPI";
import { useDispatch, useSelector } from "react-redux";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const click = () => {
    dispatch(login(email, password));
    navigate(GAME_ROUTE);
  };

  return (
    <div className={styles.fullPage}>
      <div className={styles.authWindow}>
        <div className={styles.authHeader}>SIGN IN</div>
        <div className={styles.authBody}>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <NavLink to={REGISTRATION_ROUTE} className={styles.navlink}>
            Create account
          </NavLink>
        </div>
        <div className={styles.authFooter}>
          <button onClick={click}>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
