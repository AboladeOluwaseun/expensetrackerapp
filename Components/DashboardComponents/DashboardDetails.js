import React from "react";
import BalanceAndAnalytics from "./BalanceAndAnalytics/BalanceAndAnalytics";
import TransactionsDisplayAndForm from "./ItemsDisplayAndForm/TransactionsDisplayAndForm";
const DashboardDetails = () => {
  return (
    <>
      <div className="rounded-lg lmd:grid lmd:grid-rows-none  gap-3 lmd:grid-cols-mainlayout mt-6 lmd:min-h-[75vh]">
        <BalanceAndAnalytics />
        <TransactionsDisplayAndForm />
      </div>
    </>
  );
};

export default DashboardDetails;
