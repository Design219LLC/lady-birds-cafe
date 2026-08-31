import { cn } from "@/lib/utils";
import type { Photo } from "@/lib/cafe";

type Props = {
  photo: Photo;
  className?: string;
  sizes: string;
  priority?: boolean;
  objectPosition?: string;
};

export function Photo({
  photo,
  className,
  sizes,
  priority = false,
  objectPosition,
}: Props) {
  return (
    <img
      src={photo.src}
      srcSet={photo.srcSet}
      sizes={sizes}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      className={cn("block w-full object-cover", className)}
      style={objectPosition ? { objectPosition } : undefined}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
    />
  );
}
