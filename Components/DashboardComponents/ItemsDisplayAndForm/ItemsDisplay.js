import React, { useState, useEffect } from "react";
import { List, Paper } from "@mui/material";
import Item from "./Item";
import EntryForm from "./EntryForm";
import { useSelector } from "react-redux";

const ItemsDisplay = ({ toggle, setToggle }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const expenseTotal = useSelector(
    (state) => state.transactionslice.expenseTotal
  );
  const transactions = useSelector(
    (state) => state.transactionslice.transactions
  );
  const noIncomeState = useSelector((state) => state.transactionslice.noIncome);

  const dataDisplay = transactions.map((transaction, index) => {
    return (
      <li key={index}>
        {" "}
        <Item
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

  return (
    <>
      {dataDisplay.length <= 0 && !noIncomeState && !toggle ? (
        <div className="py-6 mt-8">
          <h4 className={"text-violet text-center  text-[4rem]"}>welcome!</h4>
          <p className="text-center  mt-4">
            click on the "+" button below to add Income
          </p>
        </div>
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
          <List>{dataDisplay}</List>
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
          {noIncomeState ? (
            <div className="py-6">
              <h4 className="text-violet text-center  text-[4rem]">Ooops!</h4>
              <p className="text-center  mt-4">
                You must have an Income before adding expense
              </p>
            </div>
          ) : (
            <List>{dataDisplay}</List>
          )}
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

export default ItemsDisplay;
