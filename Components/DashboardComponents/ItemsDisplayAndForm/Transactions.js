import React, { useEffect } from "react";
import EntryForm from "./EntryForm";
import WelcomeDisplay from "./WelcomeDisplay";
import NoIncomeError from "./NoIncomeError";
import { List, Paper } from "@mui/material";
import Transaction from "./Transaction";
import { useSelector } from "react-redux";

const Transactions = ({
  filteredTransactions,
  windowWidth,
  toggle,
  setToggle,
  noIncome,
  setNoIncome,
}) => {
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

  return (
    <>
      {dataDisplay.length <= 0 && !noIncome && !toggle ? (
        <WelcomeDisplay />
      ) : windowWidth > 923 ? (
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
          {noIncome ? <NoIncomeError /> : <List>{dataDisplay}</List>}
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
          {noIncome ? <NoIncomeError /> : <List>{dataDisplay}</List>}
        </Paper>
      ) : (
        <EntryForm
          windowWidth={windowWidth}
          toggle={toggle}
          setToggle={setToggle}
          noIncome={noIncome}
          setNoIncome={setNoIncome}
        ></EntryForm>
      )}
    </>
  );
};

export default Transactions;
