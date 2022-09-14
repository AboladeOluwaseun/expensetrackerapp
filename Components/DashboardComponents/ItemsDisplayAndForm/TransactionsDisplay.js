import React, { useState, useEffect } from "react";
import Transactions from "./Transactions";
import Transaction from "./Transaction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { db } from "../../../config/fire";
import { useAuth } from "../../../context/AuthContext";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  doc,
} from "firebase/firestore";
import {
  setTransaction,
  setTotalBalance,
  setIncomeTotal,
  setExpenseTotal,
} from "../../../ReduxStore/transactionSlice";

const TransactionsDisplay = ({
  toggle,
  setToggle,
  filteredTransactions,
  setFilteredTransactions,
  noIncome,
  setNoIncome,
}) => {
  const [windowWidth, setWindowWidth] = useState("");
  const noIncomeState = useSelector((state) => state.transactionslice.noIncome);
  const dispatch = useDispatch();
  const colRef = collection(db, "users");
  const queryRef = query(colRef, orderBy("createdAt", "desc"));
  const { currentUser } = useAuth();

  const transactions = useSelector(
    (state) => state.transactionslice.transactions
  );
  const searchedTransactions = useSelector(
    (state) => state.transactionslice.searchedTransactions
  );

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  // /////////LOGIC TO FETCH REALTIME TRANSACTIONS FROM DATABASE ONLOAD
  useEffect(() => {
    const gettransactions = () => {
      let transactionData = [];
      onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
        transactionData = doc
          .data()
          .transactions.sort((a, b) => b.createdAt - a.createdAt);
        dispatch(setTransaction(transactionData));
        const number = (number) => {
          return (Math.round(number * 100) / 100).toLocaleString();
        };
        const allExpenses = transactionData.filter(
          (transaction) => transaction.category === "Expense"
        );
        const allIncomes = transactionData.filter(
          (transaction) => transaction.category === "Income"
        );
        const totalExpenseCalculation = allExpenses.reduce((total, expense) => {
          return total + expense.amount;
        }, 0);
        const totalIncomeCalculation = allIncomes.reduce((total, income) => {
          return total + income.amount;
        }, 0);

        const totalBalance = number(
          totalIncomeCalculation - totalExpenseCalculation
        );
        const totalIncome = number(+totalIncomeCalculation);
        const totalExpense = number(+totalExpenseCalculation);
        console.log(totalIncome);
        console.log(totalExpense);
        dispatch(setTotalBalance(totalBalance));
        dispatch(setIncomeTotal(totalIncome));
        dispatch(setExpenseTotal(totalExpense));
      });
    };
    gettransactions();
  }, []);

  // LODIC FOR SEARCHING TRANSACTIONS
  useEffect(() => {
    if (searchedTransactions === []) {
    }
    setFilteredTransactions(searchedTransactions);
  }, [searchedTransactions]);

  return (
    <>
      <Transactions
        filteredTransactions={filteredTransactions}
        windowWidth={windowWidth}
        noIncomeState={noIncomeState}
        toggle={toggle}
        setToggle={setToggle}
        noIncome={noIncome}
        setNoIncome={setNoIncome}
      />
    </>
  );
};

export default TransactionsDisplay;
