import { setBalance } from "../redusers/balanceReducer";
import { setUser } from "../redusers/userReducer";
import { fetchOneBalance } from "./balanceAPI";
import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await $host.post("api/user/login", {
        email,
        password,
      });
      console.log(response.data.user.id);
      const getBalance = await fetchOneBalance(response.data.user.id).then(
        (data) => {
          return data.balance;
        }
      );
      console.log(getBalance);
      await dispatch(setUser(response.data.user));
      await dispatch(setBalance(getBalance));
      localStorage.setItem("token", response.data.token);
      return jwt_decode(response.data.token);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

export const check = () => {
  return async (dispatch) => {
    try {
      const response = await $authHost.get("api/user/auth");
      console.log(response.data.user);
      const getBalance = await fetchOneBalance(response.data.user.id).then(
        (data) => {
          return data.balance;
        }
      );
      console.log(getBalance);
      await dispatch(setUser(response.data.user));
      await dispatch(setBalance(getBalance));
      localStorage.setItem("token", response.data.token);
      dispatch(setUser(response.data.user));
      return jwt_decode(response.data.token);
    } catch (e) {
      alert(e.response.data.message);
      localStorage.removeItem("token");
    }
  };
};
