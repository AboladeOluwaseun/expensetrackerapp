import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../UI/Button";

const TransactionDisplayType = ({ setFilteredTransactions }) => {
  const itemTypes = [{ name: "All" }, { name: "Income" }, { name: "Expense" }];
  const filtredTransactionsState = useSelector(
    (state) => state.transactionslice.filtredTransactionsState
  );

  const itemTypeButtons = itemTypes.map((button, index) => {
    return <Button name={button.name} key={index} />;
  });

  useEffect(() => {
    setFilteredTransactions(filtredTransactionsState);
  }, [filtredTransactionsState]);
  return (
    <>
      <div>
        <ul className="flex  border-solid border-black space-x-3 items-center justify-between ">
          {itemTypeButtons}
        </ul>
      </div>
    </>
  );
};

export default TransactionDisplayType;
