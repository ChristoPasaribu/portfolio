import { useEffect, useState } from "react";
import { MapPin, Circle } from "lucide-react";

const roles = [
  "Web Developer",
  "Mobile Developer",
  "Penetration Tester",
  "Security Researcher",
  "CTF Player",
];

export default function HeroSection({ profile }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
        if (charIdx + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
        if (charIdx - 1 === 0) {
          setIsDeleting(false);
          setRoleIdx((r) => (r + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, roleIdx]);

  const anim = (delayMs = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delayMs}ms, transform 0.7s ease ${delayMs}ms`,
  });

  return (
    <section
      id="profile"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="scanline" />

      <div style={{
        position: "absolute", top: "20%", left: "8%",
        width: 300, height: 300,
        background: "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "20%", right: "8%",
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(0,180,216,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 960,
        width: "100%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 60,
        flexWrap: "wrap",
      }}>

        {/* Left */}
        <div style={{ flex: "1 1 460px", minWidth: 260 }}>

          {/* Terminal pill */}
          <div style={{ marginBottom: 24, ...anim(0) }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "#1a2332", borderRadius: 6, padding: "8px 14px",
            }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem", color: "var(--text-muted)", marginLeft: 6,
              }}>whoami</span>
            </div>
          </div>

          {/* Name */}
          <h1 style={{
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: "-0.02em", marginBottom: 16,
            ...anim(100),
          }}>
            {profile.name}
          </h1>

          {/* Typewriter */}
          <div style={{ marginBottom: 20, minHeight: 34, ...anim(200) }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "1.1rem", color: "var(--accent-green)", fontWeight: 500,
            }}>
              {displayed}
              <span className="cursor-blink" style={{ color: "var(--accent-green)" }}>_</span>
            </span>
          </div>

          {/* Bio */}
          <p style={{
            color: "var(--text-secondary)", lineHeight: 1.75,
            fontSize: "1rem", maxWidth: 520, marginBottom: 24,
            ...anim(300),
          }}>
            {profile.bio}
          </p>

          {/* Meta */}
          <div style={{
            display: "flex", gap: 24, marginBottom: 36,
            alignItems: "center", flexWrap: "wrap",
            ...anim(400),
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MapPin size={14} color="var(--text-muted)" />
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.78rem", color: "var(--text-muted)",
              }}>{profile.location}</span>
            </div>
            {profile.available && (
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Circle size={8} fill="#00ff88" color="#00ff88" />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.78rem", color: "var(--accent-green)",
                }}>open to work</span>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", ...anim(500) }}>
            <a href="#projects" className="btn-primary" style={{ textDecoration: "none" }}>
              <span>view_projects()</span>
            </a>
            <a
              href="#contact"
              style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem",
                color: "var(--text-secondary)", border: "1px solid var(--border)",
                padding: "10px 24px", letterSpacing: "0.1em", textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(148,163,184,0.5)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              contact_me()
            </a>
          </div>
        </div>

        {/* Right: Avatar */}
        <div style={{
          flex: "0 0 auto",
          display: "flex", alignItems: "center", justifyContent: "center",
          ...anim(250),
        }}>
          <div style={{ position: "relative" }} className="animate-float">
            <div className="animate-pulse-border" style={{
              width: 230, height: 230, borderRadius: "50%",
              border: "2px solid rgba(0,255,136,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                width: 196, height: 196, borderRadius: "100%",
                border: "1px solid rgba(0,255,136,0.1)",
                overflow: "hidden", background: "var(--bg-card)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {profile.avatar ? (
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    style={{ width: "100%", height: "130%", objectFit: "cover" }}
                  />
                ) : (
                  <div style={{
                    width: "100%", height: "100%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "linear-gradient(135deg, #0d1117 0%, #1a2332 100%)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "4rem", color: "var(--accent-green)", opacity: 0.7,
                  }}>
                    {profile.name?.charAt(0)?.toUpperCase() || "?"}
                  </div>
                )}
              </div>
            </div>

            {/* Badges */}
            <div style={{
              position: "absolute", top: 10, right: -24,
              background: "rgba(0,180,216,0.15)", border: "1px solid var(--accent-blue)",
              borderRadius: 4, padding: "4px 10px",
              fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "var(--accent-blue)",
            }}>web</div>

            <div style={{
              position: "absolute", bottom: 40, right: -36,
              background: "rgba(168,85,247,0.15)", border: "1px solid var(--accent-purple)",
              borderRadius: 4, padding: "4px 10px",
              fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "var(--accent-purple)",
            }}>mobile</div>

            <div style={{
              position: "absolute", bottom: 10, left: -36,
              background: "rgba(255,59,92,0.15)", border: "1px solid var(--accent-red)",
              borderRadius: 4, padding: "4px 10px",
              fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "var(--accent-red)",
            }}>security</div>
          </div>
        </div>

      </div>
    </section>
  );
}
