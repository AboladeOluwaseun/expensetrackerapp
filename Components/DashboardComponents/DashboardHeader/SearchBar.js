import React from "react";
import { useDispatch } from "react-redux";
import { searchTransaction } from "../../../ReduxStore/transactionSlice";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTransactionHandler = (searchParams) => {
    dispatch(searchTransaction(searchParams));
  };

  return (
    <>
      <div className=" relative">
        <input
          onKeyUp={(e) => {
            searchTransactionHandler(e.target.value);
          }}
          className="w-[20rem]  lmd:block border-darkgrey border-solid border-[1px] h-8 py-6 px-4 rounded-[1.5rem] focus:outline-none"
          type="search"
          name="search"
          id=""
          placeholder="search expense or income"
        />
        <SearchIcon className=" cursor-pointer absolute top-4 right-4" />
      </div>
    </>
  );
};

export default SearchBar;
