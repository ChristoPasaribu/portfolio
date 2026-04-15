import { useState } from "react";
import { Github, Globe, FileText, BookOpen } from "lucide-react";

const categories = [
  { key: "all",       label: "all_projects",  activeClass: "" },
  { key: "web",       label: "web_dev",       activeClass: "active-web" },
  { key: "mobile",    label: "mobile_dev",    activeClass: "active-mobile" },
  { key: "red-team",  label: "red_team",      activeClass: "active-red" },
  { key: "blue-team", label: "blue_team",     activeClass: "active-blue-team" },
];

const categoryColors = {
  web:        { border: "var(--accent-green)",   bg: "rgba(0,255,136,0.1)",   color: "var(--accent-green)"   },
  mobile:     { border: "var(--accent-purple)", bg: "rgba(168,85,247,0.1)",  color: "var(--accent-purple)" },
  "red-team": { border: "var(--accent-red)",    bg: "rgba(255,59,92,0.1)",   color: "var(--accent-red)"    },
  "blue-team":{ border: "var(--accent-blue)",  bg: "rgba(0,180,216,0.1)",   color: "var(--accent-blue)"  },
};

const categoryLabels = {
  web: "WEB", mobile: "MOBILE", "red-team": "RED TEAM", "blue-team": "BLUE TEAM",
};

// Link definitions per type — icon, label, hover color
const linkDefs = {
  source: {
    key: "link",
    icon: Github,
    label: "source_code",
    hoverColor: "var(--accent-green)",
    show: () => true,
  },
  demo: {
    key: "demoLink",
    icon: Globe,
    label: "live_demo",
    hoverColor: "var(--accent-blue)",
    show: () => true,
  },
  report: {
    key: "reportLink",
    icon: FileText,
    label: "report.pdf",
    hoverColor: "var(--accent-red)",
    // only for cyber categories
    show: (cat) => cat === "red-team" || cat === "blue-team",
  },
  writeup: {
    key: "writeupLink",
    icon: BookOpen,
    label: "write_up",
    hoverColor: "#f59e0b",
    show: (cat) => cat === "red-team" || cat === "blue-team",
  },
};

function LinkButton({ href, Icon, label, hoverColor }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.72rem",
        color: "var(--text-secondary)",
        textDecoration: "none",
        transition: "color 0.2s",
        padding: "4px 0",
      }}
      onMouseEnter={e => e.currentTarget.style.color = hoverColor}
      onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
    >
      <Icon size={13} />
      {label}
    </a>
  );
}

