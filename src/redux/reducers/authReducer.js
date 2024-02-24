import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isAuth: null,
  user: null,
};

let notLoggedInState = {
  isAuth: false,
  user: null,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (_, action) => {
      return {
        isAuth: true,
        user: action.payload,
      };
    },
    login: (_, action) => {
      return { isAuth: true, user: action.payload };
    },
  },
});

export const { register, login } = auth.actions;
export default auth.reducer;
