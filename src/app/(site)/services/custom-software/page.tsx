import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import EditorialMedia from "@/components/EditorialMedia";
import PageMasthead from "@/components/PageMasthead";
import { customSoftwarePage } from "@/content/site-content";

export const metadata: Metadata = {
  title: customSoftwarePage.title,
  description: customSoftwarePage.introduction[0],
};

export default function CustomSoftwarePage() {
  return (
    <div className="software-service-page">
      <PageMasthead
        image="/images/abstract/network-wires.jpg"
        introduction={customSoftwarePage.introduction}
        title={customSoftwarePage.title}
        variant="balanced"
      />

      <section className="software-service-ledger page-gutter page-reveal">
        <div className="software-service-ledger__heading">
          <h2>{customSoftwarePage.listTitle}</h2>
          <EditorialMedia
            className="software-service-ledger__media"
            src="/images/abstract/signal-orbit.jpg"
            sizes="(max-width: 900px) 100vw, 34vw"
          />
        </div>
        <ol className="software-service-ledger__list">
          {customSoftwarePage.capabilities.map((capability, index) => (
            <li key={capability}>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{capability}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="software-service-context page-gutter page-reveal">
        <article className="software-service-context__primary">
          <h2>{customSoftwarePage.firstStatementTitle}</h2>
          <p>{customSoftwarePage.firstStatement}</p>
        </article>
        <EditorialMedia
          className="software-service-context__media"
          src="/images/abstract/mineral-flow.jpg"
          sizes="(max-width: 900px) 100vw, 42vw"
        />
        <article className="software-service-context__secondary">
          <h2>{customSoftwarePage.secondStatementTitle}</h2>
          <p>{customSoftwarePage.secondStatement}</p>
        </article>
      </section>

      <CallToAction
        description={customSoftwarePage.cta.description}
        primary={{
          href: customSoftwarePage.cta.href,
          label: customSoftwarePage.cta.label,
        }}
        title={customSoftwarePage.cta.title}
        tone="dark"
      />
    </div>
  );
}
