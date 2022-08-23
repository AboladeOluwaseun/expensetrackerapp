import React from "react";

import BalanceAnalytics from "./BalanceAndAnalytics/BalanceAnalytics";

const DashboardDetails = () => {
  return (
    <>
      <div className="rounded-lg  min-h-[75vh] grid grid-rows-mainlayoutsmall lmd:grid-rows-none  gap-3 lmd:grid-cols-mainlayout mt-6 lmd:min-h-[75vh]">
        <BalanceAnalytics></BalanceAnalytics>
        <div className="bg-gray-900 rounded-lg">
          <div>income,expense or all</div>
          <div>expenses display</div>
          <div>entry form</div>
        </div>
      </div>
    </>
  );
};

export default DashboardDetails;
