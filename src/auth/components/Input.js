import React from "react";

const Input = ({ type, placeholder, width, inputType }) => {
  return (
    <input
      type={type}
      className={`p-2 ${width ? width : "w-full"} ${
        inputType === "underline"
          ? "border-b-2 bg-transparent"
          : "rounded-lg border-1"
      } border-secondary my-2 outline-none font-bold`}
      placeholder={placeholder}
    />
  );
};

export default Input;
