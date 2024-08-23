"use client";

import { useFetchWordList } from "@/hooks/api/useFetchWordList";
import type { Word } from "@/types/common";
import React, { useEffect, useState } from "react";
import { WordleGameManager } from "./wordle-game-manager";

export const WordleGame = () => {
  const [solution, setSolution] = useState<Word>();

  const { data } = useFetchWordList();

  useEffect(() => {
    if (data) {
      const randomIndex = Math.floor(Math.random() * data.data.length);
      setSolution(data.data[randomIndex]);
    }
  }, [data]);

  return (
    <div>{solution && <WordleGameManager solution={solution.word} />}</div>
  );
};
