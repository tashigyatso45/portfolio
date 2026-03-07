import { FadeIn } from "./Utils";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    id: 1,
    title: "Project Alpha",
    tag: "Full-Stack App",
    year: "2025",
    description:
      "A brief description of this project and the problem it solves. Replace with your actual project details.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    color: "#E8E4DE",
  },
  {
    id: 2,
    title: "Project Beta",
    tag: "Developer Tool",
    year: "2025",
    description:
      "A brief description of this project and the problem it solves. Replace with your actual project details.",
    tech: ["TypeScript", "Rust", "WebAssembly"],
    link: "#",
    color: "#DDE4E8",
  },
  {
    id: 3,
    title: "Project Gamma",
    tag: "Mobile App",
    year: "2024",
    description:
      "A brief description of this project and the problem it solves. Replace with your actual project details.",
    tech: ["React Native", "Firebase", "Figma"],
    link: "#",
    color: "#E4E8DD",
  },
  {
    id: 4,
    title: "Project Delta",
    tag: "Open Source",
    year: "2024",
    description:
      "A brief description of this project and the problem it solves. Replace with your actual project details.",
    tech: ["Python", "FastAPI", "Docker"],
    link: "#",
    color: "#E8DDE4",
  },
  {
    id: 5,
    title: "Project Epsilon",
    tag: "Data Viz",
    year: "2024",
    description:
      "A brief description of this project and the problem it solves. Replace with your actual project details.",
    tech: ["D3.js", "Next.js", "Vercel"],
    link: "#",
    color: "#E4DDE8",
  },
  {
    id: 6,
    title: "Project Zeta",
    tag: "API / Backend",
    year: "2023",
    description:
      "A brief description of this project and the problem it solves. Replace with your actual project details.",
    tech: ["Go", "gRPC", "Kubernetes"],
    link: "#",
    color: "#DEE8E4",
  },
];

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
