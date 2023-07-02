import React, { useState } from "react";
import styles from "./Registration.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/consts";
import { registration } from "../../https/userAPI";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const click = () => {
    registration(email, password);
    navigate(LOGIN_ROUTE);
  };

  return (
    <div className={styles.fullPage}>
      <div className={styles.authWindow}>
        <div className={styles.authHeader}>SIGN UP</div>
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
          <NavLink to={LOGIN_ROUTE} className={styles.navlink}>
            Already have an account? Sign in
          </NavLink>
        </div>
        <div className={styles.authFooter}>
          <button onClick={click}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
