import { connect } from "react-redux";
import classes from "./Filter.module.scss";

import {filterChange} from "../Redux/actions";

function Filter({ state, filterChange }) {


	return (
		<div className={classes["filter-wrapper"]}>
			<header className={classes["filter-header"]}>количество пересадок</header>
			<label className={classes.check}>
				<input
					type="checkbox"
					id="0"
					checked={state.filters[0]}
					className={classes.check__input}
					onChange={(e) => filterChange(e)}
				/>
				<span className={classes.check__box} />
				<span className={classes.check__description}>Все</span>
			</label>
			<label className={classes.check}>
				<input
					type="checkbox"
					id="1"
					checked={state.filters[1]}
					className={classes.check__input}
					onChange={(e) => filterChange(e)}
				/>
				<span className={classes.check__box} />
				<span className={classes.check__description}>Без пересадок</span>
			</label>
			<label className={classes.check}>
				<input
					type="checkbox"
					id="2"
					checked={state.filters[2]}
					className={classes.check__input}
					onChange={(e) => filterChange(e)}
				/>
				<span className={classes.check__box} />
				<span className={classes.check__description}>1 пересадка</span>
			</label>
			<label className={classes.check}>
				<input
					type="checkbox"
					id="3"
					checked={state.filters[3]}
					className={classes.check__input}
					onChange={(e) => filterChange(e)}
				/>
				<span className={classes.check__box} />
				<span className={classes.check__description}>2 пересадки</span>
			</label>
			<label className={classes.check}>
				<input
					type="checkbox"
					id="4"
					checked={state.filters[4]}
					className={classes.check__input}
					onChange={(e) => filterChange(e)}
				/>
				<span className={classes.check__box} />
				<span className={classes.check__description}>3 пересадки</span>
			</label>
		</div>
	);
	


}

const mapStateProps = (state) => ({
	state
});

const MapDispatchToProps = (dispatch) => ({
	filterChange: (e) => dispatch(filterChange(e))
});

export default connect(mapStateProps, MapDispatchToProps)(Filter);
