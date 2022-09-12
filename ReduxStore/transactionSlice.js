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
    // addTransaction: (state, action) => {
    //   if (state.incomeTotal <= 0 && action.payload.category === "Expense") {
    //   } else state.transactions = state.transactions.concat(action.payload);
    // },
    // getTotalBalance: (state, action) => {
    //   if (state.incomeTotal <= 0 && action.payload.category === "Expense") {
    //     state.balance = 0;
    //   } else state.balance = state.incomeTotal - state.expenseTotal;
    // },
    // getIncomeTotal: (state, action) => {
    //   if (action.payload.category === "Income") {
    //     state.incomeTotal = state.incomeTotal + +action.payload.amount;
    //     state.noIncome = false;
    //   }
    // },
    // getExpenseTotal: (state, action) => {
    //   if (action.payload.category === "Expense") {
    //     if (state.incomeTotal <= 0) {
    //       state.expenseTotal = 0;
    //       state.noIncome = true;
    //     } else {
    //       state.expenseTotal = state.expenseTotal + +action.payload.amount;
    //     }
    //   }
    // },
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
