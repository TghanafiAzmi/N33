import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import EditorialMedia from "@/components/EditorialMedia";
import PageMasthead from "@/components/PageMasthead";
import { processPage } from "@/content/site-content";

export const metadata: Metadata = {
  title: processPage.title,
  description: processPage.introduction[0],
};

export default function ProcessPage() {
  return (
    <>
      <PageMasthead
        image="/images/abstract/ambient-ridge.jpg"
        introduction={processPage.introduction}
        title={processPage.title}
        variant="offset"
      />

      <section className="process-journey page-gutter">
        <span className="process-journey__line" aria-hidden="true" />
        <ol className="process-journey__steps">
          {processPage.steps.map((step) => (
            <li className="process-journey__step page-reveal" key={step.title}>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        <EditorialMedia
          className="process-journey__media page-reveal"
          sizes="(max-width: 900px) 100vw, 42vw"
          src="/images/abstract/signal-orbit.jpg"
        />
      </section>

      <CallToAction
        description={processPage.closing.description}
        primary={{
          href: processPage.closing.href,
          label: processPage.closing.label,
        }}
        title={processPage.closing.title}
      />
    </>
  );
}
