import React from "react";
import Colors from "../../helpers/Colors/Colors";
import showColors from "../../helpers/Colors/showColors";
import Buttons from "../Buttons/Buttons";

export interface IPlagroundComponentProps {
	userInput: Colors[];
	hints: Colors[];
	onClick: () => (color: Colors) => void;
}

const PlayGroundComponent = ({
	onClick,
	userInput,
	hints,
}: IPlagroundComponentProps) => {
	return (
		<section>
			<Buttons onClick={onClick} />

			<div style={{ display: "flex", justifyContent: "center" }}>
				<div id="userInputs">{showColors(userInput)}</div>
				<div id="hints">{showColors(hints)}</div>
			</div>
		</section>
	);
};

export default PlayGroundComponent;
