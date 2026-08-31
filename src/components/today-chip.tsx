import { useEffect, useState } from "react";
import { getKitchenStatus, type KitchenStatus } from "@/lib/hours";
import { cn } from "@/lib/utils";

export function TodayChip({
  tone = "on-photo",
  className,
}: {
  tone?: "on-photo" | "on-paper";
  className?: string;
}) {
  const [status, setStatus] = useState<KitchenStatus | null>(null);

  useEffect(() => {
    setStatus(getKitchenStatus());
    const id = window.setInterval(() => setStatus(getKitchenStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const onPhoto = tone === "on-photo";

  if (!status) {
    return (
      <div
        className={cn(
          "h-5 w-52 max-w-full",
          onPhoto ? "bg-ink/20" : "bg-ink/10",
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <p
      className={cn(
        "flex max-w-full flex-wrap items-baseline gap-x-3 gap-y-1 text-base font-medium",
        onPhoto ? "text-ink" : "text-ink",
        className,
      )}
    >
      <span>{status.today.label}</span>
      <span className="tabular-nums">{status.hoursText}</span>
      <span className="tabular-nums">{status.statusText}</span>
    </p>
  );
}
