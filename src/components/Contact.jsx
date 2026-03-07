import { FadeIn } from "./Utils";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Resume", href: "#" },
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
          <a href="mailto:hello@youremail.com" className="contact__email">
            hello@youremail.com
          </a>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="contact__socials">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="contact__social-link">
                {link.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
