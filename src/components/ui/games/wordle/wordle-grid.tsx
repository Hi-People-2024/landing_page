import type { FormattedGuess } from "@/hooks/useWordle";
import React from "react";
import { WordleRow } from "./wordle-row";

export type WordleGridProps = {
  currentGuess: string;
  guesses: (FormattedGuess[] | undefined)[];
  turn: number;
};

export const WordleGrid = ({
  currentGuess,
  guesses,
  turn,
}: WordleGridProps) => {
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <WordleRow key={i.toString()} currentGuess={currentGuess} />;
        }
        return <WordleRow key={i.toString()} guess={g} />;
      })}
    </div>
  );
};
