import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { IconButton } from "@mui/material";
import { createTheme } from "@mui/material";
import { useSelector } from "react-redux";

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

const MiddleButtons = ({ setToggle, toggle }) => {
  const openSearchBar = useSelector(
    (state) => state.transactionslice.openSearch
  );
  return (
    <>
      {toggle ? (
        <IconButton
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <ReceiptIcon
            sx={{ width: 50, height: 50 }}
            fontSize="large"
            theme={theme}
            color="neutral"
            className="rounded-full p-1 "
          />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <AddIcon
            sx={{ width: 50, height: 50 }}
            fontSize="large"
            theme={theme}
            color="neutral"
            className=" p-1 rounded-full"
          />
        </IconButton>
      )}
    </>
  );
};

export default MiddleButtons;
