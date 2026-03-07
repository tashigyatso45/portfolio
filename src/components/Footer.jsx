import { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <span className="footer__text">
        {time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}{" "}
        — Local Time
      </span>
      <span className="footer__text">
        &copy; {new Date().getFullYear()} Tashi Gyatso. All rights reserved.
      </span>
    </footer>
  );
}
