import { CAFE, photos } from "@/lib/cafe";
import { Photo } from "@/components/photo";

export function FacebookBand() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
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
        </div>
        <div className="grid grid-cols-2 gap-3">
          <figure className="overflow-hidden">
            <Photo
              photo={photos.bird}
              sizes="(min-width: 1024px) 280px, 45vw"
              className="aspect-[3/2]"
              objectPosition="center"
            />
          </figure>
          <figure className="overflow-hidden">
            <Photo
              photo={photos.hopflop}
              sizes="(min-width: 1024px) 280px, 45vw"
              className="aspect-[3/4]"
              objectPosition="center"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
