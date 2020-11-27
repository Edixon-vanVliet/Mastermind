import React from "react";
import Colors from "../../helpers/Colors/Colors";
import showColors from "../../helpers/Colors/showColors";
import styledGameOverScreen from "./GameOverScreen.module.css";
import styledButton from "../Buttons/Buttons.module.css";

export interface IGameOverScreenProps {
	message: string;
	code: Colors[];
}

const GameOverScreen: React.FC<IGameOverScreenProps> = React.memo(
	({ message, code }) => {
		return (
			<div id={styledGameOverScreen.GameOverScreen}>
				<div>
					<div>
						<h1>{message}</h1>
						<h2>The code was</h2>
						<div id={styledGameOverScreen.code}>{showColors(code)}</div>
					</div>
					<div>
						<button
							className={styledButton.rebeccapurple}
							onClick={() => window.location.reload()}
						>
							Play again
						</button>
					</div>
				</div>
			</div>
		);
	}
);

export default GameOverScreen;
