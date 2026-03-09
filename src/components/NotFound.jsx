import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Page Not Found | Tashi Gyatso";
    return () => {
      document.title = "Tashi Gyatso — Software Developer";
    };
  }, []);

  return (
    <div className="detail">
      <div className="detail__container">
        <p className="section-label">404</p>
        <h1 className="section-title">Page not found.</h1>
        <p className="about__bio" style={{ marginBottom: "2rem" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="detail__back-link">
          &larr; Back to home
        </Link>
      </div>
    </div>
  );
}
