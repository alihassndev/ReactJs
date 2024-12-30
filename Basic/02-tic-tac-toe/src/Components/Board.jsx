import { useState } from "react";
import Square from "./Square";

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isPlayerOne, setPlayerOne] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const logic of winnerLogic) {
      const [a, b, c] = logic;

      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isPlayerOne ? "X" : "0";
    setState(copyState);
    setPlayerOne((prev) => !prev);
  };

  return (
    <>
      <div>
        <h1 className="font-bold">Tic Tac Toe</h1>

        <h2 className="text-2xl my-10">
          {isPlayerOne ? "Player X Turn" : "Player 0 Turn"}
        </h2>

        {isWinner ? (
          <div className="text-red-500 px-10 py-5 rounded-2xl bg-white">
            <span>
              <span className="text-2xl font-bold text-black">{isWinner}</span>{" "}
              Won the game
            </span>

            <button
              onClick={() => setState(Array(9).fill(null))}
              className="w-full mt-8 text-white"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="grid grid-cols-3">
              <Square onClick={() => handleClick(0)} value={state[0]} />
              <Square onClick={() => handleClick(1)} value={state[1]} />
              <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="grid grid-cols-3">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="grid grid-cols-3">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Board;
