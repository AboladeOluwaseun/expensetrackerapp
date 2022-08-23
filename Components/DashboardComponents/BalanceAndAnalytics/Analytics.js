import React from "react";

const Analytics = () => {
  return (
    <>
      <div className="  bg-yellowish text-white rounded-lg">
        <div className="max-w-[95%]  py-3 mx-auto">
          <div>
            <p>Total Balance</p>
            <h2 className="text-[2rem]">$2,000</h2>
          </div>
          <div className="flex mt-6 items-center justify-between">
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

export default Analytics;
