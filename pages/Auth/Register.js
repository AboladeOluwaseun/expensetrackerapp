import React from "react";
import Register from "../../Components/AuthComponents/Register";
import Dashboard from "../../Components/DashboardComponents/Dashboard";
import { useAuth } from "../../context/AuthContext";

const RegisterPage = () => {
  const { currentUser } = useAuth();
  return (
    <>
      {!currentUser && <Register></Register>}
      {currentUser && <Dashboard></Dashboard>}
    </>
  );
};

export default RegisterPage;
