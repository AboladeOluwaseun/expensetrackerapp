import React, { useState, useEffect } from "react";
import TransactionDisplayType from "./TransactionDisplayType";
import TransactionsDisplay from "./TransactionsDisplay";
import ToggleDisplayButton from "./ToggleDisplayButton";
import EntryForm from "./EntryForm";

const ItemsDisplayAndForm = () => {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState("");

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

  return (
    <>
      <div className="mt-10 relative lmd:mt-0 lmd:gap-2 grid grid-rows-itemsandformresponsive lmd:grid-rows-itemsandform">
        <TransactionDisplayType
          filteredTransactions={filteredTransactions}
          setFilteredTransactions={setFilteredTransactions}
        />

        <TransactionsDisplay
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