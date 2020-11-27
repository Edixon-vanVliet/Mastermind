import React from "react";
import Colors from "../../helpers/Colors/Colors";
import showColors from "../../helpers/Colors/showColors";
import Buttons from "../Buttons/Buttons";

const PlayGroundComponent = (props: {
	onClick: () => (arg0: Colors) => void;
	userInput: Colors[];
	hints: Colors[];
}) => {
	return (
		<section>
			<Buttons onClick={props.onClick()} />

			<div style={{ display: "flex", justifyContent: "center" }}>
				<div id="userInputs">{showColors(props.userInput)}</div>
				<div id="hints">{showColors(props.hints)}</div>
			</div>
		</section>
	);
};

export default PlayGroundComponent;
