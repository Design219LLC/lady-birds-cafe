import { Link, useRouterState } from "@tanstack/react-router";
import { Clock3, MapPin, Phone } from "lucide-react";
import { CAFE } from "@/lib/cafe";

export function MobileBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hoursHref =
    pathname === "/" || pathname === "/visit" ? "#hours" : "/visit#hours";

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/96 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm md:hidden"
      aria-label="Quick actions"
    >
      <ul className="grid grid-cols-3">
        <li>
          <a
            href={`tel:${CAFE.phoneTel}`}
            className="flex min-h-14 flex-col items-center justify-center gap-1 text-sm font-semibold tracking-wide text-brick"
          >
            <Phone className="size-4" strokeWidth={1.75} />
            Call
          </a>
        </li>
        <li>
          {hoursHref.startsWith("#") ? (
            <a
              href={hoursHref}
              className="flex min-h-14 flex-col items-center justify-center gap-1 text-sm font-semibold tracking-wide text-ink"
            >
              <Clock3 className="size-4" strokeWidth={1.75} />
              Hours
            </a>
          ) : (
            <Link
              to="/visit"
              hash="hours"
              className="flex min-h-14 flex-col items-center justify-center gap-1 text-sm font-semibold tracking-wide text-ink"
            >
              <Clock3 className="size-4" strokeWidth={1.75} />
              Hours
            </Link>
          )}
        </li>
        <li>
          <a
            href={CAFE.mapsDirections}
            className="flex min-h-14 flex-col items-center justify-center gap-1 text-sm font-semibold tracking-wide text-ink"
          >
            <MapPin className="size-4" strokeWidth={1.75} />
            Directions
          </a>
        </li>
      </ul>
    </nav>
  );
}
