import { useWordle } from "@/hooks/useWordle";
import React, { useEffect } from "react";

export const WordleGameManager = ({ solution }: { solution: string }) => {
  const { handleKeyup, currentGuess } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);
  return (
    <div>
      <p>{currentGuess}</p>
    </div>
  );
};
