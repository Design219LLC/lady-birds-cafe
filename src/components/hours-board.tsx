import { useEffect, useState } from "react";
import { WEEK_HOURS } from "@/lib/cafe";
import { getKitchenStatus, hoursLabel, type KitchenStatus } from "@/lib/hours";
import { cn } from "@/lib/utils";

export function HoursBoard({ id = "hours" }: { id?: string }) {
  const [status, setStatus] = useState<KitchenStatus | null>(null);

  useEffect(() => {
    setStatus(getKitchenStatus());
  }, []);

  const todayKey = status?.today.key;

  return (
    <section
      id={id}
      className="lift scroll-mt-28 border-t-[3px] border-brick bg-paper-deep px-6 py-10 text-ink sm:px-10 sm:py-12"
      aria-labelledby="hours-heading"
    >
      <p className="kicker text-ink-soft">Kitchen hours</p>
      <h2
        id="hours-heading"
        className="mt-3 font-display text-display text-ink"
      >
        When the door’s open
      </h2>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
        Public listings. Call if you’re making a drive.
      </p>

      <ol className="mt-10 font-display text-lg sm:text-xl">
        {WEEK_HOURS.map((day) => {
          const isToday = day.key === todayKey;
          return (
            <li
              key={day.key}
              className={cn("hours-row", isToday && "is-today")}
            >
              <span>
                {day.label}
                {isToday ? (
                  <span className="ml-2 font-sans text-xs font-medium not-italic tracking-wide text-ink-soft">
                    {" "}
                    today
                  </span>
                ) : null}
              </span>
              <span
                className={cn(
                  "text-right tabular-nums not-italic",
                  day.open === null && "text-muted",
                )}
              >
                {hoursLabel(day)}
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
