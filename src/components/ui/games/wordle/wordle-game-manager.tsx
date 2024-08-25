import { useWordle } from "@/hooks/useWordle";
import React, { useEffect } from "react";
import { WordleGrid } from "./wordle-grid";
import { WordleKeypad } from "./wordle-keypad";

export const WordleGameManager = ({ solution }: { solution: string }) => {
  const { handleKeyup, currentGuess, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", (e) => handleKeyup(e.key));

    if (isCorrect) {
      window.removeEventListener("keyup", (e) => handleKeyup(e.key));
    }

    if (turn > 5) {
      window.removeEventListener("keyup", (e) => handleKeyup(e.key));
    }

    return () => window.removeEventListener("keyup", (e) => handleKeyup(e.key));
  }, [handleKeyup, isCorrect, turn]);
  return (
    <div>
      <p>{isCorrect && "You Win!"}</p>
      <p>solution - {solution}</p>
      <WordleGrid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <WordleKeypad usedKeys={usedKeys} onWordClick={(e) => handleKeyup(e)} />
    </div>
  );
};
