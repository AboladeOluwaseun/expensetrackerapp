import React from "react";
import { useSelector } from "react-redux";

const BalanceDisplay = () => {
  const balance = useSelector((state) => state.transactionslice.balance);
  const incomeTotal = useSelector(
    (state) => state.transactionslice.incomeTotal
  );
  const expenseTotal = useSelector(
    (state) => state.transactionslice.expenseTotal
  );
  return (
    <>
      <div className=" bg-violet rounded-lg text-white ">
        <div className="max-w-[95%]  py-3 mx-auto">
          <div className="lmd:text-[1.5rem] font-bold">
            <p>Total Balance</p>
            <h2 className="text-[2rem] lmd:text-[3rem]">&#8358;{balance}</h2>
          </div>
          <div className="flex font-bold mt-9 text-[0.8rem] lmd:mt-16 lmd:text-[1.5rem] items-center justify-between">
            <div>
              <p>Income</p>
              <h2>&#8358;{incomeTotal}</h2>
            </div>
            <div>
              <p>Expense</p>
              <h2>&#8358;{expenseTotal}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BalanceDisplay;
