import React from "react";
import { IconButton } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import { useDispatch, useSelector } from "react-redux";
import { displaySearchBar } from "../../../ReduxStore/transactionSlice";
import SearchBar from "../DashboardHeader/SearchBar";
import SearchIcon from "@mui/icons-material/Search";
import MiddleButtons from "./MiddleButtons";
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
  const dispatch = useDispatch();
  const openSearchBar = useSelector(
    (state) => state.transactionslice.openSearch
  );
  return (
    <>
      {openSearchBar && !toggle ? (
        <div className="fixed bottom-18">
          <SearchBar />
        </div>
      ) : (
        ""
      )}
      <div
        className={`max-w-[100%] ${
          toggle ? "mt-6" : "mt-36"
        } flex items-center justify-center space-x-5 sticky bottom-0 rounded-bl-none rounded-br-none bg-gray-900 rounded-lg text-center mx-auto`}
      >
        <IconButton
          onClick={() => {
            dispatch(displaySearchBar());
          }}
        >
          <SearchIcon
            sx={{ width: 35, height: 35 }}
            fontSize="large"
            theme={theme}
            color="neutral"
            className=" p-1 rounded-full"
          />
        </IconButton>

        <MiddleButtons setToggle={setToggle} toggle={toggle} />

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
