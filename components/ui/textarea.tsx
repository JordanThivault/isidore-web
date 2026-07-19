import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "border-line-strong bg-paper text-ink flex min-h-28 w-full rounded-md border px-3.5 py-2.5 text-sm",
      "placeholder:text-muted resize-y transition-colors",
      "focus-visible:border-terracotta focus-visible:outline-none",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
