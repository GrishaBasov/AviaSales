import React from "react";
import { connect } from "react-redux";
import classes from "./Tabs.module.scss";
import { tabChange } from "../Redux/actions";

function Tabs({tabChange, state}) {

	let tabClassNames = [`${classes["button-cheap"]} ${classes.selected}`,
		classes["button-fast"],
		classes["button-optimal"],
	];

	if (state.tab === "fast") {
		tabClassNames = [`${classes["button-cheap"]}`,
			`${classes["button-fast"]} ${classes.selected}`,
			classes["button-optimal"],
		];
	}
	if (state.tab === "optimal") {
		tabClassNames = [`${classes["button-cheap"]}`,
			classes["button-fast"],
			`${classes["button-optimal"]} ${classes.selected} `,
		];
	}

	return (
		<div className={classes["buttons-wrapper"]}>
			<button
				id="0"
				className={tabClassNames[0]}
				onClick={(e) => {
					tabChange(e);
				}}
			>
        Самый дешёвый
			</button>
			<button
				id="1"
				className={tabClassNames[1]}
				onClick={(e) => {
					tabChange(e);
				}}
			>
        Самый быстрый
			</button>
			<button
				id="2"
				className={tabClassNames[2]}
				onClick={(e) => {
					tabChange(e);
				}}
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
