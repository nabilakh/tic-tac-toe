export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, idx) => (
        <li key={idx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() => onSelectSquare(idx, colIdx)}
                  disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
