import { useEffect, useState } from "react";
import checkGuesses from "../../helpers/checkGuesses";
import Colors from "../../helpers/Colors/Colors";
import PlayGroundComponent from "./PlaygroundComponent";

const Playground = (props: {
	config: configuration;
	code: Colors[];
	correctHints: string;
	gameOver: (arg0: string) => void;
}) => {
	const [userInput, setUserInput] = useState<Colors[]>([]);
	const [hints, setHints] = useState<Colors[]>([]);

	// Check the last guesses of the user and provide hints based on it
	useEffect(() => {
		if (
			userInput.length !== 0 &&
			userInput.length % props.config.codeLength === 0
		) {
			// last guesses of the user
			const newColorsGuessed = userInput.slice(
				userInput.length - props.config.codeLength
			);

			let newHints = checkGuesses(
				props.config,
				props.code,
				newColorsGuessed
			);

			setHints((prevHints) => [...prevHints, ...newHints]);
		}
	}, [props.code, props.config, userInput]);

	// End the game if the user guessed the code or ran out of guesses
	useEffect(() => {
		const lastHints = hints.slice(hints.length - props.config.codeLength);
		const maxHintsLength = props.config.codeLength * props.config.attempts;

		if (JSON.stringify(lastHints) === props.correctHints) {
			props.gameOver("CONGRATULATIONS YOU DECRYPTED THE CODE");
		} else if (hints.length === maxHintsLength) {
			props.gameOver("GAME OVER");
		}
	}, [hints, props]);

	const handleClick = (color: Colors) => {
		setUserInput([...userInput, color]);
	};

	return (
		<PlayGroundComponent
			userInput={userInput}
			hints={hints}
			onClick={() => handleClick}
		/>
	);
};

export default Playground;
