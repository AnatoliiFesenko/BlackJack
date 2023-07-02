import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Game from "./pages/Game/Game";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, GAME_ROUTE } from "./utils/consts";

export const authRoutes = [
  {
    path: GAME_ROUTE,
    Component: <Game />,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Login />,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Registration />,
  },
];
