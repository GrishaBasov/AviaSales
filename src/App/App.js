import React from "react";
import classes from "./App.module.scss";

import Logo from "../Logo";
import Tabs from "../Tabs";
import Filter from "../Filter";
import TicketsList from "../TicketsList";
import Button from "../Button";

function App() {
	return (
		<div className={classes["app-wrapper"]}>
			<Logo />
			<Tabs />
			<Filter />
			<TicketsList />
			<Button />
		</div>
	);
}

export default App;
