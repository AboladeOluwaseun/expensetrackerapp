import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./transactionSlice";

export const store = configureStore({
  reducer: {
    transactionReducer: transactionReducer,
  },
});
