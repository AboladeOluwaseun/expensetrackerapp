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
});
const EntryForm = () => {
  return (
    <>
      <div className="bg-white rounded-lg px-3">
        <Typography variant="h5" sx={{ marginTop: 3 }}>
          Enter Income/Expense
        </Typography>
        <form className="" noValidate autoComplete="off">
          <div className="flex space-x-3 justify-between">
            <TextField
              variant="outlined"
              sx={{
                color: "rgb(17 24 39 / var(--tw-bg-opacity))",
                marginTop: 2,
              }}
              required
              label="Enter Description"
              error={true}
            />
            <TextField
              sx={{
                display: "block",
                marginTop: 2,
                color: "rgb(17 24 39 / var(--tw-bg-opacity))",
              }}
              variant="outlined"
              required
              label="Amount"
              error={true}
            />
            <FormControl>
              <FormLabel sx={{ color: "rgb(17 24 39 / var(--tw-bg-opacity))" }}>
                Type:
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  control={
                    <Radio
                      sx={{
                        color: "rgb(17 24 39 / var(--tw-bg-opacity))",
                        "&.Mui-checked": {
                          color: "rgb(17 24 39 / var(--tw-bg-opacity))",
                        },
                      }}
                    />
                  }
                  label="income"
                  value="income"
                />
                <FormControlLabel
                  control={
                    <Radio
                      sx={{
                        color: "rgb(17 24 39 / var(--tw-bg-opacity))",
                        "&.Mui-checked": {
                          color: "rgb(17 24 39 / var(--tw-bg-opacity))",
                        },
                      }}
                    />
                  }
                  label="expense"
                  value="expense"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100%"
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
        </form>
      </div>
    </>
  );
};

export default EntryForm;
