import React from "react";
import "./Button.css";

const Button = (props) => {
	return (
		<div className={'Button ' + props.clazz} onClick={props.onClick}>
			<button className={props.styleType}>{props.label ? props.label : "teste botao simples"}</button>
		</div>
	);
};

export default Button;
