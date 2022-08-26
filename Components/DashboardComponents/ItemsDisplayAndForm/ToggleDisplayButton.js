import React from "react";
import AddIcon from "@mui/icons-material/Add";
import HistoryIcon from "@mui/icons-material/History";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { IconButton } from "@mui/material";
import { createTheme } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#fff",
      contrastText: "#fff",
    },
  },
});

const ToggleDisplayButton = ({ setToggle, toggle }) => {
  return (
    <>
      {toggle ? (
        <IconButton
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <ReceiptIcon
            fontSize="large"
            theme={theme}
            color="neutral"
            className="bg-violet rounded-full  relative mb-8"
          />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <AddIcon
            fontSize="large"
            theme={theme}
            color="neutral"
            className="bg-violet  rounded-full mt-[-2rem]"
          />
        </IconButton>
      )}
    </>
  );
};

export default ToggleDisplayButton;