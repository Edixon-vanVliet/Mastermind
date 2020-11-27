import { useCallback, useEffect, useState } from "react";
import checkGuesses from "../../helpers/checkGuesses";
import Colors from "../../helpers/Colors/Colors";
import PlayGroundComponent from "./PlaygroundComponent";

export interface IPlaygroundProps {
	config: configuration;
	code: Colors[];
	correctHints: string;
	gameOver: (message: string) => void;
}

const Playground = ({
	config,
	code,
	correctHints,
	gameOver,
}: IPlaygroundProps) => {
	const [userInput, setUserInput] = useState<Colors[]>([]);
	const [hints, setHints] = useState<Colors[]>([]);

	// Check the last guesses of the user and provide hints based on it
	useEffect(() => {
		if (
			userInput.length !== 0 &&
			userInput.length % config.codeLength === 0
		) {
			// last guesses of the user
			const newColorsGuessed = userInput.slice(
				userInput.length - config.codeLength
			);

			let newHints = checkGuesses(config, code, newColorsGuessed);

			setHints((prevHints) => [...prevHints, ...newHints]);
		}
	}, [code, config, userInput]);

	// End the game if the user guessed the code or ran out of guesses
	useEffect(() => {
		const lastHints = hints.slice(hints.length - config.codeLength);
		const maxHintsLength = config.codeLength * config.attempts;

		if (JSON.stringify(lastHints) === correctHints) {
			gameOver("CONGRATULATIONS YOU DECRYPTED THE CODE");
		} else if (hints.length === maxHintsLength) {
			gameOver("GAME OVER");
		}
	}, [config, correctHints, gameOver, hints]);

	const handleClick = useCallback((color: Colors) => {
		setUserInput((prevUserInput) => [...prevUserInput, color]);
	}, []);

	return (
		<PlayGroundComponent
			userInput={userInput}
			hints={hints}
			onClick={() => handleClick}
		/>
	);
};

export default Playground;
