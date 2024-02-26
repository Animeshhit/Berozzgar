import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  error: false,
  message: null,
  type: "message",
};

export const Err = createSlice({
  name: "error",
  initialState,
  reducers: {
    message: (_, action) => {
      return {
        error: true,
        message: action.payload.message,
        type: "message",
      };
    },
    errorMessage: (_, action) => {
      return {
        error: true,
        message: action.payload.message,
        type: "error",
      };
    },
    removeError: (_, action) => {
      return initialState;
    },
  },
});

export const { message, errorMessage, removeError } = Err.actions;
export default Err.reducer;
