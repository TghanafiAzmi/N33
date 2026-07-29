import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import EditorialMedia from "@/components/EditorialMedia";
import PageMasthead from "@/components/PageMasthead";
import { digitalMarketingPage } from "@/content/site-content";

export const metadata: Metadata = {
  title: digitalMarketingPage.title,
  description: digitalMarketingPage.introduction[0],
};

export default function DigitalMarketingPage() {
  return (
    <div className="marketing-service-page">
      <PageMasthead
        image="/images/abstract/signal-orbit.jpg"
        introduction={digitalMarketingPage.introduction}
        title={digitalMarketingPage.title}
        variant="balanced"
      />

      <section className="marketing-service-system page-gutter page-reveal">
        <div className="marketing-service-system__core">
          <h2>{digitalMarketingPage.listTitle}</h2>
          <EditorialMedia
            className="marketing-service-system__media"
            src="/images/abstract/ambient-ridge.jpg"
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </div>
        <ol className="marketing-service-system__list">
          {digitalMarketingPage.capabilities.map((capability, index) => (
            <li key={capability}>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{capability}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="marketing-service-connection page-gutter page-reveal">
        <div className="marketing-service-connection__rule" aria-hidden="true" />
        <h2>{digitalMarketingPage.statementTitle}</h2>
        <p>{digitalMarketingPage.statement}</p>
      </section>

      <CallToAction
        description={digitalMarketingPage.cta.description}
        primary={{
          href: digitalMarketingPage.cta.href,
          label: digitalMarketingPage.cta.label,
        }}
        title={digitalMarketingPage.cta.title}
        tone="dark"
      />
    </div>
  );
}
