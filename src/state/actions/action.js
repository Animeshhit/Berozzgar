import { LOGIN, REGISTER, FINDUSER } from "../types/AuthTypes";

export const LoginUser = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const RegisterUser = (user) => {
  return {
    type: REGISTER,
    payload: user,
  };
};

export const getUser = (user) => {
  return {
    type: FINDUSER,
    payload: user,
  };
};
