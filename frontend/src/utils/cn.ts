import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs));
}

export { cn };
