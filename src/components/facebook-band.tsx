import { CAFE, photos } from "@/lib/cafe";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

export function FacebookBand() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <p className="kicker">Facebook</p>
          <h2 className="mt-4 max-w-md font-display text-display text-ink">
            Specials still post here first.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
            Closing days too. This is the page they use.
          </p>
          <a href={CAFE.facebook} className="btn btn-ink mt-8">
            Open Facebook
          </a>
        </Reveal>
        <div className="grid grid-cols-2 gap-3">
          <Reveal className="reveal-media" delay={80}>
            <figure className="frame photo-zoom">
              <Photo
                photo={photos.bird}
                sizes="(min-width: 1024px) 280px, 45vw"
                className="aspect-[3/2]"
                objectPosition="center"
              />
            </figure>
          </Reveal>
          <Reveal className="reveal-media" delay={160}>
            <figure className="frame photo-zoom">
              <Photo
                photo={photos.hopflop}
                sizes="(min-width: 1024px) 280px, 45vw"
                className="aspect-[3/4]"
                objectPosition="center"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
