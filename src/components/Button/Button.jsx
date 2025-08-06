import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ children, onClick, to, className }) {
  const buttonClasses = `mf-button ${className || ""}`.trim();

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
