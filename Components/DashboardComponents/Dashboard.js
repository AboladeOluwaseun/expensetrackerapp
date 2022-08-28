import React from "react";
import { useAuth } from "../../context/AuthContext";
import Router from "next/router";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import DashboardDetails from "./DashboardDetails";
import MenuBar from "./MenuBar";
const Dashboard = () => {
  const { logOut, currentUser } = useAuth();

  const logOutHandler = async (e) => {
    e.preventDefault();
    logOut();
    if (!currentUser) {
      console.log(currentUser);
      await Router.push("/Auth/Register");
    }
  };

  return (
    <>
      <div className="bg-[#ebebeb] max-h-[100%]">
        <div className=" max-w-[90%]  lmd:min-h-[100vh]  lmd:py-6  box-border mx-auto">
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
