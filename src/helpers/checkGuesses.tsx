import Colors from "./Colors/Colors";
import getAllIndexes from "./getAllIndexes";

const checkGuesses = (
	config: configuration,
	code: Colors[],
	guesses: Colors[]
) => {
	let newHints: number[] = [];

	for (let i = 0; i < config.codeLength; i++) {
		let color = code.find((color) => color === guesses[i]);

		if (color) {
			let indexes = getAllIndexes(code, color);

			if (indexes.find((index) => index === i)! >= 0) {
				newHints.push(Colors.Red);
			} else {
				newHints.push(Colors.White);
			}
		} else {
			newHints.push(Colors.None);
		}
	}

	return newHints;
};

export default checkGuesses;
