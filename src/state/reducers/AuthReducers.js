import { LOGIN, REGISTER, FINDUSER } from "../types/AuthTypes";

const INITIAL_STATE = {
  auth: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case REGISTER:
      return action.payload;
    case FINDUSER:
      return action.payload;
    default:
      return state;
  }
};

export default AuthReducer;
