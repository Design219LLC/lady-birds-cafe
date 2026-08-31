import { Link, useRouterState } from "@tanstack/react-router";
import { CAFE } from "@/lib/cafe";
import { SignMark } from "@/components/mark";
import { useHeaderLift } from "@/lib/use-header-lift";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/menu" as const, label: "Menu" },
  { to: "/visit" as const, label: "Visit" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lifted = useHeaderLift();

  return (
    <header
      className={cn(
        "header-bar fixed inset-x-0 top-0 z-40 border-b border-line bg-paper/92 text-ink backdrop-blur-md",
        lifted && "is-lifted",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center gap-3 px-4 sm:h-20 sm:px-6">
        <Link to="/" className="flex min-h-11 items-center pr-2" aria-label={`${CAFE.name} home`}>
          <SignMark />
        </Link>

        <nav className="ml-auto flex items-center gap-0.5 sm:gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "inline-flex min-h-11 items-center px-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] sm:px-3 sm:text-xs",
                pathname === item.to ? "text-brick" : "text-ink hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CAFE.facebook}
            className="hidden min-h-11 items-center px-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink sm:inline-flex sm:text-xs"
          >
            Facebook
          </a>
          <a href={`tel:${CAFE.phoneTel}`} className="btn btn-call ml-2 px-4">
            Call
          </a>
        </nav>
      </div>
    </header>
  );
}
