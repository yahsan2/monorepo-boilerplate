import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import { UIConfig } from "./helpers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
/**
 * Wrapper for `class-variance-authority`'s `cva` function for storybook `getArgTypes`
 * @param base string
 * @param config Please ues `as const`
 * @returns [ReturnType<typeof cva<T["variants"]>>, T]
 */
export function cv<T extends UIConfig>(
  base: string,
  config: T
): [ReturnType<typeof cva<T["variants"]>>, T] {
  const variants = cva(base, config);
  return [variants, config];
}

export * from "./helpers";
