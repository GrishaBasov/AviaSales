import React from "react";
import "./Filter.scss";

const Filter = () => {
  return (
    <div className={"filter-wrapper"}>
      <header className={"filter-header"}>количество пересадок</header>
      <label className={"check"}>
        <input type={"checkbox"} className={"check__input"} />
        <span className={"check__box"} />
        <span className={"check__description"}>Все</span>
      </label>
      <label className={"check"}>
        <input type={"checkbox"} className={"check__input"} />
        <span className={"check__box"} />
        <span className={"check__description"}>Без пересадок</span>
      </label>
      <label className={"check"}>
        <input type={"checkbox"} className={"check__input"} />
        <span className={"check__box"} />
        <span className={"check__description"}>1 пересадка</span>
      </label>
      <label className={"check"}>
        <input type={"checkbox"} className={"check__input"} />
        <span className={"check__box"} />
        <span className={"check__description"}>2 пересадки</span>
      </label>
      <label className={"check"}>
        <input type={"checkbox"} className={"check__input"} />
        <span className={"check__box"} />
        <span className={"check__description"}>3 пересадки</span>
      </label>
    </div>
  );
};

export default Filter;
