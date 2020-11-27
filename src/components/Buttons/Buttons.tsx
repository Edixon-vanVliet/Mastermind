import React from "react";
import Colors from "../../helpers/Colors/Colors";
import styledButton from "./Buttons.module.css";

export interface IButtonsProps {
	onClick: (color: Colors) => void;
}

const Buttons: React.FC<IButtonsProps> = React.memo(({ onClick }) => {
	return (
		<section id={styledButton.Buttons}>
			<button
				className={styledButton.yellow}
				onClick={() => onClick(Colors.Yellow)}
			>
				Yellow
			</button>
			<button
				className={styledButton.green}
				onClick={() => onClick(Colors.Green)}
			>
				Green
			</button>
			<button className={styledButton.red} onClick={() => onClick(Colors.Red)}>
				Red
			</button>
			<button
				className={styledButton.blue}
				onClick={() => onClick(Colors.Blue)}
			>
				Blue
			</button>
			<button
				className={styledButton.black}
				onClick={() => onClick(Colors.Black)}
			>
				Black
			</button>
			<button
				className={styledButton.white}
				onClick={() => onClick(Colors.White)}
			>
				White
			</button>
		</section>
	);
});

export default Buttons;
