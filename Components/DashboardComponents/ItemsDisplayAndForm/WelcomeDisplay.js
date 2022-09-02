import React from "react";
import { Paper } from "@mui/material";

const WelcomeDisplay = ({ windowWidth }) => {
  return (
    <>
      <div className={`py-6  `}>
        <Paper>
          <div>
            <h4 className={"text-violet text-center  text-[4rem]"}>welcome!</h4>
            <p className="text-center  mt-4">
              {windowWidth < 924
                ? 'click on the "+" button below to add Income'
                : "fill the form below to add Income/Expense"}
            </p>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default WelcomeDisplay;
