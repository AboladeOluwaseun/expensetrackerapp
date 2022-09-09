import React from "react";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import Register from "../../Components/AuthComponents/Register";
import Dashboard from "../../Components/DashboardComponents/Dashboard";
const DashboardPage = () => {
  const { currentUser } = useAuth();

  return (
    <>
      {currentUser ? (
        <Dashboard></Dashboard>
      ) : (
        <Link href="/Auth/Register">Click to go back to login page</Link>
      )}
    </>
  );
};

export default DashboardPage;
