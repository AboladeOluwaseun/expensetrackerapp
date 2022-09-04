import React from "react";
import { Paper } from "@mui/material";

const WelcomeDisplay = ({ windowWidth }) => {
  return (
    <>
      <div className="py-6 bg-white rounded-lg lmd:mt-0 mt-8">
        <h4 className="text-violet text-center  text-[4rem]">Welcome</h4>
        <p className="text-center  mt-4">
          Click the "+" button below to add an Income
        </p>
      </div>
    </>
  );
};

export default WelcomeDisplay;
