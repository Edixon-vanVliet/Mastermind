import Colors from "./Colors";

const showColors = (colors: number[]) => {
	let coloresComponent = colors.map((color, index) => {
		return (
			<div
				key={index}
				className="color"
				style={{ background: Colors[color] }}
			></div>
		);
	});

	return coloresComponent;
};

export default showColors;