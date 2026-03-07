import { useState } from "react";
import { FadeIn, ArrowIcon } from "./Utils";

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.08}>
      <a
        href={project.link}
        className="project-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`project-card__thumbnail ${hovered ? "project-card__thumbnail--hovered" : ""}`}
          style={{ backgroundColor: project.color }}
        >
          <div className="project-card__placeholder">
            <svg
              width="48"
              height="48"
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

          <div
            className={`project-card__view-label ${hovered ? "project-card__view-label--visible" : ""}`}
          >
            View <ArrowIcon />
          </div>
        </div>

        <div className="project-card__header">
          <div>
            <span className="project-card__tag">{project.tag}</span>
            <h3 className="project-card__title">{project.title}</h3>
          </div>
          <span className="project-card__year">{project.year}</span>
        </div>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t} className="project-card__tech-tag">
              {t}
            </span>
          ))}
        </div>
      </a>
    </FadeIn>
  );
}
