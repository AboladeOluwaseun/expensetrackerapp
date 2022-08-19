import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import loginimg from "../../Assets/AuthAssets/Login-bro.png";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(true);

  const { signUp, signIn, currentUser } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!isSignedUp && (!email || !password || !userName)) {
      setError("Please enter a valid username, email, or password");
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    }
    if (password.length <= 5 || !email) {
      setError(
        "password must be at least 6 characters long or ensure you enter a valid email"
      );
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    }
    if (isSignedUp) {
      try {
        await signIn(email, password);
      } catch (err) {
        setError("incorrect email or password");
        setInterval(() => {
          setError(null);
        }, 2000);
      }
      return;
    }
    await signUp(email, password);
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
          <div className="text-start mt-8">
            {isSignedUp ? (
              <h2 className="font-bold text-[1.7rem]">
                Welcome Back, <br />
                Kindly <span className="text-violet">Login</span> below
              </h2>
            ) : (
              <h2 className="font-bold text-[1.7rem]">
                Hi,Welcome. <br />
                Kindly <span className="text-violet">Register</span> below.
              </h2>
            )}
          </div>
          {error ? (
            <div className="mt-4 text-center bg-grey rounded-lg border-red-600 border-solid border-2 ">
              {error}
            </div>
          ) : (
            ""
          )}
          <form onSubmit={submitHandler} className="mt-8  ">
            {!isSignedUp ? (
              <input
                className="w-full border-darkgrey border-solid border-[1px] h-8 py-5 px-2 rounded-lg focus:outline-none"
                type="text"
                name="username"
                id="username"
                placeholder="Enter a desired username"
                onChange={(e) => setUserName(e.target.value)}
              />
            ) : (
              ""
            )}
            <input
              className="w-full border-darkgrey border-solid border-[1px] h-8 py-5 px-2 rounded-lg focus:outline-none mt-6"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="block w-full h-8 border-darkgrey border-solid border-[1px] py-5 px-2 rounded-lg focus:outline-none mt-6 "
              type="password"
              name=""
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="block w-full h-10 rounded-lg bg-violet  text-white mt-6"
              type="submit"
            >
              {isSignedUp ? "Login" : "Signup"}
            </button>
          </form>
          <p className="mt-4">
            {isSignedUp
              ? `Don't have an account? Signup`
              : "Already have an account? Login"}
            <span
              onClick={() => {
                setIsSignedUp(!isSignedUp);
              }}
              className="text-violet underline"
            >
              here
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
