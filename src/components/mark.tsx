import { cn } from "@/lib/utils";

export function SignMark({ className }: { className?: string }) {
  return (
    <img
      src="/photos/logo-256.webp"
      srcSet="/photos/logo-128.webp 128w, /photos/logo-256.webp 256w, /photos/logo.webp 512w, /photos/logo-1024.webp 1024w"
      sizes="(min-width: 640px) 64px, 56px"
      alt=""
      width={256}
      height={256}
      className={cn(
        "h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16",
        className,
      )}
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
