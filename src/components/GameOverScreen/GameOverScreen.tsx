import React from "react";
import showColors from "../../helpers/Colors/showColors";
import "./GameOverScreen.css";

const GameOverScreen = React.memo(
	(props: { message: string; code: number[] }) => {
		return (
			<div id="GameOverScreen">
				<div>
					<div>
						<h1>{props.message}</h1>
						<h2>The code was</h2>
						<div id="code">{showColors(props.code)}</div>
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
	}
);

export default GameOverScreen;
