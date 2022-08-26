import React from "react";

const Item = ({ name, amount }) => {
  return (
    <>
      <>
        <div className="grid grid-cols-item py-1 border-b-[1px] border-b-[#ebebeb] border-b-solid px-1">
          <div className="bg-white rounded-tl-lg rounded-bl-lg py-3 px-3 flex items-center justify-between ">
            <p>{name}</p>
            <p>${amount}</p>
          </div>
          <span className="bg-red  border-incomegreen border-4 border-solid"></span>
        </div>
      </>
    </>
  );
};

export default Item;
