import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { RadioGroup, Radio } from "@mui/material";
import { FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { Box } from "@mui/material";
import { createTheme } from "@mui/system";
import { useSelector } from "react-redux";
import { db } from "../../../config/fire";
import { useAuth } from "../../../context/AuthContext";
import { collection, doc, updateDoc, arrayUnion } from "firebase/firestore";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(17 24 39 / var(--tw-bg-opacity))",
    },
    secondary: {
      main: "white",
    },
  },
});

const EntryForm = ({ windowWidth, setToggle, toggle, setNoIncome }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Income");
  const { currentUser } = useAuth();
  const incomeTotal = useSelector(
    (state) => state.transactionslice.incomeTotal
  );
  const expenseTotal = useSelector(
    (state) => state.transactionslice.expenseTotal
  );
  const totalBalance = useSelector((state) => state.transactionslice.balance);

  const formHandler = (e) => {
    e.preventDefault();
    if (description && amount) {
      const userDocRef = doc(db, "users", currentUser.uid);
      if (
        (incomeTotal <= 0 && category === "Expense") ||
        (totalBalance <= 0 &&
          incomeTotal > 0 &&
          expenseTotal > 0 &&
          category === "Expense")
      ) {
        setNoIncome(true);
        setTimeout(() => {
          setNoIncome(false);
          setToggle(false);
        }, 3000);
        e.target.reset();
      } else {
        const d = new Date();
        setNoIncome(false);
        updateDoc(userDocRef, {
          transactions: arrayUnion({
            description,
            category,
            amount: +amount,
            createdAt: d.getTime(),
          }),
        }).then(e.target.reset());
      }
      setToggle(!toggle);
    } else console.log("enter a valid description or amount");
  };

  return (
    <>
      <div className="bg-white max-h-[100%] lmd:min-h-[91%]  mt-5 lmd:mt-0 rounded-lg lmd:p-3 ">
        <Typography variant="h5" sx={{ marginTop: 3, textAlign: "center" }}>
          Enter Income/Expense
        </Typography>
        <form onSubmit={formHandler} autoComplete="off">
          <div className="max-w-[80%] lmd:flex items-baseline lmd:space-x-3 justify-between lmd:mt-3 mx-auto mt-8">
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              pattern="^[A-Za-z \s*]+"
              title="this field only accepts alphabets"
              name="description"
              id="description"
              placeholder="Enter description..."
              className="border-[1px]  block border-solid border-gray-900 outline-violet w-full rounded-lg p-2"
            />

            <input
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter Amount..."
              className="border-[1px] mt-5 block border-solid border-gray-900 outline-violet w-full rounded-lg p-2"
            />
          </div>
          <div className="mt-8  max-w-[80%] mx-auto lmd:flex items-center justify-between">
            <FormControl>
              <FormLabel
                sx={{
                  color: "rgb(17 24 39 / var(--tw-border-opacity))",
                  "&.Mui-focused": {
                    color: "rgb(17 24 39 / var(--tw-border-opacity))",
                  },
                }}
              >
                Type:
              </FormLabel>
              <RadioGroup
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <div className="flex lmd:pb-8">
                  <FormControlLabel
                    control={
                      <Radio
                        sx={{
                          color: " rgb(17 24 39 / var(--tw-border-opacity))",
                          "&.Mui-checked": {
                            color: "rgb(17 24 39 / var(--tw-border-opacity))",
                          },
                        }}
                      />
                    }
                    label="Income"
                    value="Income"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        sx={{
                          color: " rgb(17 24 39 / var(--tw-border-opacity))",
                          "&.Mui-checked": {
                            color: "rgb(17 24 39 / var(--tw-border-opacity))",
                          },
                        }}
                      />
                    }
                    label="Expense"
                    value="Expense"
                  />
                </div>
              </RadioGroup>
            </FormControl>

            {windowWidth > 924 ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100%"
                marginTop="-1rem"
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    textAlign: "center",
                    width: 200,
                    // paddingY: "1rem",

                    backgroundColor: "#8464C9",
                    ":active": {
                      backgroundColor: "#8464C9",
                    },
                    ":hover": {
                      backgroundColor: "#8464C9",
                    },
                  }}
                >
                  {category === "Income" ? " Add Income" : "Add Expense"}
                </Button>
              </Box>
            ) : (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100%"
                marginTop="1rem"
                marginBottom="2rem"
                paddingBottom="2rem"
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    textAlign: "center",
                    width: 200,
                    paddingY: "1rem",

                    backgroundColor: "#8464C9",
                    ":active": {
                      backgroundColor: "#8464C9",
                    },
                    ":hover": {
                      backgroundColor: "#8464C9",
                    },
                  }}
                >
                  {category === "Income" ? " Add Income" : "Add Expense"}
                </Button>
              </Box>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default EntryForm;
