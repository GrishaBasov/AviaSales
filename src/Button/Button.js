import React from "react";
import { connect } from "react-redux";
import classes from "./Button.module.scss";
import { showNewFiveTickets } from "../Redux/actions";

function Button({ showNewFiveTickets, state }) {
	let className = classes["button-show-five-more"];
	if (state.stop === false) {
		className = classes["button-show-five-more-spinner"];
	}

	return (
		<button onClick={showNewFiveTickets} className={className}>
      показать ещё 5 билетов!
		</button>
	);
}

const mapStateProps = (state) => ({
	state,
});

const mapDispatchToProps = (dispatch) => ({
	showNewFiveTickets: () => dispatch(showNewFiveTickets()),
});

export default connect(mapStateProps, mapDispatchToProps)(Button);
