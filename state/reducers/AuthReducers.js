import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: null,
  user: null,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (_, action) => {
      return {
        isAuth: true,
        user: action.payload,
      };
    },
    register: (_, action) => {
      return {
        isAuth: true,
        user: action.payload,
      };
    },
    getUser: (_, action) => {
      return {
        isAuth: action.payload ? true : false,
        user: action.payload,
      };
    },
  },
});

export const { logIn, logOut, register, getUser } = auth.actions;
export default auth.reducer;
