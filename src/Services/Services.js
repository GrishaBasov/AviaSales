import { getTicketsAction, getIdAction } from "../Redux/actions";

export const getSessionId = () => async function (dispatch) {
	const getId = await fetch("https://aviasales-test-api.kata.academy/search");
	const result = await getId.json();
	const id = result.searchId;
	return dispatch(getIdAction(id));
};

export const getTickets = (id) => async function f(dispatch) {

	let res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);

	if (res.status === 500) {
		return await f(dispatch);
	}

	let json = await res.json();
	return dispatch(getTicketsAction(json.tickets, json.stop));
	
};



