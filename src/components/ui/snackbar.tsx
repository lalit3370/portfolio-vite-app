// components/Snackbar.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

type SnackbarProps = {
  message: string;
  variant?: "success" | "error" | "info";
  open: boolean;
  onClose: () => void;
  duration?: number;
};

export function Snackbar({
  message,
  variant = "info",
  open,
  onClose,
  duration = 3000,
}: SnackbarProps) {
  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 transition-all duration-300",
        open
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <div
        className={cn(
          "glass px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[250px] text-sm font-medium",
          variant === "success" && "border border-green-500 text-green-300",
          variant === "error" &&
            "border border-destructive text-destructive-foreground bg-destructive/20",
          variant === "info" && "border border-primary text-primary"
        )}
      >
        {message}
      </div>
    </div>
  );
}
