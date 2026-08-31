import { createFileRoute } from "@tanstack/react-router";
import { CAFE, photos } from "@/lib/cafe";
import { Photo } from "@/components/photo";
import { HoursBoard } from "@/components/hours-board";
import { TodayChip } from "@/components/today-chip";

export const Route = createFileRoute("/visit")({
  component: VisitPage,
  head: () => ({
    meta: [
      { title: "Visit · Lady Birds Cafe" },
      {
        name: "description",
        content:
          "120 W Center St, Sheridan, AR 72150. Across from the courthouse. Call (870) 942-4163.",
      },
    ],
  }),
});

function VisitPage() {
  return (
    <main id="main" className="bg-paper pb-20 md:pb-0">
      <section className="bg-paper">
        <figure className="bg-paper">
          <Photo
            photo={photos.exterior}
            sizes="100vw"
            priority
            className="aspect-[16/10] w-full"
            objectPosition="center 22%"
          />
        </figure>
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <p className="kicker">Find us</p>
          <h1 className="mt-3 font-display text-hero text-ink">
            {CAFE.street}
          </h1>
          <p className="mt-5 font-display text-section font-medium italic text-ink">
            {CAFE.city}, {CAFE.state} {CAFE.zip} · across from the courthouse
          </p>
          <div className="mt-8">
            <TodayChip tone="on-paper" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="kicker">Get here</p>
          <h2 className="mt-3 font-display text-display text-ink">
            Downtown Sheridan
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
            Across from the courthouse. Plaza parking, or the square.
          </p>
          <dl className="mt-10 space-y-7">
            <div>
              <dt className="kicker">Address</dt>
              <dd className="mt-2 font-display text-2xl tracking-tight text-ink sm:text-3xl">
                {CAFE.addressLine}
              </dd>
            </div>
            <div>
              <dt className="kicker">Phone</dt>
              <dd className="mt-2">
                <a
                  href={`tel:${CAFE.phoneTel}`}
                  className="text-link font-display text-2xl tracking-tight text-brick hover:text-brick-deep sm:text-3xl"
                >
                  {CAFE.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker">Facebook</dt>
              <dd className="mt-2">
                <a
                  href={CAFE.facebook}
                  className="text-link font-display text-2xl tracking-tight text-ink hover:text-brick sm:text-3xl"
                >
                  Lady Birds Cafe
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`tel:${CAFE.phoneTel}`} className="btn btn-call">
              Call
            </a>
            <a href={CAFE.mapsDirections} className="btn btn-ghost text-ink">
              Google Maps
            </a>
            <a href={CAFE.appleMaps} className="btn btn-ghost text-ink">
              Apple Maps
            </a>
          </div>
        </div>
        <HoursBoard />
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 sm:py-20">
          <figure className="overflow-hidden">
            <Photo
              photo={photos.bird}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="aspect-[3/2]"
              objectPosition="center"
            />
          </figure>
          <div>
            <p className="kicker">Facebook</p>
            <h2 className="mt-3 font-display text-display text-ink">
              They still post on Facebook
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              Closing days and specials post there first.
            </p>
            <a href={CAFE.facebook} className="btn btn-ink mt-8">
              Open Facebook
            </a>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="kicker">Map</p>
          <h2 className="mt-3 font-display text-display text-ink">
            120 W Center St
          </h2>
          <div className="mt-10 overflow-hidden photo-outline">
            <iframe
              title="Map of Lady Birds Cafe, Sheridan Arkansas"
              src={CAFE.mapsEmbed}
              className="map-frame w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-5 text-sm text-muted">
            If the map doesn’t load,{" "}
            <a
              href={CAFE.mapsSearch}
              className="text-link text-brick underline decoration-brick/30 underline-offset-4"
            >
              open it in Google Maps
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
