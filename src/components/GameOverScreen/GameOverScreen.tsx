import React from "react";
import Colors from "../../helpers/Colors/Colors";
import showColors from "../../helpers/Colors/showColors";
import "./GameOverScreen.css";

export interface IGameOverScreenProps {
	message: string;
	code: Colors[];
}

const GameOverScreen = React.memo(({ message, code }: IGameOverScreenProps) => {
	return (
		<div id="GameOverScreen">
			<div>
				<div>
					<h1>{message}</h1>
					<h2>The code was</h2>
					<div id="code">{showColors(code)}</div>
				</div>
				<div>
					<button
						className="rebeccapurple"
						onClick={() => window.location.reload()}
					>
						Play again
					</button>
				</div>
			</div>
		</div>
	);
});

export default GameOverScreen;
