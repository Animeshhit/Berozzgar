import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthReducers";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
