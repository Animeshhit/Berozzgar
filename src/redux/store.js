import { configureStore } from "@reduxjs/toolkit";
import authReducer, { auth } from "./reducers/authReducer";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
