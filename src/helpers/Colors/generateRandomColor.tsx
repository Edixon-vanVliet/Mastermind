import Colors from "./Colors";

const generateRandomColor = () => {
	let color = 0;

	do {
		debugger;
		color = Math.round(Math.random() * (Object.keys(Colors).length / 2));
	} while (color === 0 || color > 6);

	return color;
};

export default generateRandomColor;
