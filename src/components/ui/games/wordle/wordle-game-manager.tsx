import { useWordle } from "@/hooks/useWordle";
import React, { useEffect } from "react";
import { WordleGrid } from "./wordle-grid";

export const WordleGameManager = ({ solution }: { solution: string }) => {
  const { handleKeyup, currentGuess, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);
  return (
    <div>
      <p>{isCorrect && "You Win!"}</p>
      <p>solution - {solution}</p>
      <WordleGrid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  );
};
