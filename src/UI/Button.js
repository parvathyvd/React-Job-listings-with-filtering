import React from "react";

const Button = ({ children, type, status, text }) => {
  return (
    <button type={type} className={status} value={text}>
      {children}
    </button>
  );
};

export default Button;
