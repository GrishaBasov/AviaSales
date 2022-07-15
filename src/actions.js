export const getIdAction = (id) => ({
	type: "getId",
	id,
});

export const getTicketsAction = (tickets, stop) => ({
	type: "getTickets",
	tickets,
	stop,
});

export const showNewFiveTickets = () => ({
	type: "showNewFiveTickets",
});

export const filterChange = (e) => ({
	type: "filterChange",
	e,
});

export const tabChange = (e) => ({
	type: "tabChange",
	e,
});
