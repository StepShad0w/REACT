import React from "react";
import "./Button.css";

const Button = ({ children, onClick, isActive }) => {
  let classes = "button";
  //const handleMouseEnter = () => console.log("entered")
  if (isActive) classes += " active";
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
    //<button className={isActive? "button active": "button"} onClick={onClick}>{children}</button>
  );
};

export default Button;
