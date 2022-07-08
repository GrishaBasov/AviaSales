import React from "react";
import "./Logo.scss";
import logo from "./img/Logo.png";

const Logo = () => {
  return <img className={"logo"} src={logo} alt="логотип компании" />;
};

export default Logo;
