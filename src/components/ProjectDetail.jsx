import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FadeIn, ArrowIcon } from "./Utils";
import PROJECTS, { getProjectById } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  const currentIdx = PROJECTS.findIndex((p) => p.id === id);
  const prevProject = currentIdx > 0 ? PROJECTS[currentIdx - 1] : null;
  const nextProject = currentIdx < PROJECTS.length - 1 ? PROJECTS[currentIdx + 1] : null;

  useEffect(() => {
    if (project) {
      document.title = project.meta.title;
      return () => {
        document.title = "Tashi Gyatso — Software Developer";
      };
    }
  }, [project]);

  if (!project) {
    return (
      <div className="detail">
        <div className="detail__container">
          <h1 className="section-title">Project not found</h1>
          <Link to="/" className="detail__back-link">
            &larr; Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail">
      <div className="detail__container">
        {/* Back link */}
        <FadeIn>
          <Link to="/" className="detail__back-link">
            &larr; Back to projects
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.05}>
          <div className="detail__header">
            <div>
              <span className="detail__tag">{project.tag}</span>
              <h1 className="detail__title">{project.title}</h1>
            </div>
            <span className="detail__year">{project.year}</span>
          </div>
        </FadeIn>

        {/* Hero image */}
        <FadeIn delay={0.1}>
          <div
            className="detail__hero-image"
            style={{ backgroundColor: project.color }}
          >
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="detail__hero-img"
              />
            ) : (
              <div className="detail__hero-placeholder">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1A1A18"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Content grid */}
        <div className="detail__content">
          {/* Left: description */}
          <FadeIn delay={0.15}>
            <div>
              <h2 className="detail__subheading">Overview</h2>
              <p className="detail__text">{project.longDescription}</p>

              {project.challenges && (
                <>
                  <h2 className="detail__subheading detail__subheading--spaced">
                    Challenges &amp; Learnings
                  </h2>
                  <p className="detail__text">{project.challenges}</p>
                </>
              )}
            </div>
          </FadeIn>

          {/* Right: meta */}
          <FadeIn delay={0.2}>
            <div className="detail__meta">
              <div className="detail__meta-section">
                <h3 className="detail__meta-label">Tech Stack</h3>
                <div className="detail__tech-tags">
                  {project.tech.map((t) => (
                    <span key={t} className="detail__tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.features && project.features.length > 0 && (
                <div className="detail__meta-section">
                  <h3 className="detail__meta-label">Key Features</h3>
                  <ul className="detail__features">
                    {project.features.map((feature) => (
                      <li key={feature} className="detail__feature">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="detail__meta-section">
                <h3 className="detail__meta-label">Links</h3>
                <div className="detail__links">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary btn--small"
                    >
                      Live Site <ArrowIcon />
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline btn--small"
                    >
                      GitHub <ArrowIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Additional images */}
        {project.images && project.images.length > 0 && (
          <FadeIn delay={0.25}>
            <div className="detail__gallery">
              <h2 className="detail__subheading">Gallery</h2>
              <div className="detail__gallery-grid">
                {project.images.map((img, i) => (
                  <img
                    key={img}
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="detail__gallery-img"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Nav to other projects */}
        <FadeIn delay={0.3}>
          <div className="detail__nav">
            {prevProject ? (
              <Link to={`/project/${prevProject.id}`} className="detail__nav-link">
                <span className="detail__nav-label">&larr; Previous</span>
                <span className="detail__nav-title">{prevProject.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                to={`/project/${nextProject.id}`}
                className="detail__nav-link detail__nav-link--right"
              >
                <span className="detail__nav-label">Next &rarr;</span>
                <span className="detail__nav-title">{nextProject.title}</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
