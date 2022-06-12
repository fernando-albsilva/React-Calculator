import React from "react";
import "./Button.css";

const Button = (props) => {
	return (
		<div className="Button" class={props.class} onClick={props.onClick}>
			<button class={props.styleType}>{props.label ? props.label : "teste botao simples"}</button>
		</div>
	);
};

export default Button;
