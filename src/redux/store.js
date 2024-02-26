import { configureStore } from "@reduxjs/toolkit";
import authReducer, { auth } from "./reducers/authReducer";
import errorReducer from "./reducers/errorReducer";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
  },
});
