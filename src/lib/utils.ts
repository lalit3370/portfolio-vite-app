import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { EMAIL } from "@/lib/contants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function copyEmailToClipboard(toast) {
  navigator.clipboard.writeText(EMAIL)
    .then(() => {
      toast.success("Email copied to clipboard!");
    })
    .catch((error) => {
      toast.error("Failed to copy email: " + error.message);
    });
}