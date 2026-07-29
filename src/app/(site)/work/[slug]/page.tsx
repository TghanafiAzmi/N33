import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CallToAction from "@/components/CallToAction";
import EditorialMedia from "@/components/EditorialMedia";
import PageMasthead from "@/components/PageMasthead";
import { caseStudyTemplate } from "@/content/site-content";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  robots: {
    follow: false,
    index: false,
  },
};

export function generateStaticParams() {
  return [{ slug: "placeholder" }];
}

export default async function WorkDetailPage({
  params,
}: WorkDetailPageProps) {
  const { slug } = await params;

  if (slug !== "placeholder") {
    notFound();
  }

  const projectDetails = [
    {
      label: "Client or project type",
      value: caseStudyTemplate.client,
    },
    {
      label: "Industry",
      value: caseStudyTemplate.industry,
    },
    {
      label: "Services",
      value: caseStudyTemplate.services,
    },
  ];

  const projectSections = [
    {
      title: "Challenge",
      content: caseStudyTemplate.challenge,
    },
    {
      title: "Approach",
      content: caseStudyTemplate.approach,
    },
    {
      title: "Solution",
      content: caseStudyTemplate.solution,
    },
    {
      title: "Outcome",
      content: caseStudyTemplate.outcome,
    },
  ];

  return (
    <>
      <PageMasthead
        image="/images/abstract/cosmic-horizon.jpg"
        introduction={[caseStudyTemplate.introduction]}
        title={caseStudyTemplate.projectName}
        variant="wide"
      />

      <section className="case-study-page-summary page-gutter page-reveal">
        <dl>
          {projectDetails.map((detail) => (
            <div key={detail.label}>
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>
        <EditorialMedia
          className="case-study-page-summary__media"
          sizes="(max-width: 900px) 100vw, 58vw"
          src="/images/abstract/network-wires.jpg"
        />
      </section>

      <section className="case-study-page-story page-gutter">
        {projectSections.map((section) => (
          <article className="case-study-page-story__chapter page-reveal" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </article>
        ))}
      </section>

      <CallToAction
        description={caseStudyTemplate.cta.description}
        primary={{
          href: caseStudyTemplate.cta.href,
          label: caseStudyTemplate.cta.label,
        }}
        title={caseStudyTemplate.cta.title}
      />
    </>
  );
}
