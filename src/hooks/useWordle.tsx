import { useState } from "react";

export type FormattedGuess = {
  key: string;
  color: "green" | "yellow" | "grey";
};

export const useWordle = (solution: string) => {
  const [turn, setTurn] = useState<number>(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<(FormattedGuess[] | undefined)[]>(
    Array(6).fill(undefined),
  );
  const [history, setHistory] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const formatGuess = () => {
    const solutionArray: (string | null)[] = [...solution];
    const formattedGuess: FormattedGuess[] = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });

    // find any green letters
    formattedGuess.forEach((l, i) => {
      if (solution[i] === l.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });

    return formattedGuess;
  };

  const addNewGuess = (formattedGuess: FormattedGuess[]) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }

    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });

    setCurrentGuess("");
  };

  const handleKeyup = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (turn > 5) {
        console.log("you used all your guesses");
        return;
      }

      if (history.includes(currentGuess)) {
        console.log("you already tried that word");
        return;
      }

      if (currentGuess.length !== 5) {
        console.log("word must be 5 letters");
        return;
      }

      const formatted = formatGuess();
      addNewGuess(formatted);
    }

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
