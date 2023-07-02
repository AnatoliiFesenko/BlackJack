const USER_LOST = "USER_LOST";
const USER_WIN = "USER_WIN";
const SET_BALANCE = "SET_BALANCE";

const defaultState = {
  balance: 200,
};

export const balanceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_LOST:
      return { ...state, balance: state.balance - Number(action.payload) };
    case USER_WIN:
      return { ...state, balance: state.balance + Number(action.payload) };
    case SET_BALANCE:
      return { ...state, balance: action.payload };

    default:
      return state;
  }
};

export const userLostReducer = (bet) => ({ type: USER_LOST, payload: bet });
export const userWinReducer = (bet) => ({ type: USER_WIN, payload: bet });
export const setBalance = (balance) => ({
  type: SET_BALANCE,
  payload: balance,
});
