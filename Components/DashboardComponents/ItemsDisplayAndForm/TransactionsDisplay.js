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
  getDocs,
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
        transactionData = doc.data().transactions;
        dispatch(setTransaction(transactionData));
        const allExpenses = transactionData.filter(
          (transaction) => transaction.category === "Expense"
        );
        const allIncomes = transactionData.filter(
          (transaction) => transaction.category === "Income"
        );
        const totalExpense = allExpenses.reduce((total, expense) => {
          return total + expense.amount;
        }, 0);
        const totalIncome = allIncomes.reduce((total, income) => {
          return total + income.amount;
        }, 0);
        const totalBalance = totalIncome - totalExpense;
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
      />
    </>
  );
};

export default TransactionsDisplay;
