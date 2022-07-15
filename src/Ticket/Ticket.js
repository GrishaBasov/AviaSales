import React from "react";
import { format, addMinutes } from "date-fns";
import classes from "./Ticket.module.scss";

function Ticket({ data }) {
	const departureTime = (date) => format(new Date(date), "HH:mm");

	const getArrivalTime = (departure, timeInSky) => {
		const result = addMinutes(new Date(departure), timeInSky);
		return format(new Date(result), "HH:mm");
	};

	const durationTime = (duration) => {
		let hours = Math.trunc(duration / 60);
		let minutes = duration % 60;
		hours < 10 && (hours = `0${String(hours)}`);
		minutes < 10 && (minutes = `0${String(minutes)}`);
		return `${hours}ч:${minutes}м`;
	};

	const transferText = (arr) => {
		if (arr.length === 0) {
			return "без пересадок";
		}
		if (arr.length === 1) return `${arr.length} пересадка`;
		if (arr.length > 1) return `${arr.length} пересадки`;
	};

	const transferCities = (arr) => {
		if (arr.length === 0) {
			return null;
		}
		return arr.join(", ");
	};

	return (
		<div className={classes["ticket-wrapper"]}>
			<div className={classes.header}>
				<div className={classes.price}>
					{data.price}
					{" "}
          Р
				</div>
				<img
					src={`//pics.avs.io/99/36/${data.carrier}.png`}
					alt="название авиакомпании"
				/>
			</div>
			<div className={classes["one-way"]}>
				<div>
					<div className={classes.route}>
						{data.segments[0].origin}
						{" "}
            -
						{data.segments[0].destination}
					</div>
					<div className={classes["departure-time"]}>
						{departureTime(data.segments[0].date)}
						{" "}
            -
						{" "}
						{getArrivalTime(data.segments[0].date, data.segments[0].duration)}
					</div>
				</div>
				<div>
					<div className={classes["in-the-way"]}>в пути</div>
					<div className={classes["time-in-the-sky"]}>
						{durationTime(data.segments[0].duration)}
					</div>
				</div>
				<div>
					<div className={classes["number-of-transfers"]}>
						{transferText(data.segments[0].stops)}
					</div>
					<div className={classes["cities-transfer"]}>
						{transferCities(data.segments[0].stops)}
					</div>
				</div>
			</div>
			<div className={classes["another-way"]}>
				<div>
					<div className={classes.route}>
						{data.segments[1].origin}
						{" "}
            -
						{data.segments[1].destination}
					</div>
					<div className={classes["departure-time"]}>
						{departureTime(data.segments[1].date)}
						{" "}
            -
						{" "}
						{getArrivalTime(data.segments[1].date, data.segments[1].duration)}
					</div>
				</div>
				<div>
					<div className={classes["in-the-way"]}>в пути</div>
					<div className={classes["time-in-the-sky"]}>
						{durationTime(data.segments[1].duration)}
					</div>
				</div>
				<div>
					<div className={classes["number-of-transfers"]}>
						{transferText(data.segments[1].stops)}
					</div>
					<div className={classes["cities-transfer"]}>
						{transferCities(data.segments[1].stops)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Ticket;
