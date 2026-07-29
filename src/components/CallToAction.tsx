import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Action = {
  href: string;
  label: string;
};

type CallToActionProps = {
  description: string;
  primary: Action;
  secondary?: Action;
  title: string;
  tone?: "dark" | "light";
};

export default function CallToAction({
  description,
  primary,
  secondary,
  title,
  tone = "light",
}: CallToActionProps) {
  return (
    <section className={`page-cta page-cta--${tone} page-gutter page-reveal`}>
      <div className="page-cta__rule" aria-hidden="true" />
      <div className="page-cta__copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="page-cta__actions">
        <Link className="page-action page-action--primary" href={primary.href}>
          <span>{primary.label}</span>
          <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.35} />
        </Link>
        {secondary ? (
          <Link
            className="page-action page-action--secondary"
            href={secondary.href}
          >
            <span>{secondary.label}</span>
            <ArrowRight aria-hidden="true" size={20} strokeWidth={1.35} />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
