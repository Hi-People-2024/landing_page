import type { FormattedGuess } from "@/hooks/useWordle";
import { cn } from "@/lib/utils";
import React from "react";

export type WordleRowProps = {
  guess?: FormattedGuess[] | undefined;
  currentGuess?: string;
};

export const WordleRow = ({ guess, currentGuess }: WordleRowProps) => {
  if (guess) {
    return (
      <div className="flex justify-center text-center">
        {guess.map((g, i) => (
          <div
            key={i.toString()}
            className={cn("wordle_box", {
              "bg-green-600": g.color === "green",
              "bg-yellow-500": g.color === "yellow",
              "bg-gray-400": g.color === "grey",
            })}
          >
            {g.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    const letters = currentGuess.split("");

    return (
      <div className="flex justify-center text-center">
        {letters.map((l, i) => (
          <div key={i.toString()} className={"wordle_box"}>
            {l}
          </div>
        ))}

        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i.toString()} className={"wordle_box"} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center text-center">
      <div className="wordle_box" />
      <div className="wordle_box" />
      <div className="wordle_box" />
      <div className="wordle_box" />
      <div className="wordle_box" />
    </div>
  );
};