export default function ProjectsSection({ projects }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" style={{ padding: "100px 40px", maxWidth: 1100, margin: "0 auto" }}>

      {/* Header */}
      <div className="animate-fade-in-up" style={{ marginBottom: 12 }}>
        <span className="section-label">02. projects</span>
      </div>
      <h2 className="animate-fade-in-up delay-100" style={{
        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 12,
      }}>
        What I've <span style={{ color: "var(--accent-green)" }}>built</span>
      </h2>
      <p className="animate-fade-in-up delay-200" style={{
        color: "var(--text-secondary)", marginBottom: 40,
        maxWidth: 480, lineHeight: 1.6,
      }}>
        Projects across web development, mobile apps, and cybersecurity research.
      </p>

      {/* Category tabs */}
      <div className="animate-fade-in-up delay-300" style={{
        display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48,
      }}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          const coloring = categoryColors[cat.key];
          return (
            <button
              key={cat.key}
              className={`cat-tab ${isActive && cat.activeClass ? cat.activeClass : ""}`}
              onClick={() => setActiveCategory(cat.key)}
              style={{
                background: isActive && cat.key === "all"
                  ? "rgba(255,255,255,0.05)"
                  : isActive && coloring ? coloring.bg : "transparent",
                borderColor: isActive && cat.key === "all"
                  ? "rgba(255,255,255,0.3)"
                  : isActive && coloring ? coloring.border : undefined,
                color: isActive && cat.key === "all" ? "var(--text-primary)" : undefined,
                borderRadius: 4,
              }}
            >
              ./{cat.label}
            </button>
          );
        })}
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem",
          color: "var(--text-muted)", alignSelf: "center", marginLeft: 8,
        }}>
          [{filtered.length} found]
        </span>
      </div>

      {/* Project grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: 24,
      }}>
        {filtered.map((project, i) => {
          const color = categoryColors[project.category];
          const isCyber = project.category === "red-team" || project.category === "blue-team";

          // Collect all active links for this project
          const activeLinks = Object.values(linkDefs).filter(
            (def) => project[def.key] && def.show(project.category)
          );

          return (
            <div
              key={project.id}
              className="card-hover animate-fade-in-up"
              style={{
                background: "var(--bg-card)",
                borderRadius: 10,
                overflow: "hidden",
                animationDelay: `${i * 0.08}s`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Thumbnail */}
              <div style={{ position: "relative", height: 180, overflow: "hidden", flexShrink: 0 }}>
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    style={{
                      width: "100%", height: "100%", objectFit: "cover",
                      transition: "transform 0.4s",
                    }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                ) : (
                  <div style={{
                    width: "100%", height: "100%",
                    background: `linear-gradient(135deg, ${color?.bg || "#111"} 0%, var(--bg-card) 100%)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{ fontSize: "2.5rem", opacity: 0.4 }}>
                      {project.category === "red-team" ? "⚔️" : project.category === "blue-team" ? "🛡️" : "📁"}
                    </span>
                  </div>
                )}

                {/* Category badge */}
                <div style={{
                  position: "absolute", top: 12, left: 12,
                  background: color?.bg || "rgba(0,0,0,0.5)",
                  border: `1px solid ${color?.border || "#fff"}`,
                  borderRadius: 3, padding: "3px 8px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem", color: color?.color || "#fff",
                  letterSpacing: "0.1em", backdropFilter: "blur(4px)",
                }}>
                  {categoryLabels[project.category]}
                </div>

                {/* Year */}
                <div style={{
                  position: "absolute", top: 12, right: 12,
                  background: "rgba(0,0,0,0.6)", borderRadius: 3,
                  padding: "3px 8px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem", color: "var(--text-muted)",
                  backdropFilter: "blur(4px)",
                }}>
                  {project.year}
                </div>

                {/* Gradient overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(8,12,16,0.85) 0%, transparent 55%)",
                }} />
              </div>

              {/* Content */}
              <div style={{
                padding: "20px",
                display: "flex", flexDirection: "column", flex: 1,
              }}>
                <h3 style={{
                  fontSize: "1.05rem", fontWeight: 700,
                  marginBottom: 8, letterSpacing: "-0.01em",
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: "0.82rem", color: "var(--text-secondary)",
                  lineHeight: 1.65, marginBottom: 14, flex: 1,
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag" style={{
                      borderColor: "var(--border-accent)",
                      color: "var(--text-muted)",
                      background: "rgba(255,255,255,0.02)",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ── Links section ── */}
                {isCyber ? (
                  // Cyber projects: split into two rows — dev links + security links
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {/* Dev links row */}
                    {(project.link) && (
                      <div style={{ display: "flex", gap: 16 }}>
                        {project.link && (
                          <LinkButton
                            href={project.link}
                            Icon={Github}
                            label="source_code"
                            hoverColor="var(--accent-green)"
                          />
                        )}
                      </div>
                    )}

                    {/* Security links row with divider */}
                    {(project.reportLink || project.writeupLink) && (
                      <>

                        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                          {project.reportLink && (
                            <LinkButton
                              href={project.reportLink}
                              Icon={FileText}
                              label="report.pdf"
                              hoverColor="var(--accent-red)"
                            />
                          )}
                          {project.writeupLink && (
                            <LinkButton
                              href={project.writeupLink}
                              Icon={BookOpen}
                              label="write_up"
                              hoverColor="#f59e0b"
                            />
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  // Web / Mobile: single row
                  <div style={{ display: "flex", gap: 16 }}>
                    {project.link && (
                      <LinkButton
                        href={project.link}
                        Icon={Github}
                        label="source_code"
                        hoverColor="var(--accent-green)"
                      />
                    )}
                    {project.demoLink && (
                      <LinkButton
                        href={project.demoLink}
                        Icon={Globe}
                        label="live_demo"
                        hoverColor="var(--accent-blue)"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
