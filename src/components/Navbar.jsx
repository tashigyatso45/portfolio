import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
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
    <nav className={`navbar ${scrollY > 50 ? "navbar--scrolled" : ""}`}>
      <div
        className="navbar__logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Tashi Gyatso
      </div>

      <div className="navbar__links">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            className="navbar__link"
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
