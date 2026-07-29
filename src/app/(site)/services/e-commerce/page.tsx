import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import EditorialMedia from "@/components/EditorialMedia";
import PageMasthead from "@/components/PageMasthead";
import { ecommercePage } from "@/content/site-content";

export const metadata: Metadata = {
  title: ecommercePage.title,
  description: ecommercePage.introduction[0],
};

export default function EcommercePage() {
  return (
    <div className="commerce-service-page">
      <PageMasthead
        image="/images/abstract/cosmic-horizon.jpg"
        introduction={ecommercePage.introduction}
        title={ecommercePage.title}
        variant="offset"
      />

      <section className="commerce-service-journey page-gutter page-reveal">
        <div className="commerce-service-journey__heading">
          <h2>{ecommercePage.listTitle}</h2>
        </div>
        <ol className="commerce-service-journey__list">
          {ecommercePage.capabilities.map((capability, index) => (
            <li key={capability}>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{capability}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="commerce-service-balance page-gutter page-reveal">
        <div className="commerce-service-balance__copy">
          <h2>{ecommercePage.statementTitle}</h2>
          <p>{ecommercePage.statement}</p>
        </div>
        <EditorialMedia
          className="commerce-service-balance__media"
          src="/images/abstract/ambient-ridge.jpg"
          sizes="(max-width: 900px) 100vw, 58vw"
        />
      </section>

      <CallToAction
        description={ecommercePage.cta.description}
        primary={{
          href: ecommercePage.cta.href,
          label: ecommercePage.cta.label,
        }}
        title={ecommercePage.cta.title}
      />
    </div>
  );
}
