import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="md:max-w-[80%] h-[90vh] mt-8 mx-auto bg-white text-center">
        <div className="w-[20rem] h-[20rem] rounded-t-full rounded-b-full animate-pulse absolute left-[-7%] top-[-7%] bg-violet"></div>
        <div className="text-black max-w-[80%]  min-h-[70%] relative top-[20%] my-auto mx-auto text-center">
          <h1 className="text-[3rem] font-semibold ">
            The Best way <br /> to Manage Your <br />{" "}
            <span className="text-violet"> Expenses</span>
          </h1>
          <h2 className="font-bold mt-8 text-[1.4rem]">
            MY
            <span className="text-violet">MONI APP</span>
          </h2>
          <Link href="/Auth/Register">
            <button className="mt-16 bg-violet animate-pulse text-white px-8 active:scale-75 py-4 w-100% text-[1.7rem] rounded-full ">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
