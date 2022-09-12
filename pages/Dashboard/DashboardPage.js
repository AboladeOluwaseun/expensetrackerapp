import React from "react";
import { useAuth } from "../../context/AuthContext";
import Register from "../../Components/AuthComponents/Register";
import Dashboard from "../../Components/DashboardComponents/Dashboard";
const DashboardPage = () => {
  const { currentUser } = useAuth();

  return <>{currentUser && <Dashboard></Dashboard>}</>;
};

export default DashboardPage;
