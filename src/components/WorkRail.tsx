import Link from "next/link";
import EditorialMedia from "@/components/EditorialMedia";
import { projects } from "@/content/site-content";

export default function WorkRail() {
  return (
    <div className="work-pin">
      <div className="work-track">
        {projects.map((project, index) => (
          <article
            className="project-card"
            data-project-card
            key={project.slug}
          >
            <Link className="project-card__link" href={`/work/${project.slug}`}>
              <div
                className={`project-card__art project-card__art--${index + 1}`}
              >
                <EditorialMedia
                  className="project-card__media"
                  sizes="(max-width: 900px) 100vw, 40vw"
                  src={project.image}
                />
                <div className="project-card__art-grid" aria-hidden="true" />
                <span className="project-card__mark" aria-hidden="true">
                  P/{project.number}
                </span>
              </div>
              <div className="project-card__info">
                <div className="project-card__heading">
                  <span>{project.number}</span>
                  <h3>{project.name}</h3>
                </div>
                <dl className="project-card__meta">
                  <div>
                    <dt>Industry</dt>
                    <dd>{project.industry}</dd>
                  </div>
                  <div>
                    <dt>Services</dt>
                    <dd>{project.services}</dd>
                  </div>
                </dl>
                <p className="project-card__description">{project.summary}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
