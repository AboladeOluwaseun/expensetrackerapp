import React, { useState, useEffect } from "react";
import ItemDisplayType from "./ItemDisplayType";
import ItemsDisplay from "./ItemsDisplay";
import ToggleDisplayButton from "./ToggleDisplayButton";
import EntryForm from "./EntryForm";
import { useSelector } from "react-redux";

const ItemsDisplayAndForm = () => {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const transactions = useSelector(
    (state) => state.transactionslice.transactions
  );
  const searchedTransactions = useSelector(
    (state) => state.transactionslice.searchedTransactions
  );
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  useEffect(() => {
    setFilteredTransactions(searchedTransactions);
  }, [searchedTransactions]);

  return (
    <>
      <div className="mt-10 relative lmd:mt-0 lmd:gap-2 grid grid-rows-itemsandformresponsive lmd:grid-rows-itemsandform">
        <ItemDisplayType
          filteredTransactions={filteredTransactions}
          setFilteredTransactions={setFilteredTransactions}
        />

        <ItemsDisplay
          toggle={toggle}
          setToggle={setToggle}
          filteredTransactions={filteredTransactions}
          setFilteredTransactions={setFilteredTransactions}
        />
        {windowWidth > 924 && (
          <EntryForm setToggle={setToggle} toggle={toggle} />
        )}
      </div>
      {windowWidth < 924 && (
        <ToggleDisplayButton setToggle={setToggle} toggle={toggle} />
      )}
    </>
  );
};

export default ItemsDisplayAndForm;
