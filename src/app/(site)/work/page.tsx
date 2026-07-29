import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import EditorialMedia from "@/components/EditorialMedia";
import PageMasthead from "@/components/PageMasthead";
import { workPage } from "@/content/site-content";

export const metadata: Metadata = {
  title: workPage.title,
  description: workPage.introduction[0],
};

const workImages = [
  "/images/abstract/network-wires.jpg",
  "/images/abstract/gradient-fold.jpg",
  "/images/abstract/signal-orbit.jpg",
  "/images/abstract/ambient-ridge.jpg",
] as const;

export default function WorkPage() {
  return (
    <>
      <PageMasthead
        image="/images/abstract/cosmic-horizon.jpg"
        introduction={workPage.introduction}
        title={workPage.title}
        variant="wide"
      />

      <section className="work-page-index page-gutter">
        <ul className="work-page-categories page-reveal">
          {workPage.categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>

        <div className="work-page-visuals">
          {workImages.map((image, index) => (
            <EditorialMedia
              className={`work-page-visual work-page-visual--${index + 1} page-reveal`}
              key={image}
              sizes="(max-width: 900px) 100vw, 50vw"
              src={image}
            />
          ))}
        </div>
      </section>

      <CallToAction
        description={workPage.emptyDescription}
        primary={{ href: "/contact", label: workPage.emptyLabel }}
        title={workPage.emptyTitle}
      />
    </>
  );
}
