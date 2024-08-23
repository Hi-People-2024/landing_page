import { WordleGame } from "@/components/ui/games/wordle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10">
      <h1 className="text-2xl font-bold">Wordle</h1>
      <WordleGame />
    </div>
  );
}
