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
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src={project.image}
                />
                <div className="project-card__art-grid" aria-hidden="true" />

                {/* Overlaid Tags on Image */}
                <div className="project-card__tags-top">
                  <span className="project-card__tag project-card__tag--num">
                    {project.number}
                  </span>
                  <span className="project-card__tag project-card__tag--industry">
                    {project.industry}
                  </span>
                </div>

                <div className="project-card__tags-bottom">
                  <span className="project-card__tag project-card__tag--services">
                    {project.services}
                  </span>
                </div>

                <span className="project-card__mark" aria-hidden="true">
                  P/{project.number}
                </span>
              </div>

              <div className="project-card__info">
                <div className="project-card__header">
                  <h3 className="project-card__title">{project.name}</h3>
                  <span className="project-card__arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <p className="project-card__description">{project.summary}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
