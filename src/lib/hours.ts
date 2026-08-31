import { WEEK_HOURS, type DayHours, type DayKey } from "@/lib/cafe";

const TZ = "America/Chicago";

const KEY_BY_INDEX: DayKey[] = [
  "sun",
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat",
];

export function formatMinutes(total: number): string {
  const h = Math.floor(total / 60);
  const min = total % 60;
  const suffix = h >= 12 ? "p" : "a";
  const h12 = h % 12 || 12;
  if (min === 0) return `${h12}${suffix}`;
  return `${h12}:${String(min).padStart(2, "0")}${suffix}`;
}

export function hoursLabel(day: DayHours): string {
  if (day.open === null || day.close === null) return "Closed";
  return `${formatMinutes(day.open)}–${formatMinutes(day.close)}`;
}

function chicagoParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? "";
  const weekday = get("weekday");
  const map: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  return {
    dayIndex: map[weekday] ?? 0,
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

function dayByIndex(index: number): DayHours {
  const key = KEY_BY_INDEX[((index % 7) + 7) % 7];
  return WEEK_HOURS.find((d) => d.key === key) ?? WEEK_HOURS[0];
}

export type KitchenStatus = {
  today: DayHours;
  dayIndex: number;
  minutes: number;
  isOpen: boolean;
  isClosedToday: boolean;
  hoursText: string;
  statusText: string;
  nextText: string;
};

export function getKitchenStatus(now = new Date()): KitchenStatus {
  const { dayIndex, minutes } = chicagoParts(now);
  const today = dayByIndex(dayIndex);
  const isClosedToday = today.open === null || today.close === null;
  const isOpen =
    !isClosedToday &&
    minutes >= (today.open as number) &&
    minutes < (today.close as number);

  let nextText = "";
  if (isClosedToday || minutes >= (today.close ?? -1)) {
    for (let i = 1; i <= 7; i++) {
      const d = dayByIndex(dayIndex + i);
      if (d.open !== null) {
        nextText = `Opens ${d.label} ${formatMinutes(d.open)}`;
        break;
      }
    }
  } else if (!isOpen && today.open !== null) {
    nextText = `Opens ${formatMinutes(today.open)}`;
  }

  const statusText = isOpen
    ? "Open now"
    : isClosedToday
      ? "Kitchen closed"
      : minutes < (today.open ?? 0)
        ? nextText
        : "Closed for the night";

  return {
    today,
    dayIndex,
    minutes,
    isOpen,
    isClosedToday,
    hoursText: hoursLabel(today),
    statusText,
    nextText,
  };
}
