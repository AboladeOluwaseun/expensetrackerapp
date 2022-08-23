import React from "react";

const BalanceDisplay = () => {
  return (
    <>
      <div className="bg-violet rounded-lg text-white ">
        <div className="max-w-[95%]  py-3 mx-auto">
          <div>
            <p>Total Balance</p>
            <h2 className="text-[2rem]">$2,000</h2>
          </div>
          <div className="flex mt-6 text-[0.8rem] items-center justify-between">
            <div>
              <p>Income</p>
              <h2>$1000</h2>
            </div>
            <div>
              <p>Expense</p>
              <h2>$1000</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BalanceDisplay;
