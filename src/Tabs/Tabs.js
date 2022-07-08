import React, { useState } from "react";
import "./Tabs.scss";

const Tabs = () => {
  const [classNames, setCurrentTab] = useState([
    "button-cheap selected",
    "button-fast",
    "button-optimal",
  ]);

  const select = (e) => {
    let copyOfClassNames = [...classNames];
    let newArr = copyOfClassNames.map((item) => item.replace("selected", ""));
    newArr[e.target.id] += " selected";
    setCurrentTab([...newArr]);
  };

  return (
    <div className={"buttons-wrapper"}>
      <button id={"0"} className={classNames[0]} onClick={select}>
        Самый дешёвый
      </button>
      <button id={"1"} className={classNames[1]} onClick={select}>
        Самый быстрый
      </button>
      <button id={"2"} className={classNames[2]} onClick={select}>
        Оптимальный
      </button>
    </div>
  );
};
export default Tabs;
