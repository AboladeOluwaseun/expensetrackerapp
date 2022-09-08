import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Button from "./Button";
import Router from "next/router";
import InputField from "./InputField";
import SignedUpCheck from "./SignedUpCheck";
import AuthPageMessage from "./AuthPageMessage";
import { CircularProgress } from "@mui/material";
import { Alert } from "@mui/material";

const Register = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(true);

  const { signUp, logIn, currentUser, errmsg, isLoading, loggingIn } =
    useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    e.target.reset();
    if (!isSignedUp && (!email || !password || !userName)) {
      setError("Please enter a valid username, email, or password");
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    }

    if (isSignedUp) {
      logIn(email, password);
    }
    if (!isSignedUp) {
      signUp(email, password);
    }
  };
  console.log(currentUser);
  return (
    <>
      <div className="h-[100vh]">
        <div className="max-w-[85%] sm:max-w-[65%] md:max-w-[50%] lmd:max-w-[35%] xl:max-w-[30%] h-[60%] p-6  absolute top-0 bottom-0 left-0 right-0 m-auto rounded-lg ">
          <AuthPageMessage isSignedUp={isSignedUp} />
          {errmsg || error ? (
            <Alert severity="error">{error ? error : errmsg}</Alert>
          ) : (
            isLoading && (
              <div>
                <CircularProgress />
                <Alert severity="info">
                  {loggingIn ? "Logging In" : "Signing Up"}
                </Alert>
              </div>
            )
          )}
          <form onSubmit={submitHandler} className="mt-8  ">
            {!isSignedUp && (
              <InputField
                setValue={setUserName}
                type={"username"}
                placeholder={"Enter your desired username"}
              />
            )}
            <InputField
              setValue={setEmail}
              type={"email"}
              placeholder={"Enter your email"}
            />
            <InputField
              setValue={setPassword}
              type={"password"}
              placeholder={"Enter your password"}
            />
            <Button isSignedUp={isSignedUp} />
          </form>
          <SignedUpCheck
            isSignedUp={isSignedUp}
            setIsSignedUp={setIsSignedUp}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
