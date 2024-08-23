import type { QueryOptions, Word } from "@/types/common";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchWordList = (
  queryOptions?: QueryOptions<Word[], ["words"]>,
) => {
  return useQuery({
    queryKey: ["words"],
    queryFn: async () => {
      const { data } = await axios.get("/api/wordsList");
      return data;
    },
    ...queryOptions,
  });
};
