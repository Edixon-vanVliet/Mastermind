import { useCallback, useEffect, useState } from "react";
import GameOverScreen from "./components/GameOverScreen";
import Playground from "./components/Playground";
import Colors from "./helpers/Colors/Colors";
import generateRandomColor from "./helpers/Colors/generateRandomColor";

const config: configuration = { codeLength: 4, attempts: 10 };
const correctHints: string = JSON.stringify(
	Array(config.codeLength).fill(Colors.Red)
);

const App: React.FC = () => {
	const [code, setCode] = useState<Colors[]>([]);
	const [isGameOver, setIsGameOver] = useState(false);
	const [status, setStatus] = useState("");

	useEffect(() => {
		let newCode: Colors[] = [];

		for (let i = 0; i < config.codeLength; i++) {
			let color = generateRandomColor();
			newCode.push(color);
		}

		setCode(newCode);
	}, []);

	const handleGameOver = useCallback((message: string) => {
		setIsGameOver(true);
		setStatus(message);
	}, []);

	return (
		<div className="App">
			{isGameOver ? (
				<GameOverScreen message={status} code={code} />
			) : (
				<Playground
					config={config}
					code={code}
					gameOver={handleGameOver}
					correctHints={correctHints}
				/>
			)}
		</div>
	);
};

export default App;
