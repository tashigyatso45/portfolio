import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav className={`navbar ${scrollY > 50 ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo" onClick={handleLogoClick}>
        Tashi Gyatso
      </div>

      <div className="navbar__links">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            className="navbar__link"
            onClick={() => scrollToSection(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
