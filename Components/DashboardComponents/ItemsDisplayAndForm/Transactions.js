import React from "react";
import EntryForm from "./EntryForm";
import WelcomeDisplay from "./WelcomeDisplay";
import NoIncomeError from "./NoIncomeError";
import { List, Paper } from "@mui/material";

const Transactions = ({
  filteredTransactions,
  windowWidth,
  noIncomeState,
  toggle,
  setToggle,
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

export default Transactions;
