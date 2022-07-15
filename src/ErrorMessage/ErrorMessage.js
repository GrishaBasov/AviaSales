import { Alert } from "antd";
import React from "react";
import "antd/dist/antd.min.css";

const ErrorMessage = () => (
	<div>
		<Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="error" />
	</div>
);

export default ErrorMessage;