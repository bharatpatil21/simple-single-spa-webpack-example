import React from "react";

const Button = ({ title, color, textColor, width, handleClick }) => {
  return (
    <button
      className={`${
        width ? width : "w-full"
      } ${color} rounded py-2 my-1 text-white shadow-xl`}
      onClick={() => handleClick()}
    >
      <span className={textColor ? textColor : "bg-black-700"}>{title}</span>
    </button>
  );
};

export default Button;
