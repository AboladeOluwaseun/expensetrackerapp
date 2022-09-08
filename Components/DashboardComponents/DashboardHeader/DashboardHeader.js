import React from "react";
import Image from "next/image";
import avatar from "../../../Assets/AuthAssets/image-avatar.png";
import SearchBar from "./SearchBar";
import { useAuth } from "../../../context/AuthContext";
const DashboardHeader = () => {
  const { logOut } = useAuth();
  return (
    <div className="pt-4 flex items-center justify-between">
      {/* <h2 className="hidden lmd:block text-[2rem] font-bold">Logo</h2> */}
      <div>
        <h1 className="text-[2.5rem] font-bold">
          Hello <span className="text-violet">User</span>,
        </h1>
        <p className="text-[1.3rem]"> Welcome</p>
      </div>

      <div className="hidden lmd:block">
        <SearchBar />
      </div>

      <div
        onClick={logOut}
        className="h-[3rem] cursor-pointer rounded-full border-2 border-violet border-solid active:scale-105 w-[3rem]"
      >
        <Image
          width={100}
          height={100}
          layout="intrinsic"
          src={avatar}
          alt="login-illustration"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
