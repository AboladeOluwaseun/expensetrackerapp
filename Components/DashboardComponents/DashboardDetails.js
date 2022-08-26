import React from "react";
import BalanceAndAnalytics from "./BalanceAndAnalytics/BalanceAndAnalytics";
import ItemsDisplayAndForm from "./ItemsDisplayAndForm/ItemsDisplayAndForm";
const DashboardDetails = () => {
  return (
    <>
      <div className="rounded-lg  min-h-[100vh] lmd:grid  lmd:grid-rows-none  gap-3 lmd:grid-cols-mainlayout mt-6 lmd:min-h-[75vh]">
        <BalanceAndAnalytics />
        <ItemsDisplayAndForm />
      </div>
    </>
  );
};

export default DashboardDetails;
