import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
