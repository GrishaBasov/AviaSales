import classes from "./Tabs/Tabs.module.scss";



const reducer = (
	state = {
		filters: [true, true, true, true, true],
		id: null,
		tickets: [],
		counter: 0,
		prevIndex: 0,
		index: 5,
		stop: false,
		withoutTransfers: false,
		tab: "cheap",
		tabClassNames: [
			`${classes["button-cheap"]} ${classes.selected}`,
			classes["button-fast"],
			classes["button-optimal"],
		],
	},
	action
) => {
	if (action.type === "filterChange") {
		if (action.e.target.id === "0" && state.filters[0] === false) {
			state.filters = state.filters.map(() => true);
			return {...state, ...state.filters};
		}
		if (action.e.target.id === "0" && state.filters[0] === true) {
			state.filters = state.filters.map(() => false);
		}
		if (action.e.target.id !== "0") {
			const newArr = [...state.filters];
			newArr[Number(action.e.target.id)] =
				!newArr[Number(action.e.target.id)];
			state.filters = newArr;
			state.filters[0] =
				state.filters[1] === true &&
				state.filters[2] === true &&
				state.filters[3] === true &&
				state.filters[4] === true;
		}
		return {...state, ...state.filters};
	} else if (action.type === "getId") {
		if (state.id === null) {
			return {...state, id: action.id};
		}
		return {...state};
	} else if (action.type === "getTickets") {
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
	} else if (action.type === "showNewFiveTickets") {
		return {
			...state,
			prevIndex: state.prevIndex + 5,
			index: state.index + 5,
		};
	} else if (action.type === "tabChange") {
		const copyOfClassNames = [
			classes["button-cheap"],
			classes["button-fast"],
			classes["button-optimal"],
		];
		copyOfClassNames[action.e.target.id] += ` ${classes.selected}`;

		action.e.target.id === "0" && (state.tab = "cheap");
		action.e.target.id === "1" && (state.tab = "fast");
		action.e.target.id === "2" && (state.tab = "optimal");

		return {...state, tab: state.tab, tabClassNames: copyOfClassNames};
	} else {
		return state;
	}
};

export default reducer;
