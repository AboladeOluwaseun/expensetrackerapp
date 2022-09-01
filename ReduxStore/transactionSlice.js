import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  balance: 0,
  incomeTotal: 0,
  expenseTotal: 0,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions = state.transactions.concat(action.payload);
    },
    getTotalBalance: (state) => {
      state.balance = state.incomeTotal - state.expenseTotal;
    },
    getIncomeTotal: (state, action) => {
      if (action.payload.category === "Income") {
        state.incomeTotal = state.incomeTotal + +action.payload.amount;
      }
    },
    getExpenseTotal: (state, action) => {
      if (action.payload.category === "Expense") {
        state.expenseTotal = state.expenseTotal + +action.payload.amount;
      }
    },
  },
});

export const {
  addTransaction,
  getTotalBalance,
  getIncomeTotal,
  getExpenseTotal,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
