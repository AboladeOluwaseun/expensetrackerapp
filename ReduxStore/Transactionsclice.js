import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, actions) => {
      state.value = state.transactions.push(actions.payload);
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addTransaction, decrement, incrementByAmount } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
