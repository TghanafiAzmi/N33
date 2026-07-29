const projects = [
  {
    number: "01",
    name: "[Project name pending]",
    industry: "[Industry pending]",
    services: "[Services pending]",
  },
  {
    number: "02",
    name: "[Project name pending]",
    industry: "[Industry pending]",
    services: "[Services pending]",
  },
  {
    number: "03",
    name: "[Project name pending]",
    industry: "[Industry pending]",
    services: "[Services pending]",
  },
];

export default function WorkRail() {
  return (
    <div className="work-pin">
      <div className="work-track">
        {projects.map((project, index) => (
          <article className="project-card" data-project-card key={project.number}>
            <div
              className={`project-card__art project-card__art--${index + 1}`}
            >
              <div className="project-card__art-grid" aria-hidden="true" />
              <span className="project-card__placeholder">
                Project image placeholder
              </span>
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
              <p className="project-card__description">
                N33 will add the project description and verified outcomes after
                approval.
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
