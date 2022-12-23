import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  ml?: string;
  bg?: string;
  border?: string;
  color?: string;
};

const Button = ({ children, ml, bg, border, color }: ButtonProps) => {
  return (
    <button
      className={`p-2 px-6 ${bg} font-bold border-2 border-Primary ${border} ${color} rounded hover:shadow-xl ${ml}`}
    >
      {children}
    </button>
  );
};

export default Button;
