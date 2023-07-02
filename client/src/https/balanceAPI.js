import { $authHost, $host } from "./index";

export const fetchBalances = async () => {
  const { data } = await $authHost.get("api/balances");
  return data;
};

export const fetchOneBalance = async (userId) => {
  const { data } = await $authHost.get("api/balances/oneBalance", {
    params: { userId },
  });
  return data;
};

export const changeOneBalance = async (userId, balance) => {
  const { data } = await $authHost.put("api/balances/updBalance", {
    userId: userId,
    balance: balance,
  });
  return data;
};
