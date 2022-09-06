import React from "react";

const InputField = ({ setValue, type, placeholder }) => {
  return (
    <>
      <input
        className="w-full border-darkgrey border-solid border-[1px] h-8 py-5 px-2 rounded-lg focus:outline-none mt-6"
        type={type}
        name={type}
        id={type}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};

export default InputField;
