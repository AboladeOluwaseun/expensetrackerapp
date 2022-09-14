import React from "react";
import { useDispatch } from "react-redux";
import { transactionTypeDisplay } from "../../ReduxStore/transactionSlice";
const Button = ({ name }) => {
  const dispatch = useDispatch();
  const transactionsFilterHandler = (type) => {
    dispatch(transactionTypeDisplay(type));
  };
  return (
    <>
      <li
        onClick={() => {
          transactionsFilterHandler(name);
        }}
        className={`w-[100%] cursor-pointer py-2 text-center 
          active:bg-white bg-slate-900 text-white active:text-black rounded-full`}
      >
        {name}
      </li>
    </>
  );
};

export default Button;
