import React from "react";
import { useSelector } from "react-redux";

const WelcomeDisplay = () => {
  const transactions = useSelector(
    (state) => state.transactionslice.transactions
  );
  const searchedTransactions = useSelector(
    (state) => state.transactionslice.searchedTransactions
  );

  return (
    <>
      <div className="py-6 bg-white rounded-lg lmd:mt-0 mt-8">
        <h4 className="text-violet text-center  text-[4rem]">
          {searchedTransactions.length <= 0 && transactions.length >= 1
            ? "Ooops"
            : "Welcome"}
        </h4>
        <p className="text-center mt-4">
          {searchedTransactions.length <= 0 && transactions.length >= 1
            ? "the transaction you searched for is not available"
            : "Click the " + " button below to add an Income"}
        </p>
      </div>
    </>
  );
};

export default WelcomeDisplay;
