import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CallToAction from "@/components/CallToAction";
import EditorialMedia from "@/components/EditorialMedia";
import PageMasthead from "@/components/PageMasthead";
import { projects } from "@/content/site-content";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found | N33 Studio" };
  }

  return {
    title: `${project.name} | N33 Studio Work`,
    description: project.summary,
  };
}

export default async function WorkDetailPage({
  params,
}: WorkDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectDetails = [
    {
      label: "Client",
      value: project.client,
    },
    {
      label: "Industry",
      value: project.industry,
    },
    {
      label: "Services",
      value: project.services,
    },
  ];

  return (
    <>
      <PageMasthead
        image={project.image}
        introduction={[project.summary]}
        title={project.name}
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
          src={project.image}
        />
      </section>

      <section className="case-study-page-story page-gutter">
        <article className="case-study-page-story__chapter page-reveal">
          <h2>The Challenge</h2>
          <p>{project.challenge}</p>
        </article>

        <article className="case-study-page-story__chapter page-reveal">
          <h2>Our Solution</h2>
          <p>{project.solution}</p>
        </article>

        <article className="case-study-page-story__chapter page-reveal">
          <h2>Key Outcomes</h2>
          <ul>
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </article>
      </section>

      <CallToAction
        description="Tell us what you are trying to improve or build for your organization."
        primary={{
          href: "/contact",
          label: "Start a Similar Project",
        }}
        title="Have a Similar Challenge?"
      />
    </>
  );
}
