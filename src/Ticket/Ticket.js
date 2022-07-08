import React from "react";
import "./Ticket.scss";
import AviaCompanyLogo from "./img/S7 Logo.png";

const Ticket = () => {
  return (
    <div className={"ticket-wrapper"}>
      <div className={"header"}>
        <div className={"price"}>13400 Р</div>
        <img src={AviaCompanyLogo} alt="название авиакомпании" />
      </div>
      <div className={"one-way"}>
        <div>
          <div className={"route "}>MOW - SPB</div>
          <div className={"departure-time"}>10:30 - 11:40</div>
        </div>
        <div>
          <div className={"in-the-way"}>в пути</div>
          <div className={"time-in-the-sky"}>21ч:15м</div>
        </div>
        <div>
          <div className={"number-of-transfers"}>2 пересадки</div>
          <div className={"cities-transfer"}>MSK, SPB</div>
        </div>
      </div>
      <div className={"another-way"}>
        <div>
          <div className={"route "}>MOW - SPB</div>
          <div className={"departure-time"}>10:30 - 11:40</div>
        </div>
        <div>
          <div className={"in-the-way"}>в пути</div>
          <div className={"time-in-the-sky"}>21ч:15м</div>
        </div>
        <div>
          <div className={"number-of-transfers"}>2 пересадки</div>
          <div className={"cities-transfer"}>MSK, SPB</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
