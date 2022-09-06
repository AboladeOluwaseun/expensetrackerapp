import React from "react";

const SignedUpCheck = ({ isSignedUp, setIsSignedUp }) => {
  return (
    <>
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
    </>
  );
};

export default SignedUpCheck;
