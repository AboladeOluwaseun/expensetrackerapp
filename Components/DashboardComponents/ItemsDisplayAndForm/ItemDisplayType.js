import React from "react";

const ItemDisplayType = () => {
  const itemTypes = ["All", "Income", "Expense"];
  const itemTypeDisplay = itemTypes.map((item, index) => {
    return (
      <li
        key={index}
        className=" w-[100%] py-2 text-center bg-slate-900 text-white active:text-black  active:bg-white rounded-full"
      >
        {item}
      </li>
    );
  });
  return (
    <>
      <ul className="flex  border-solid border-black space-x-3 items-center justify-between ">
        {itemTypeDisplay}
      </ul>
    </>
  );
};

export default ItemDisplayType;
