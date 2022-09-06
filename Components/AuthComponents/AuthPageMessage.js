import React from "react";

const AuthPageMessage = ({ isSignedUp }) => {
  return (
    <>
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
    </>
  );
};

export default AuthPageMessage;
