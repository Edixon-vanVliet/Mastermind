import Colors from "./Colors";

const generateRandomColor = () => {
	let color = 0;

	do {
		color = Math.round(Math.random() * (Object.keys(Colors).length / 2));
	} while (color === 0);

	return color;
};

export default generateRandomColor;
