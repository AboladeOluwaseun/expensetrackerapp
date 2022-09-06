import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Button from "./Button";
import Router from "next/router";
import InputField from "./InputField";
import SignedUpCheck from "./SignedUpCheck";
import AuthPageMessage from "./AuthPageMessage";

const Register = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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
    }
    if (isSignedUp) {
      setIsLoading(true);
      try {
        await signIn(email, password);
        console.log(currentUser);
        if (currentUser) {
          console.log(currentUser);
          Router.push("/Dashboard/DashboardPage");
        }
      } catch (err) {
        setError("incorrect email or password");
        setIsLoading(false);
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
        <div className="max-w-[85%] sm:max-w-[65%] md:max-w-[50%] lmd:max-w-[35%] xl:max-w-[30%] h-[60%] p-6  absolute top-0 bottom-0 left-0 right-0 m-auto rounded-lg ">
          <AuthPageMessage isSignedUp={isSignedUp} />
          {error ? (
            <div className="mt-4 text-center bg-grey rounded-lg border-red-600 border-solid border-2 ">
              {error}
            </div>
          ) : (
            ""
          )}
          {isLoading && <p>is loading....</p>}
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
