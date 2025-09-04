import { createContext } from "react";

const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const defaultLogOut = () => {};

export const newContext = createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});
