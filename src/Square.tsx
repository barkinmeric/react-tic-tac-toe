interface SquareProps {
	value: string;
	onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SquareProps) {
	return (
		<button type="button" className="h-16 w-16 border" onClick={onSquareClick}>
			{value}
		</button>
	);
}
