
const reducer = (
	state = {
		filters: [true, true, true, true, true],
		id: null,
		tickets: [],
		counter: 0,
		prevIndex: 0,
		index: 5,
		stop: false,
		tab: "cheap",
	},
	action
) => {
	switch (action.type) {
	case "filterChange":
		if (action.e.target.id === "0" && state.filters[0] === false) {
			let newArr = state.filters;
			newArr = newArr.map(() => true);
			return {...state, filters : newArr};
		}
		if (action.e.target.id === "0" && state.filters[0] === true) {
			let newArr = state.filters;
			newArr = newArr.map(() => false);
			return {...state, filters : newArr};
		}
		if (action.e.target.id !== "0") {
			let newArr = state.filters;
			newArr[Number(action.e.target.id)] =
				!newArr[Number(action.e.target.id)];

			if (newArr[1] === true && newArr[2] === true && newArr[3] === true && newArr[4] === true) {
				newArr[0] = true;
			}
			if (newArr[1] === false || newArr[2] === false || newArr[3] === false || newArr[4] === false) {
				newArr[0] = false;
			}

			return {...state, filters : newArr};
		}
		return {...state};
	case "getId":
		if (state.id === null) {
			return {...state, id: action.id};
		}
		return {...state};
	case "getTickets":
		if (action.stop === true) {
			return {
				...state,
				tickets: [...state.tickets, ...action.tickets],
				stop: action.stop,
			};
		}
		return {
			...state,
			tickets: [...state.tickets, ...action.tickets],
			counter: state.counter + 1,
		};
	case "showNewFiveTickets":
		return {
			...state,
			prevIndex: state.prevIndex + 5,
			index: state.index + 5,
		};
	case "tabChange":
		action.e.target.id === "0" && (state.tab = "cheap");
		action.e.target.id === "1" && (state.tab = "fast");
		action.e.target.id === "2" && (state.tab = "optimal");

		return {...state, tab: state.tab};
	default:
		return state;
	}
};

export default reducer;
