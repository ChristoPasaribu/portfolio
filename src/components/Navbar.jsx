import { useState, useEffect } from "react";

const navItems = [
  { label: "profile", href: "#profile" },
  { label: "projects", href: "#projects" },
  { label: "tools", href: "#tools" },
  { label: "contact", href: "#contact" },
];

export default function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(8,12,16,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(30,41,59,0.8)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a href="#profile" style={{ textDecoration: "none" }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.9rem",
          color: "var(--accent-green)",
          letterSpacing: "0.1em",
          fontWeight: 600,
        }}>
          &lt;{name?.split(" ")[0] || "dev"} /&gt;
        </span>
      </a>

      {/* Desktop Nav */}
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="nav-link">
            <span style={{ color: "var(--accent-green)", marginRight: "2px" }}>./</span>
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-primary"
          style={{ textDecoration: "none", display: "inline-block" }}
        >
          <span>hire_me()</span>
        </a>
      </div>
    </nav>
  );
}
