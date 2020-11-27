import React from "react";
import Colors from "../../helpers/Colors/Colors";
import "./Buttons.css";

export interface IButtonsProps {
	onClick: (color: Colors) => void;
}

const Buttons = React.memo(({ onClick }: IButtonsProps) => {
	return (
		<section id="Buttons">
			<button className="yellow" onClick={() => onClick(Colors.Yellow)}>
				Yellow
			</button>
			<button className="green" onClick={() => onClick(Colors.Green)}>
				Green
			</button>
			<button className="red" onClick={() => onClick(Colors.Red)}>
				Red
			</button>
			<button className="blue" onClick={() => onClick(Colors.Blue)}>
				Blue
			</button>
			<button className="black" onClick={() => onClick(Colors.Black)}>
				Black
			</button>
			<button className="white" onClick={() => onClick(Colors.White)}>
				White
			</button>
		</section>
	);
});

export default Buttons;
