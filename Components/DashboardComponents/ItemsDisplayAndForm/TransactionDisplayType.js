import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { transactionTypeDisplay } from "../../../ReduxStore/transactionSlice";
import { useSelector } from "react-redux";

const TransactionDisplayType = ({ setFilteredTransactions }) => {
  const itemTypes = ["All", "Income", "Expense"];
  const dispatch = useDispatch();
  const filtredTransactionsState = useSelector(
    (state) => state.transactionslice.filtredTransactionsState
  );

  const transactionsFilterHandler = (type) => {
    dispatch(transactionTypeDisplay(type));
  };

  const itemTypeButtons = itemTypes.map((button, index) => {
    return (
      <li
        onClick={() => {
          transactionsFilterHandler(button);
        }}
        key={index}
        className=" w-[100%] py-2 text-center bg-slate-900 text-white active:text-black active:bg-white rounded-full"
      >
        {button}
      </li>
    );
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
