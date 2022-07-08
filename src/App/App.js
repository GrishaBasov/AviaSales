import React from "react";
import "./App.scss";

import Logo from "../Logo";
import Tabs from "../Tabs";
import Filter from "../Filter";
import TicketsList from "../TicketsList";
import Button from "../Button";

const App = () => {
  return (
    <div className={"app-wrapper"}>
      <Logo />
      <Tabs />
      <Filter />
      <TicketsList />
      <Button />
    </div>
  );
};

export default App;
