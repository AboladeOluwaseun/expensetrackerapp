import React from "react";

const NoIncomeError = () => {
  return (
    <>
      <div className="py-6">
        <h4 className="text-violet text-center  text-[4rem]">Ooops!</h4>
        <p className="text-center  mt-4">
          You must have an Income before adding expense
        </p>
      </div>
    </>
  );
};

export default NoIncomeError;
