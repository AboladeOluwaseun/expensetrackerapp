import React from "react";

const Transaction = ({ name, amount, type }) => {
  const number = (number) => {
    return (Math.round(number * 100) / 100).toLocaleString();
  };
  return (
    <>
      <>
        <div className="grid grid-cols-item py-1 border-b-[1px] border-b-[#ebebeb] border-b-solid px-1">
          <div className="bg-white rounded-tl-lg rounded-bl-lg py-3 px-3 flex items-center justify-between ">
            <p>{name}</p>
            <p>&#8358;{number(amount)}</p>
          </div>

          <span
            className={`${
              type === "Income" ? "border-incomegreen" : "border-expensered"
            } border-4 border-solid`}
          ></span>
        </div>
      </>
    </>
  );
};

export default Transaction;
