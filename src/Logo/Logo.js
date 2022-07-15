import React from "react";
import classes from "./Logo.module.scss";
import logo from "./img/Logo.png";

function Logo() {
	return <img className={classes.logo} src={logo} alt="логотип компании" />;
}

export default Logo;
