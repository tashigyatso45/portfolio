import { FadeIn } from "./Utils";
import ProjectCard from "./ProjectCard";
import PROJECTS from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <FadeIn>
        <div className="projects__header">
          <div>
            <p className="section-label">Selected Work</p>
            <h2 className="section-title">Projects</h2>
          </div>
          <p className="projects__subtitle">
            A collection of work that reflects my approach to building software.
          </p>
        </div>
      </FadeIn>

      <div className="projects__grid">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
