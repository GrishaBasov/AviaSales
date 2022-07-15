import { getTicketsAction, getIdAction } from "../actions";

export const getSessionId = () => async function (dispatch) {
	const getId = await fetch("https://aviasales-test-api.kata.academy/search");
	const result = await getId.json();
	const id = result.searchId;
	return dispatch(getIdAction(id));
};

export const getTickets = (id) => async function (dispatch) {
	if (id !== null) {
		let result = await fetch(
			`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`,
		);

		if (!result.ok) {
			result = await fetch(
				`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`,
			);
		}

		const tickets = await result.json();

		return dispatch(getTicketsAction(tickets.tickets, tickets.stop));
	}
};
