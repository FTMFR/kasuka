import React from "react";
import "./logo.scss";

const Logo = ({color}) => {
  return (
    <div className="logo">
      <img src="./assets/logo.png" alt="logo" />
      <p className={color}>KASUKA</p>
    </div>
  );
};

export default Logo;
