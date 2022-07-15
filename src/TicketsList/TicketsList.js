import React, { useEffect } from "react";
import { connect } from "react-redux";
import classes from "./TicketsList.module.scss";
import Ticket from "../Ticket";
import { getSessionId, getTickets } from "../Services/Services";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

function TicketsList({ getSessionId, getTickets, state }) {
	let id = 0;

	useEffect(() => {
		getSessionId();
	}, []);

	useEffect(() => {
		getTickets(state.id);
	}, [state.id, state.counter]);

	const elements = (state) => {
		let newArr = [];
		// все
		if (state.tickets !== 0) {
			if (state.filters[0] === true) {
				newArr = [...state.tickets];
			}
			// без пересадок
			if (
				state.filters[1]
        && !state.filters[2]
        && !state.filters[3]
        && !state.filters[4]
			) {
				newArr = state.tickets.filter(
					(item) => item.segments[0].stops.length === 0
            || item.segments[1].stops.length === 0,
				);
			}
			// c одной пересадкой
			if (
				!state.filters[1]
        && state.filters[2]
        && !state.filters[3]
        && !state.filters[4]
			) {
				newArr = state.tickets.filter(
					(item) => item.segments[0].stops.length === 1
            || item.segments[1].stops.length === 1,
				);
			}
			// две пересадки
			if (
				!state.filters[1]
        && !state.filters[2]
        && state.filters[3]
        && !state.filters[4]
			) {
				newArr = state.tickets.filter(
					(item) => item.segments[0].stops.length === 2
            || item.segments[1].stops.length === 2,
				);
			}
			// три пересадки
			if (
				!state.filters[1]
        && !state.filters[2]
        && !state.filters[3]
        && state.filters[4]
			) {
				newArr = state.tickets.filter(
					(item) => item.segments[0].stops.length === 3
            || item.segments[1].stops.length === 3,
				);
			}
			// без пересадок и с одной
			if (
				state.filters[1]
        && state.filters[2]
        && !state.filters[3]
        && !state.filters[4]
			) {
				newArr = state.tickets.filter(
					(item) => item.segments[0].stops.length <= 1
            || item.segments[1].stops.length <= 1,
				);
			}
			// без пересадок и с одной и двумя
			if (
				state.filters[1]
        && state.filters[2]
        && state.filters[3]
        && !state.filters[4]
			) {
				newArr = state.tickets.filter(
					(item) => item.segments[0].stops.length <= 2
            || item.segments[1].stops.length <= 2,
				);
			}
			// без пересадок и с одной и тремя
			if (
				state.filters[1]
        && state.filters[2]
        && !state.filters[3]
        && state.filters[4]
			) {
				newArr = state.tickets.filter(
					(item) => item.segments[0].stops.length !== 2
            || item.segments[1].stops.length !== 2,
				);
			}
			// без пересадок и тремя
			if (
				state.filters[1]
        && !state.filters[2]
        && !state.filters[3]
        && state.filters[4]
			) {
				newArr = state.tickets.filter(
					(item) => (item.segments[0].stops.length !== 1
              || item.segments[1].stops.length !== 1)
            && (item.segments[0].stops.length !== 2
              || item.segments[1].stops.length !== 2),
				);
			}
			// без пересадок и двумя
			if (
				state.filters[1]
        && !state.filters[2]
        && state.filters[3]
        && !state.filters[4]
			) {
				newArr = state.tickets.filter(
					(item) => (item.segments[0].stops.length !== 1
              || item.segments[1].stops.length !== 1)
            && (item.segments[0].stops.length !== 3
              || item.segments[1].stops.length !== 3),
				);
			}
			// без пересадок и двумя и тремя
			if (
				state.filters[1]
        && !state.filters[2]
        && state.filters[3]
        && state.filters[4]
			) {
				newArr = state.tickets.filter(
					(item) => item.segments[0].stops.length !== 1
            || item.segments[1].stops.length !== 1,
				);
			}
			// одна и две
			if (
				!state.filters[1]
        && state.filters[2]
        && state.filters[3]
        && !state.filters[4]
			) {
				newArr = state.tickets.filter(
					(item) => (item.segments[0].stops.length !== 0
              || item.segments[1].stops.length !== 0)
            && (item.segments[0].stops.length !== 3
              || item.segments[1].stops.length !== 3),
				);
			}
			// одна и три
			if (
				!state.filters[1]
        && state.filters[2]
        && !state.filters[3]
        && state.filters[4]
			) {
				newArr = state.tickets.filter(
					(item) => (item.segments[0].stops.length !== 0
              || item.segments[1].stops.length !== 0)
            && (item.segments[0].stops.length !== 2
              || item.segments[1].stops.length !== 2),
				);
			}
			// две и три
			if (
				!state.filters[1]
        && !state.filters[2]
        && state.filters[3]
        && state.filters[4]
			) {
				newArr = state.tickets.filter(
					(item) => (item.segments[0].stops.length !== 0
              || item.segments[1].stops.length !== 0)
            && (item.segments[0].stops.length !== 1
              || item.segments[1].stops.length !== 1),
				);
			}
			// одна, две и три
			if (
				!state.filters[1]
        && state.filters[2]
        && state.filters[3]
        && state.filters[4]
			) {
				newArr = state.tickets.filter(
					(item) => item.segments[0].stops.length !== 0
            || item.segments[1].stops.length !== 0,
				);
			}

			if (state.tab === "cheap") {
				newArr.sort((a, b) => {
					if (a.price > b.price) {
						return 1;
					}
					if (a.price < b.price) {
						return -1;
					}
					return 0;
				});
			}

			if (state.tab === "fast") {
				newArr.sort((a, b) => {
					if (
						a.segments[0].duration + a.segments[1].duration
            > b.segments[0].duration + b.segments[1].duration
					) {
						return 1;
					}
					if (
						a.segments[0].duration + a.segments[1].duration
            < b.segments[0].duration + b.segments[1].duration
					) {
						return -1;
					}
					return 0;
				});
			}

			if (state.tab === "optimal") {
				newArr.sort((a, b) => {
					if (
						a.price
              + a.segments[0].stops.length
              + a.segments[0].duration
              + a.segments[1].duration
            > b.price
              + b.segments[0].stops.length
              + b.segments[0].duration
              + b.segments[1].duration
					) {
						return 1;
					}
					if (
						a.price
              + a.segments[0].stops.length
              + a.segments[0].duration
              + a.segments[1].duration
            < b.price
              + b.segments[0].stops.length
              + b.segments[0].duration
              + b.segments[1].duration
					) {
						return -1;
					}
					return 0;
				});
			}

			return newArr.map((item, index) => {
				if (index < state.index && index >= state.prevIndex) {
					return <Ticket key={id++} data={item} />;
				}
			});
		}
		return null;
	};

	const tickets = elements(state);

	if(tickets.length === 0) {
		return (
			<div className={classes["ticket-list-with-error"]}>
				<ErrorMessage/>
			</div>
		);
	}

	if (state.stop === false) {
		return (
			<div className={classes["ticket-list-with-spinner"]}>
				<Spinner />
				<div>{tickets}</div>
			</div>
		);
	}

	return <div className={classes["ticket-list"]}>{tickets}</div>;
}

const mapStateProps = (state) => ({
	state,
});

const mapDispatchToProps = (dispatch) => ({
	getSessionId: () => dispatch(getSessionId()),
	getTickets: (id) => dispatch(getTickets(id)),
});

export default connect(mapStateProps, mapDispatchToProps)(TicketsList);
