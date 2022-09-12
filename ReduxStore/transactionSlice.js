import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  balance: 0,
  incomeTotal: 0,
  expenseTotal: 0,
  noIncome: false,
  filtredTransactionsState: [],
  searchedTransactions: [],
  openSearch: false,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      state.transactions = action.payload;
    },
    setTotalBalance: (state, action) => {
      state.balance = action.payload;
    },
    setIncomeTotal: (state, action) => {
      state.incomeTotal = action.payload;
    },
    setExpenseTotal: (state, action) => {
      state.expenseTotal = action.payload;
    },
    setNoIncome: (state, action) => {
      if (action.payload === "Expense") {
        state.noIncome === true;
      } else state.noIncome = false;
    },
    transactionTypeDisplay: (state, action) => {
      if (action.payload === "All") {
        state.filtredTransactionsState = state.transactions;
      } else {
        if (action.payload === "Income" || "Expense") {
          state.filtredTransactionsState = state.transactions.filter(
            (transaction) => transaction.category === action.payload
          );
        }
      }
    },
    searchTransaction: (state, action) => {
      if (action.payload) {
        state.searchedTransactions = state.transactions.filter(
          (transaction) => {
            return (
              transaction.description
                .toLowerCase()
                .indexOf(action.payload.toLowerCase()) > -1
            );
          }
        );
      } else if (action.payload === "") {
        state.searchedTransactions = state.transactions;
      }
    },
    displaySearchBar: (state) => {
      state.openSearch = !state.openSearch;
      console.log(state.openSearch);
    },
  },
});

export const {
  setTransaction,
  setTotalBalance,
  setIncomeTotal,
  setExpenseTotal,
  addTransaction,
  getTotalBalance,
  getIncomeTotal,
  getExpenseTotal,
  transactionTypeDisplay,
  searchTransaction,
  displaySearchBar,
  setNoIncome,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
