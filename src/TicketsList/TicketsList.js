import React from "react";
import "./TicketsList.scss";
import Ticket from "../Ticket";

const TicketsList = () => {
  return (
    <div className={"ticket-list"}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};

export default TicketsList;
