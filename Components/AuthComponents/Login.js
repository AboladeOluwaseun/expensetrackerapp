import React from "react";
import Link from "next/link";
import Image from "next/image";
import loginimg from "../../Assets/AuthAssets/Login-bro.png";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const submitHandler = () => {
    e.preventDefault();
    const { signIn } = useAuth();
  };
  return (
    <>
      <div className="h-[100vh]">
        <Image
          width={200}
          height={200}
          layout="intrinsic"
          src={loginimg}
          alt="login-illustration"
        />
        <div className="max-w-[85%] sm:max-w-[65%] md:max-w-[50%] lmd:max-w-[35%] xl:max-w-[30%] h-[60%] p-6  absolute top-0 bottom-0 left-0 right-0 m-auto rounded-lg ">
          <div className="text-start mt-10">
            <h2 className="font-bold text-[1.7rem]">
              Welcome Back, <br />
              Kindly <span className="text-violet">Login</span> Now
            </h2>
          </div>

          <form onSubmit={submitHandler} className="mt-8  ">
            <input
              className="w-full border-darkgrey border-solid border-[1px] h-8 py-5 px-2 rounded-lg focus:outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <input
              className="block w-full h-8 border-darkgrey border-solid border-[1px] py-5 px-2 rounded-lg focus:outline-none mt-6 "
              type="password"
              name=""
              id="password"
              placeholder="Password"
            />
            <button
              className="block w-full h-10 rounded-lg bg-violet  text-white mt-6"
              type="submit"
            >
              Login
            </button>
          </form>
          <p className="mt-4">
            If You're new, Create an account
            <span className="text-violet underline">
              <Link href="/Auth/Register"> here</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
