import type { Metadata } from "next";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import EditorialMedia from "@/components/EditorialMedia";
import PageMasthead from "@/components/PageMasthead";
import { projects, workPage } from "@/content/site-content";

export const metadata: Metadata = {
  title: workPage.title,
  description: workPage.introduction[0],
};

export default function WorkPage() {
  return (
    <>
      <PageMasthead
        image="/images/projects/merchant-dashboard.jpg"
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

        <div className="work-grid">
          {projects.map((project) => (
            <Link
              className="work-card page-reveal"
              href={`/work/${project.slug}`}
              key={project.slug}
            >
              <EditorialMedia
                className="work-card__media"
                sizes="(max-width: 900px) 100vw, 50vw"
                src={project.image}
              />
              <div className="work-card__content">
                <span className="work-card__number">P/{project.number}</span>
                <h3 className="work-card__title">{project.name}</h3>
                <p className="work-card__client">{project.client} • {project.industry}</p>
                <p className="work-card__summary">{project.summary}</p>
                <div className="work-card__services">{project.services}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CallToAction
        description="Have a similar project in mind? Share your goals and challenges with N33 Studio."
        primary={{ href: "/contact", label: "Start a Project" }}
        title="Planning Your Next Digital Initiative?"
      />
    </>
  );
}
