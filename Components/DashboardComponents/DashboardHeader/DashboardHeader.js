import React from "react";
import Image from "next/image";
import avatar from "../../../Assets/AuthAssets/image-avatar.png";

const DashboardHeader = () => {
  return (
    <div className="pt-8  flex items-center justify-between">
      {/* <h2 className="hidden lmd:block text-[2rem] font-bold">Logo</h2> */}
      <div>
        <h1 className="text-[2.5rem] font-bold">
          Hello <span className="text-violet">User</span>,
        </h1>
        <p className="text-[1.3rem]"> Welcome</p>
      </div>

      <input
        className="w-[20rem] hidden md:block lmd:block border-darkgrey border-solid border-[1px] h-8 py-6 px-4 rounded-[1.5rem] focus:outline-none"
        type="search"
        name="search"
        id=""
        placeholder="search expense or income"
      />
      <div className="h-[3rem] cursor-pointer rounded-full border-2 border-violet border-solid active:scale-105 w-[3rem]">
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
