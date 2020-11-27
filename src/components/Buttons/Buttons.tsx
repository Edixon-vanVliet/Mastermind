import Colors from "../../helpers/Colors/Colors";
import "./Buttons.css";

const Buttons = (props: { onClick: (arg0: Colors) => void; }) => {
	return (
		<section id="Buttons">
			<button
				className="yellow"
				onClick={() => props.onClick(Colors.Yellow)}
			>
				Yellow
			</button>
			<button
				className="green"
				onClick={() => props.onClick(Colors.Green)}
			>
				Green
			</button>
			<button className="red" onClick={() => props.onClick(Colors.Red)}>
				Red
			</button>
			<button className="blue" onClick={() => props.onClick(Colors.Blue)}>
				Blue
			</button>
			<button
				className="black"
				onClick={() => props.onClick(Colors.Black)}
			>
				Black
			</button>
			<button
				className="white"
				onClick={() => props.onClick(Colors.White)}
			>
				White
			</button>
		</section>
	);
};

export default Buttons;
