import Image from "next/image";

type EditorialMediaProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  src: string;
};

export default function EditorialMedia({
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
  src,
}: EditorialMediaProps) {
  return (
    <div
      className={`page-media relative w-full h-full ${className}`.trim()}
      aria-hidden="true"
    >
      <Image
        className={`object-cover ${imageClassName}`.trim()}
        src={src}
        alt=""
        fill
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? "eager" : undefined}
        sizes={sizes}
      />
      <span className="page-media__grain" />
    </div>
  );
}
