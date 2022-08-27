import React from "react";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { RadioGroup, Radio } from "@mui/material";
import { FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { Container, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(17 24 39 / var(--tw-bg-opacity))",
    },
    secondary: {
      main: "white",
    },
  },
  breakpoints: {
    values: {
      xsm: 446,
      sm: 640,
      md: 768,
      lmd: 924,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});
const EntryForm = () => {
  return (
    <>
      <div className="bg-white mt-8 lmd:mt-0 rounded-lg lmd:p-3 lmd:max-h-[91%]">
        <Typography variant="h5" sx={{ marginTop: 3, textAlign: "center" }}>
          Enter Income/Expense
        </Typography>
        <form className="" noValidate autoComplete="off">
          <div className="max-w-[80%] lmd:flex items-baseline lmd:space-x-3 justify-between lmd:mt-3 mx-auto mt-8">
            <input
              type="text"
              name="description"
              id="description"
              placeholder="enter description..."
              className="border-[1px]  block border-solid border-gray-900 outline-violet w-full rounded-lg p-2"
            />
            <input
              type="number"
              name="description"
              id="description"
              placeholder="enterAmount..."
              className="border-[1px] mt-5 block border-solid border-gray-900 outline-violet w-full rounded-lg p-2"
            />
          </div>
          <div className="mt-8 max-w-[80%] mx-auto lmd:flex items-center justify-between">
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
              <RadioGroup>
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
                  value="Expese"
                />
              </RadioGroup>
            </FormControl>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100%"
              marginTop="2rem"
            >
              <Button
                variant="contained"
                sx={{
                  textAlign: "center",
                  width: 200,
                  paddingY: "1rem",

                  backgroundColor: "rgb(17 24 39 / var(--tw-bg-opacity))",
                  ":active": {
                    backgroundColor: "white",
                  },
                  ":hover": {
                    backgroundColor: "rgb(17 24 39 / var(--tw-bg-opacity))",
                  },
                }}
              >
                Add Income
              </Button>
            </Box>
          </div>
        </form>
      </div>
    </>
  );
};

export default EntryForm;
