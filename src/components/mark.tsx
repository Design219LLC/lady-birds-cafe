import { cn } from "@/lib/utils";

export function SignMark({ className }: { className?: string }) {
  return (
    <img
      src="/photos/sign.webp"
      alt=""
      width={80}
      height={120}
      className={cn("h-14 w-auto shrink-0 object-contain sm:h-16", className)}
      decoding="async"
    />
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display font-medium tracking-tight leading-none",
        className,
      )}
    >
      Lady Birds Cafe
    </span>
  );
}

