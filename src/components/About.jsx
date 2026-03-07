import { FadeIn } from "./Utils";

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Figma",
  "Git",
  "GraphQL",
];

const EXPERIENCE = [
  { role: "Software Engineer", company: "Company Name", period: "2024 — Present" },
  { role: "Frontend Developer", company: "Company Name", period: "2022 — 2024" },
  { role: "Junior Developer", company: "Company Name", period: "2021 — 2022" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__grid">
        <FadeIn>
          <div>
            <p className="section-label">About</p>
            <h2 className="section-title">
              A bit about
              <br />
              <span className="section-title--italic">myself</span>
            </h2>

            <div className="about__photo-placeholder">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#BBBBB4"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="about__content">
            <p className="about__bio">
              Hello! I'm a software developer passionate about creating elegant
              solutions to complex problems. I enjoy the intersection of design
              and engineering, where thoughtful code meets beautiful interfaces.
            </p>
            <p className="about__bio">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or sketching out ideas for the next
              project. I believe great software starts with empathy for the
              people who use it.
            </p>

            <div className="about__skills">
              <h3 className="about__subheading">Technologies I work with</h3>
              <div className="about__skill-tags">
                {SKILLS.map((skill) => (
                  <span key={skill} className="about__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="about__experience">
              <h3 className="about__subheading">Experience</h3>
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="about__exp-row">
                  <div>
                    <p className="about__exp-role">{exp.role}</p>
                    <p className="about__exp-company">{exp.company}</p>
                  </div>
                  <span className="about__exp-period">{exp.period}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
