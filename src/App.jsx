import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './winner';

function App() {
  const [square, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] = useState(false);

  const winner = calculateWinner(square);

  const handleSquareClick = clickedPosition => {
    if (square[clickedPosition] || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });

    setIsNext(currentIsNext => !currentIsNext);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} isXNext={isXNext} squares={square} />
      <Board square={square} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
