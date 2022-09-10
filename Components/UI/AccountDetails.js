import React from "react";
import { useAuth } from "../../context/AuthContext";
const AccountDetails = ({ show, setShow }) => {
  const { logOut } = useAuth();
  return (
    <>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="fixed cursor-pointer bg-black opacity-60 top-0 left-0 w-[100vw] h-[100vh] z-10"
      ></div>
      <div className="bg-white w-[40%] lmd:w-[20%] font-bold z-20 text-center  rounded-lg  fixed top-24 right-2">
        <p className="border-b-[#ebebeb] cursor-pointer py-6 border-b-solid border-b-2">
          email
        </p>
        <p
          onClick={() => {
            logOut();
          }}
          className="py-6 cursor-pointer"
        >
          Logout
        </p>
      </div>
    </>
  );
};

export default AccountDetails;
