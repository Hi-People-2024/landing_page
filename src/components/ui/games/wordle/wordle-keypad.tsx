import { KEYS } from "@/data/keys";
import { cn } from "@/lib/utils";
import { Delete } from "lucide-react";
import React, { useState } from "react";

export type WordleKeypadProps = {
  usedKeys: Record<string, "green" | "yellow" | "grey">;
  onWordClick: (key: string) => void;
};

export const WordleKeypad = ({ usedKeys, onWordClick }: WordleKeypadProps) => {
  return (
    <div className="mx-auto my-5 grid max-w-[600px] grid-cols-10">
      {KEYS.map((l) => {
        const color = usedKeys[l.key];

        return (
          <div
            key={l.key}
            className={cn(
              "m-1 inline-block h-[50px] w-10 cursor-pointer select-none rounded-[6px] bg-[#eee] text-center leading-[50px] transition-all duration-300 focus:scale-95",
              {
                "bg-[#5ac85a] text-white": color === "green",
                "bg-[#e2cc68] text-white": color === "yellow",
                "bg-[#a1a1a1] text-white": color === "grey",
                "col-span-2 flex w-auto items-center justify-center":
                  l.key === "Backspace",
                "col-span-2 w-auto": l.key === "Enter",
              },
            )}
            onClick={() => onWordClick(l.key)}
          >
            {l.key === "Backspace" ? (
              <Delete className="h-6 w-6 text-neutral-600" />
            ) : l.key === "Enter" ? (
              "Enter"
            ) : (
              l.key.toUpperCase()
            )}
          </div>
        );
      })}
    </div>
  );
};
