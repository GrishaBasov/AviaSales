import React from "react";
import { connect } from "react-redux";
import classes from "./Tabs.module.scss";
import { tabChange } from "../actions";

function Tabs({ tabChange, state }) {
	return (
		<div className={classes["buttons-wrapper"]}>
			<button
				id="0"
				className={state.tabClassNames[0]}
				onClick={(e) => tabChange(e)}
			>
        Самый дешёвый
			</button>
			<button
				id="1"
				className={state.tabClassNames[1]}
				onClick={(e) => tabChange(e)}
			>
        Самый быстрый
			</button>
			<button
				id="2"
				className={state.tabClassNames[2]}
				onClick={(e) => tabChange(e)}
			>
        Оптимальный
			</button>
		</div>
	);
}

const mapStateProps = (state) => ({
	state,
});

const mapDispatchToProps = (dispatch) => ({
	tabChange: (e) => dispatch(tabChange(e)),
});

export default connect(mapStateProps, mapDispatchToProps)(Tabs);
