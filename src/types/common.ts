import type {
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";
import type { AxiosError } from "axios";

export interface APIResponse<T> {
  length: number;
  data: T;
}

export interface QueryOptions<T, K>
  extends UseQueryOptions<
    APIResponse<T>,
    AxiosError<APIResponse<string>>,
    APIResponse<T>,
    // @ts-ignore
    K
  > {}

export interface MutationOptions<T, P>
  extends UseMutationOptions<
    APIResponse<T>,
    AxiosError<APIResponse<string>>,
    P
  > {}

export interface Word {
  id: number;
  word: string;
}
