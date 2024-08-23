import wordList from "@/data/words.json";
import { apiResponse } from "@/lib/utils";
import { NextResponse } from "next/server";

export function GET() {
  try {
    const data = wordList;
    return NextResponse.json(
      apiResponse(true, "Words fetched successfully", data),
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(apiResponse(false, "Something went wrong", null), {
      status: 500,
    });
  }
}
