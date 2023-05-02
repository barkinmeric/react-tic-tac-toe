import { useState } from "react";
import Board from "./Board";

export default function App() {
	const [history, setHistory] = useState<Game[]>([{ squares: Array(9).fill(null), turn: true }]);
	return (
		<div className=" mx-auto my-12 flex max-w-xl justify-between text-base">
			<Board history={history} setHistory={setHistory} />

			<div>
				<ol>
					<li>History</li>
					{history.map((game) => (
						<li key={game.squares.toString() + game.squares.length.toString()}>
							<button
								type="button"
								onClick={() =>
									setHistory((currentHistory) => {
										const index = currentHistory.indexOf(game);
										return currentHistory.slice(0, index + 1);
									})
								}
								className="text-blue-500 hover:text-blue-700"
							>
								{`Go to move #${history.indexOf(game)}`}
							</button>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}
