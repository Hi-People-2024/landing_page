import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function apiResponse<T>(success: boolean, message: string, data: T) {
  return {
    success,
    message,
    data,
  };
}
