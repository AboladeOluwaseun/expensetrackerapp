import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="h-[100vh]">
        <div className="w-[85%]  h-[60%] p-6  absolute top-0 bottom-0 left-0 right-0 m-auto rounded-lg ">
          <div className="text-start">
            <h2 className="font-bold text-[1.7rem]">
              Welcome Back, <br />
              Kindly <span className="text-violet">Login</span> Now
            </h2>
            <p>
              If You're new, Create a new account
              <span className="text-violet">
                <Link href="/"> here</Link>
              </span>
            </p>
          </div>

          <form className="mt-10  ">
            <input
              className="w-full border-darkgrey border-solid border-[1px] h-8 py-5 px-2 rounded-lg focus:outline-none"
              type="email"
              name="email"
              id=""
              placeholder="Enter your email"
            />
            <input
              className="block w-full h-8 border-darkgrey border-solid border-[1px] py-5 px-2 rounded-lg focus:outline-none mt-4 "
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
            <button
              className="block w-full h-10 rounded-lg bg-violet  text-white mt-4"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
