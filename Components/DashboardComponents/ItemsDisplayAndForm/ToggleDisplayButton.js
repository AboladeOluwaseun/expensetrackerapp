import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { IconButton } from "@mui/material";
import { createTheme } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";

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
      <div className=" max-w-[100%] mt-10 flex items-center justify-center space-x-5 sticky bottom-0 rounded-bl-none rounded-br-none bg-gray-900 rounded-lg text-center mx-auto">
        <IconButton onClick={() => {}}>
          <SettingsIcon
            sx={{ width: 30, height: 30 }}
            fontSize="large"
            theme={theme}
            color="neutral"
            className=" p-1 rounded-full"
          />
        </IconButton>

        {toggle ? (
          <IconButton
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <ReceiptIcon
              sx={{ width: 45, height: 45 }}
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
              sx={{ width: 45, height: 45 }}
              fontSize="large"
              theme={theme}
              color="neutral"
              className=" p-1 rounded-full"
            />
          </IconButton>
        )}

        <IconButton onClick={() => {}}>
          <HistoryIcon
            sx={{ width: 30, height: 30 }}
            fontSize="large"
            theme={theme}
            color="neutral"
            className=" p-1 rounded-full"
          />
        </IconButton>
      </div>
    </>
  );
};

export default ToggleDisplayButton;
