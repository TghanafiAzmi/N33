import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import EditorialMedia from "@/components/EditorialMedia";
import PageMasthead from "@/components/PageMasthead";
import { webDesignPage } from "@/content/site-content";

export const metadata: Metadata = {
  title: webDesignPage.title,
  description: webDesignPage.introduction[0],
};

export default function WebDesignDevelopmentPage() {
  return (
    <div className="web-service-page">
      <PageMasthead
        image="/images/abstract/dark-botanical.jpg"
        introduction={webDesignPage.introduction}
        title={webDesignPage.title}
        variant="wide"
      />

      <section className="web-service-build page-gutter page-reveal">
        <div className="web-service-build__heading">
          <h2>{webDesignPage.listTitle}</h2>
        </div>
        <ol className="web-service-build__list">
          {webDesignPage.capabilities.map((capability, index) => (
            <li key={capability}>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{capability}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="web-service-statement page-gutter page-reveal">
        <EditorialMedia
          className="web-service-statement__media"
          src="/images/abstract/gradient-fold.jpg"
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <div className="web-service-statement__copy">
          <h2>{webDesignPage.statementTitle}</h2>
          <p>{webDesignPage.statement}</p>
        </div>
      </section>

      <section className="web-service-approach page-gutter page-reveal">
        <h2>{webDesignPage.approachTitle}</h2>
        <ol className="web-service-approach__steps">
          {webDesignPage.approach.map((step, index) => (
            <li key={step}>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <CallToAction
        description={webDesignPage.cta.description}
        primary={{
          href: webDesignPage.cta.href,
          label: webDesignPage.cta.label,
        }}
        title={webDesignPage.cta.title}
      />
    </div>
  );
}
