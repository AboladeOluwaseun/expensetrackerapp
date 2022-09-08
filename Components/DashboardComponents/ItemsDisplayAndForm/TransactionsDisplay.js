import React, { useState, useEffect } from "react";
import { List, Paper } from "@mui/material";
import Transaction from "./Transaction";
import EntryForm from "./EntryForm";
import WelcomeDisplay from "./WelcomeDisplay";
import NoIncomeError from "./NoIncomeError";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { db } from "../../../config/fire";
import { onSnapshot, collection } from "firebase/firestore";
import {
  setTransaction,
  setTotalBalance,
  setIncomeTotal,
  setExpenseTotal,
} from "../../../ReduxStore/transactionSlice";

const colRef = collection(db, "transactions");

const TransactionsDisplay = ({
  toggle,
  setToggle,
  filteredTransactions,
  setFilteredTransactions,
}) => {
  const [windowWidth, setWindowWidth] = useState("");
  const noIncomeState = useSelector((state) => state.transactionslice.noIncome);
  const dispatch = useDispatch();

  const transactions = useSelector(
    (state) => state.transactionslice.transactions
  );
  const searchedTransactions = useSelector(
    (state) => state.transactionslice.searchedTransactions
  );
  const dataDisplay = filteredTransactions.map((transaction, index) => {
    return (
      <li key={index}>
        {" "}
        <Transaction
          name={transaction.description}
          amount={transaction.amount}
          type={transaction.category}
        />
      </li>
    );
  });

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
    const gettransactions = async () => {
      onSnapshot(colRef, (snapshot) => {
        let transactionData = [];
        snapshot.docs.forEach((doc) => transactionData.push(doc.data()));
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
      {dataDisplay.length <= 0 && !noIncomeState && !toggle ? (
        <WelcomeDisplay />
      ) : windowWidth > 924 ? (
        <Paper
          style={{
            borderRadius: "8px",
            marginTop: -8,
            maxHeight: 230,
            overflow: "auto",
          }}
          sx={{
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: 0,
            },
          }}
        >
          {noIncomeState ? <NoIncomeError /> : <List>{dataDisplay}</List>}
        </Paper>
      ) : !toggle ? (
        <Paper
          style={{
            borderRadius: "8px",
            marginTop: 45,
            maxHeight: 430,
          }}
          sx={{
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: 0,
            },
          }}
        >
          {noIncomeState ? <NoIncomeError /> : <List>{dataDisplay}</List>}
        </Paper>
      ) : (
        <EntryForm
          windowWidth={windowWidth}
          toggle={toggle}
          setToggle={setToggle}
        ></EntryForm>
      )}
    </>
  );
};

export default TransactionsDisplay;
