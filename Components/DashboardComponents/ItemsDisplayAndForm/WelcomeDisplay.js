import React from "react";
import { Paper } from "@mui/material";

const WelcomeDisplay = ({ windowWidth }) => {
  return (
    <>
      <Paper>
        <div className={`py-6 ${windowWidth < 924 ? "mt-10" : "mt-0"} `}>
          <h4 className={"text-violet text-center  text-[4rem]"}>welcome!</h4>
          <p className="text-center  mt-4">
            {windowWidth < 924
              ? 'click on the "+" button below to add Income'
              : "fill the form below to add Income/Expense"}
          </p>
        </div>
      </Paper>
    </>
  );
};

export default WelcomeDisplay;
