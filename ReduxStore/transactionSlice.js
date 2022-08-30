import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: 1,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions = state.transactions.push(action.payload);
    },
    decrement: (state) => {
      state.transactions -= 1;
    },
    incrementByAmount: (state, action) => {
      state.transactions += action.payload;
    },
  },
});

export const { addTransaction, decrement, incrementByAmount } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
