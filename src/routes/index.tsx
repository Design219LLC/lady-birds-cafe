import { createFileRoute, Link } from "@tanstack/react-router";
import { CAFE, FEATURED_DISHES, photos } from "@/lib/cafe";
import { Photo } from "@/components/photo";
import { TodayChip } from "@/components/today-chip";
import { HoursBoard } from "@/components/hours-board";
import { FacebookBand } from "@/components/facebook-band";
import { Reveal, useParallax } from "@/components/reveal";
import { SignMark } from "@/components/mark";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Lady Birds Cafe · Sheridan, AR" },
      {
        name: "description",
        content:
          "Downtown Sheridan. Plate comes out hot. 120 W Center St, across from the courthouse.",
      },
    ],
  }),
});

function Home() {
  return (
    <main id="main" className="pb-16 md:pb-0">
      <Hero />
      <AboutBand />
      <OnTheTable />
      <FacebookBand />
      <VisitBand />
    </main>
  );
}

function Hero() {
  const photoRef = useParallax<HTMLElement>(0.18);

  return (
    <section className="bg-paper">
      <figure ref={photoRef} className="parallax overflow-hidden bg-paper">
        <Photo
          photo={photos.hero}
          sizes="100vw"
          priority
          className="aspect-[16/10] w-full"
          objectPosition="center"
        />
      </figure>
      <div className="hero-copy mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
        <div>
          <SignMark className="h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44" />
          <h1 className="sr-only">Lady Birds Cafe</h1>
          <p className="kicker mt-6">Sheridan, Arkansas</p>
          <p className="mt-4 max-w-md font-display text-section font-medium italic leading-snug text-ink">
            Downtown Sheridan. Plate comes out hot.
          </p>
        </div>
        <div className="flex flex-col gap-6 border-t border-line pt-6 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
          <TodayChip tone="on-paper" />
          <p className="text-sm leading-relaxed text-ink-soft">
            {CAFE.street}
            <br />
            Across from the courthouse.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${CAFE.phoneTel}`} className="btn btn-call">
              Call
            </a>
            <a href={CAFE.mapsDirections} className="btn btn-ghost text-ink">
              Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBand() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <Reveal>
          <p className="kicker">Inside</p>
          <h2 className="mt-4 font-display text-display text-ink">
            The dining room.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            Across from the courthouse. Portions come out big.
          </p>
          <Link
            to="/visit"
            className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-brick underline decoration-brick/30 underline-offset-4 hover:decoration-brick"
          >
            Hours and the map
          </Link>
        </Reveal>
        <Reveal className="reveal-media" delay={80}>
          <figure className="frame photo-zoom">
            <Photo
              photo={photos.servers}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[5/4] sm:aspect-[4/3]"
              objectPosition="center 42%"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function OnTheTable() {
  const lead = FEATURED_DISHES[0];
  const rest = FEATURED_DISHES.slice(1, 4);

  return (
    <section className="bg-paper-deep text-ink">
      <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="kicker">The food</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-lg font-display text-display text-ink">
            Chicken fried steak, catfish, tacos.
          </h2>
          <Link
            to="/menu"
            className="text-link text-sm font-medium text-ink-soft underline decoration-ink/25 underline-offset-4 hover:text-ink hover:decoration-ink"
          >
            See the menu
          </Link>
        </div>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
          Call for today’s sides.
        </p>
      </Reveal>

      {lead.photo ? (
        <Link to="/menu" hash={lead.id} className="group block">
          <Reveal className="reveal-media">
            <figure className="photo-zoom overflow-hidden">
              <Photo
                photo={photos[lead.photo]}
                sizes="100vw"
                className="aspect-[3/2]"
                objectPosition="center"
              />
            </figure>
            <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
              <div className="caption-bar">
                <h3 className="font-display text-section text-ink">{lead.name}</h3>
                <p className="text-sm text-ink-soft">{lead.note}</p>
              </div>
            </div>
          </Reveal>
        </Link>
      ) : null}

      <div className="grid gap-px bg-paper/15 md:grid-cols-3">
        {rest.map((dish) =>
          dish.photo ? (
            <Link
              key={dish.id}
              to="/menu"
              hash={dish.id}
              className="group flex flex-col bg-paper-deep"
            >
              <Reveal className="reveal-media" delay={dish === rest[0] ? 0 : dish === rest[1] ? 90 : 160}>
                <figure className="frame photo-zoom">
                  <Photo
                    photo={photos[dish.photo]}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="aspect-[3/2]"
                    objectPosition="center"
                  />
                </figure>
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="font-display text-xl text-ink sm:text-2xl">
                    {dish.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">{dish.note}</p>
                </div>
              </Reveal>
            </Link>
          ) : null,
        )}
      </div>
    </section>
  );
}

function VisitBand() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <Reveal>
          <HoursBoard />
        </Reveal>
        <div className="flex flex-col justify-between gap-8">
          <Reveal delay={60}>
            <p className="kicker">Find us</p>
            <h2 className="mt-3 font-display text-display text-ink">
              {CAFE.street}
            </h2>
            <p className="mt-4 max-w-md text-ink-soft">
              Across from the courthouse. Plaza parking, or the square.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CAFE.mapsDirections} className="btn btn-ink">
                Get directions
              </a>
              <Link to="/visit" className="btn btn-ghost text-ink">
                Visit
              </Link>
            </div>
          </Reveal>
          <Reveal className="reveal-media" delay={120}>
            <figure className="frame photo-zoom">
              <Photo
                photo={photos.exterior}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="aspect-[16/10]"
                objectPosition="center 22%"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
