import { CAFE } from "@/lib/cafe";
import { SignMark, Wordmark } from "@/components/mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-deep text-ink">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-28 sm:px-6 sm:pt-24 md:pb-24">
        <p className="flex items-center gap-3 text-3xl text-ink sm:text-4xl">
          <SignMark className="h-14 sm:h-16 brightness-110" />
          <Wordmark />
        </p>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="kicker text-ink-soft">Address</p>
            <p className="mt-3 font-display text-2xl leading-snug tracking-tight sm:text-3xl">
              {CAFE.street}
              <br />
              {CAFE.city}, {CAFE.state} {CAFE.zip}
            </p>
            <p className="mt-5">
              <a
                href={`tel:${CAFE.phoneTel}`}
                className="text-link font-display text-xl text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
              >
                {CAFE.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-1 text-sm text-ink-soft sm:items-end">
            <a
              href={CAFE.facebook}
              className="text-link text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
            >
              Facebook
            </a>
            <p>Hours from public listings.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
