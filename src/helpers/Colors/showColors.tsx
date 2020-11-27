import Colors from "./Colors";

const showColors = (colors: number[]) => {
	let coloresComponent = colors.map((color, index) => {
		return <div key={index} style={{ background: Colors[color] }}></div>;
	});

	return coloresComponent;
};

export default showColors;
