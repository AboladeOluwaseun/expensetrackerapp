import React from "react";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import DashboardDetails from "./DashboardDetails";
import MenuBar from "./MenuBar";
const Dashboard = () => {
  return (
    <>
      <div className="bg-[#ebebeb] max-h-[100%]">
        <div className=" max-w-[90%] lmd:max-w-[90%]  xsm:max-w-[80%] sm:max-w-[70%] min-h-[100vh]   lmd:py-2  box-border mx-auto">
          <DashboardHeader></DashboardHeader>
          <div className="lmd:grid lmd:grid-cols-layout lmd:gap-4 my-auto">
            <MenuBar></MenuBar>
            <DashboardDetails></DashboardDetails>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
