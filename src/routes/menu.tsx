import { createFileRoute } from "@tanstack/react-router";
import {
  ALSO_ORDERED,
  CAFE,
  FEATURED_DISHES,
  GUEST_DISHES,
  photos,
} from "@/lib/cafe";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "The food · Lady Birds Cafe" },
      {
        name: "description",
        content:
          "Plates people order at Lady Birds Cafe in Sheridan. Call for today’s sides.",
      },
    ],
  }),
});

function MenuPage() {
  const [lead, ...rest] = FEATURED_DISHES;
  const tray = GUEST_DISHES.find((d) => d.id === "tray");
  const fajitas = GUEST_DISHES.find((d) => d.id === "fajitas");
  const fishTacos = GUEST_DISHES.find((d) => d.id === "fish-tacos");

  return (
    <main id="main" className="bg-paper pb-20 pt-24 md:pb-0 md:pt-28">
      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="kicker">Plates people order</p>
        <h1 className="mt-4 max-w-2xl font-display text-hero text-ink">
          The food
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">
          Plates people talk about. Call for today’s sides.
        </p>
        <p className="mt-5 font-display text-2xl tracking-tight sm:text-3xl">
          <a
            href={`tel:${CAFE.phoneTel}`}
            className="text-link text-brick hover:text-brick-deep"
          >
            {CAFE.phoneDisplay}
          </a>
        </p>
      </Reveal>

      {lead.photo ? (
        <article id={lead.id} className="mt-14 scroll-mt-24 sm:mt-20">
              <figure className="frame photo-zoom overflow-hidden">
            <Photo
              photo={photos[lead.photo]}
              sizes="100vw"
              priority
              className="aspect-[3/2]"
              objectPosition="center"
            />
          </figure>
          <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
            <div className="caption-bar">
              <h2 className="font-display text-display text-ink">{lead.name}</h2>
              <p className="text-ink-soft">{lead.note}</p>
            </div>
          </div>
        </article>
      ) : null}

      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {rest.map((dish) =>
          dish.photo ? (
            <article
              key={dish.id}
              id={dish.id}
              className="scroll-mt-24"
            >
              <figure className="frame photo-zoom overflow-hidden">
                <Photo
                  photo={photos[dish.photo]}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[3/2]"
                  objectPosition="center"
                />
              </figure>
              <div className="mt-4 caption-bar">
                <h2 className="font-display text-section text-ink">
                  {dish.name}
                </h2>
                <p className="text-sm text-muted">{dish.note}</p>
              </div>
            </article>
          ) : null,
        )}
      </div>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <p className="kicker">Guest photos</p>
        <h2 className="mt-3 max-w-lg font-display text-display text-ink">
          Same kitchen. Pictures from the table.
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          Posted by guests on Facebook.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {tray?.photo ? (
            <article id={tray.id} className="scroll-mt-24">
              <figure className="frame photo-zoom overflow-hidden">
                <Photo
                  photo={photos[tray.photo]}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="aspect-[3/4]"
                  objectPosition="center"
                />
              </figure>
              <div className="mt-4 caption-bar">
                <h3 className="font-display text-section text-ink">{tray.name}</h3>
                <p className="text-sm text-muted">{tray.note}</p>
              </div>
            </article>
          ) : null}
          {fishTacos?.photo ? (
            <article id={fishTacos.id} className="scroll-mt-24">
              <figure className="frame photo-zoom overflow-hidden">
                <Photo
                  photo={photos[fishTacos.photo]}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="aspect-[3/5]"
                  objectPosition="center"
                />
              </figure>
              <div className="mt-4 caption-bar">
                <h3 className="font-display text-section text-ink">
                  {fishTacos.name}
                </h3>
                <p className="text-sm text-muted">{fishTacos.note}</p>
              </div>
            </article>
          ) : null}
        </div>
        {fajitas?.photo ? (
          <article id={fajitas.id} className="mt-8 scroll-mt-24">
            <figure className="overflow-hidden">
              <Photo
                photo={photos[fajitas.photo]}
                sizes="100vw"
                className="aspect-[16/9]"
                objectPosition="center"
              />
            </figure>
            <div className="mt-4 caption-bar">
              <h3 className="font-display text-section text-ink">
                {fajitas.name}
              </h3>
              <p className="text-sm text-muted">{fajitas.note}</p>
            </div>
          </article>
        ) : null}
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
        <p className="kicker">People also order</p>
        <h2 className="mt-3 font-display text-display text-ink">
          Call for the rest
        </h2>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {ALSO_ORDERED.map((dish) => (
            <li
              key={dish.id}
              className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="font-display text-2xl tracking-tight text-ink">
                {dish.name}
              </span>
              <span className="text-sm text-muted sm:text-right">
                {dish.note}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
          Prices from the kitchen. This list is from public mentions.
        </p>
        <p className="mt-6">
          <a
            href={CAFE.facebook}
            className="text-link text-sm font-semibold text-brick underline decoration-brick/30 underline-offset-4 hover:decoration-brick"
          >
            More plates on Facebook
          </a>
        </p>
      </section>
    </main>
  );
}
