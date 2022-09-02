import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  balance: 0,
  incomeTotal: 0,
  expenseTotal: 0,
  noIncome: false,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      if (state.incomeTotal <= 0 && action.payload.category === "Expense") {
      } else state.transactions = state.transactions.concat(action.payload);
    },
    getTotalBalance: (state, action) => {
      if (state.incomeTotal <= 0 && action.payload.category === "Expense") {
        state.balance = 0;
      } else state.balance = state.incomeTotal - state.expenseTotal;
    },
    getIncomeTotal: (state, action) => {
      if (action.payload.category === "Income") {
        state.incomeTotal = state.incomeTotal + +action.payload.amount;
        state.noIncome = false;
      }
    },
    getExpenseTotal: (state, action) => {
      if (action.payload.category === "Expense") {
        if (state.incomeTotal <= 0) {
          state.expenseTotal = 0;
          state.noIncome = true;
        } else {
          state.expenseTotal = state.expenseTotal + +action.payload.amount;
        }
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
