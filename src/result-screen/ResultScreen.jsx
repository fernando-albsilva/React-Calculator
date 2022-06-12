import React from "react";
import "./ResultScreen.css";

const ResultScreen = (props) => {
	return (
		<div className="ResultScreen">
			{
				props.result.map((item) => {
					return <h1>{item !== "0" ? item : ""}</h1>;
				})
			}
		</div>
	);
};

export default ResultScreen;
