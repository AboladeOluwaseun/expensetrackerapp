import { configureStore } from "@reduxjs/toolkit";
import transactionslicereducer from "./transactionSlice";

export const store = configureStore({
  reducer: {
    transactionslice: transactionslicereducer,
  },
});
