import Colors from "../../helpers/Colors/Colors";
import showColors from "../../helpers/Colors/showColors";
import Buttons from "../Buttons/Buttons";
import styledPlayground from "./Playground.module.css";

export interface IPlagroundComponentProps {
	userInput: Colors[];
	hints: Colors[];
	onClick: (color: Colors) => void;
}

const PlayGroundComponent: React.FC<IPlagroundComponentProps> = ({
	onClick,
	userInput,
	hints,
}) => {
	return (
		<section>
			<Buttons onClick={onClick} />

			<div id={styledPlayground.PlayGround}>
				<div id={styledPlayground.userInputs}>{showColors(userInput)}</div>
				<div id={styledPlayground.hints}>{showColors(hints)}</div>
			</div>
		</section>
	);
};

export default PlayGroundComponent;
