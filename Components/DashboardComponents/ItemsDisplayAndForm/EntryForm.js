import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { RadioGroup, Radio } from "@mui/material";
import { FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { Box } from "@mui/material";
import { createTheme } from "@mui/system";
import { useDispatch } from "react-redux";
import {
  addTransaction,
  getTotalBalance,
  getIncomeTotal,
  getExpenseTotal,
} from "../../../ReduxStore/transactionSlice";

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
const EntryForm = ({ windowWidth, setToggle, toggle }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Income");
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    if (description && amount) {
      const payload = { description, amount, category };
      dispatch(addTransaction(payload));
      setToggle(!toggle);
      dispatch(getIncomeTotal(payload));
      dispatch(getExpenseTotal(payload));
      dispatch(getTotalBalance());

      setDescription("");
      setAmount("");
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
              name="description"
              id="description"
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
                    paddingY: "1rem",

                    backgroundColor: "#8464C9",
                    ":active": {
                      backgroundColor: "white",
                    },
                    ":hover": {
                      backgroundColor: "#8464C9",
                    },
                  }}
                >
                  Add Income
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
                      backgroundColor: "white",
                    },
                    ":hover": {
                      backgroundColor: "#8464C9",
                    },
                  }}
                >
                  Add Income
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
