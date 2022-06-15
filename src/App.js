import "./App.css";
import { useState } from "react";

import ResultScreen from "./result-screen/ResultScreen";
import InputScreen from "./input-screen/InputScreen";
import ButtonsManager from "./buttons-manager/ButtonsManager";
import { ButtonOption } from "./models/CalculatorModels";
const mathExpressionHandler = require("math-expression-evaluator");

const App = () => {
	const [result, setResult] = useState(["0"]);
	const [expression, setExpression] = useState("0");

	const handleButtonClicked = (value) => {
		switch (value) {
			case ButtonOption.clear:
				clear();
				break;

			case ButtonOption.result:
				calculateResult();
				break;

			default:
				updateExpression(value);
				break;
		}
	};

	function clear() {
		setExpression("0");
		setResult([0]);
	}

	function calculateResult() {
		if (expression === "") {
			return;
		}

		try {
			const expressionResult = mathExpressionHandler.eval(expression);

			setResult((previewsValue) => {
				return [...result, `${expression} = ${expressionResult}`];
			});
		} catch (error) {
			setResult((previewsValue) => {
				return [...result, `${expression} = 'Invalid expression'`];
			});
		}

		setExpression("0");
	}

	function updateExpression(value) {
		const mustClearLeftZero = expression === "0";

		if (mustClearLeftZero) {
			setExpression("");
		}

		setExpression((previewsValue) => previewsValue + value);
	}

	return (
		<div className="App">
			<ResultScreen result={result} />
			<InputScreen expression={expression} />
			<ButtonsManager onButtonClicked={handleButtonClicked} />
		</div>
	);
};

export default App;
