import EditorialMedia from "@/components/EditorialMedia";

type PageMastheadProps = {
  image: string;
  introduction: readonly string[];
  title: string;
  variant?: "balanced" | "offset" | "wide";
};

export default function PageMasthead({
  image,
  introduction,
  title,
  variant = "balanced",
}: PageMastheadProps) {
  return (
    <section
      className={`page-masthead page-masthead--${variant} page-gutter`}
      aria-labelledby="page-title"
    >
      <div className="page-masthead__grid blueprint-grid" aria-hidden="true" />
      <div className="page-masthead__heading">
        <h1 id="page-title">{title}</h1>
      </div>
      <div className="page-masthead__intro">
        {introduction.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <EditorialMedia
        className="page-masthead__media"
        src={image}
        priority
        sizes="(max-width: 900px) 100vw, 58vw"
      />
    </section>
  );
}
