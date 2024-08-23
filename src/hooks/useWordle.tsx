import { useState } from "react";

export const useWordle = (solution: string) => {
  const [turn, setTurn] = useState<number>(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const formatGuess = () => {};

  const addNewGuess = () => {};

  const handleKeyup = (e: KeyboardEvent) => {
    if (e.key === "Backspace")
      return setCurrentGuess((prev) => prev.slice(0, -1));

    if (/^[a-zA-Z]$/.test(e.key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + e.key);
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};
