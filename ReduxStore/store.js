import { configureStore } from "@reduxjs/toolkit";
import transactionslicereducer from "./transactionSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    transactionslice: transactionslicereducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
