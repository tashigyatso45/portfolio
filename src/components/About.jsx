import { FadeIn } from "./Utils";
import profileIMG from "../assets/profile.png";

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "c",
  "Python",
  "Java",
  "Frontend Development",
  "Backend Development",
  "Git",
];

// const EXPERIENCE = [
//   { role: "Software Engineer", company: "Company Name", period: "2024 — Present" },
//   { role: "Frontend Developer", company: "Company Name", period: "2022 — 2024" },
//   { role: "Junior Developer", company: "Company Name", period: "2021 — 2022" },
// ];

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

            <img
              src={profileIMG}
              alt="Tashi Gyatso"
              className="profile_picture"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="about__content">
            <p className="about__bio">
              Hello! I'm a computer science student at University of Abany. I
              enjoy the intersection of design and engineering, where thoughtful
              code meets beautiful interfaces.
            </p>
            <p className="about__bio">
              When I'm not coding, you'll find me reading, at the gym or
              learning new set up to sweep my sparring partner off their feet.
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

            {/* <div className="about__experience">
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
            </div> */}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
