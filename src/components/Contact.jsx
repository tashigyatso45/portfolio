import { FadeIn } from "./Utils";
import resumePDF from "../assets/Resume.pdf";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/tashigyatso45", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/tashigyatso45", external: true },
  { label: "Resume", href: resumePDF, download: "Tashi_Gyatso_Resume.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <FadeIn>
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">
            Let's work
            <br />
            <span className="section-title--italic">together.</span>
          </h2>
          <p className="contact__subtitle">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <a href="mailto:tashigyatso45@gmail.com" className="contact__email">
            tashigyatso45@gmail.com
          </a>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="contact__socials">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="contact__social-link"
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(link.download ? { download: link.download } : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
