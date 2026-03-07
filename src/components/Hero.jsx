import { useState, useEffect } from "react";
import { FadeIn, ArrowIcon } from "./Utils";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero__grid-bg" />

      <FadeIn>
        <p className="hero__label">Software Developer &amp; Designer</p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="hero__title">
          Building things
          <br />
          <span className="hero__title--muted">that matter.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="hero__subtitle">
          I craft thoughtful digital experiences with clean code and intentional
          design. Currently open to new opportunities.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => scrollTo("projects")}>
            View Projects <ArrowIcon />
          </button>
          <button className="btn btn--outline" onClick={() => scrollTo("contact")}>
            Get in Touch
          </button>
        </div>
      </FadeIn>

      <div
        className="hero__scroll-indicator"
        style={{ opacity: scrollY > 100 ? 0 : 0.4 }}
      >
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
