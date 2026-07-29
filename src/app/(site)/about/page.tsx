import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import EditorialMedia from "@/components/EditorialMedia";
import PageMasthead from "@/components/PageMasthead";
import { aboutPage } from "@/content/site-content";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.introduction[0],
};

export default function AboutPage() {
  return (
    <>
      <PageMasthead
        image="/images/abstract/mineral-flow.jpg"
        introduction={aboutPage.introduction}
        title={aboutPage.title}
        variant="balanced"
      />

      <section className="about-page-philosophy page-gutter page-reveal">
        <div className="about-page-philosophy__copy">
          <h2>{aboutPage.philosophyTitle}</h2>
          <p>{aboutPage.philosophy}</p>
        </div>
        <EditorialMedia
          className="about-page-philosophy__media"
          sizes="(max-width: 900px) 100vw, 48vw"
          src="/images/abstract/dark-botanical.jpg"
        />
      </section>

      <section
        className="about-page-disciplines page-gutter"
        aria-labelledby="about-disciplines-title"
      >
        <h2 id="about-disciplines-title">{aboutPage.disciplinesTitle}</h2>
        <div className="about-page-disciplines__list">
          {aboutPage.disciplines.map((discipline) => (
            <article
              className="about-page-discipline page-reveal"
              key={discipline.title}
            >
              <h3>{discipline.title}</h3>
              <p>{discipline.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-page-principles page-gutter">
        <article className="about-page-principle about-page-principle--collaboration page-reveal">
          <h2>{aboutPage.collaborationTitle}</h2>
          <p>{aboutPage.collaboration}</p>
        </article>
        <EditorialMedia
          className="about-page-principles__media page-reveal"
          sizes="(max-width: 900px) 100vw, 34vw"
          src="/images/abstract/gradient-fold.jpg"
        />
        <article className="about-page-principle about-page-principle--fit page-reveal">
          <h2>{aboutPage.fitTitle}</h2>
          <p>{aboutPage.fit}</p>
        </article>
      </section>

      <CallToAction
        description={aboutPage.cta.description}
        primary={{ href: aboutPage.cta.href, label: aboutPage.cta.label }}
        title={aboutPage.cta.title}
      />
    </>
  );
}
