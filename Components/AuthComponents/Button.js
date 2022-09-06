import React from "react";

const Button = ({ isSignedUp }) => {
  return (
    <>
      <button
        className="block w-full h-10 rounded-lg bg-violet  text-white mt-6"
        type="submit"
      >
        {isSignedUp ? "Login" : "Signup"}
      </button>
    </>
  );
};

export default Button;
