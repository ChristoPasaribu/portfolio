const toolCategories = [
  {
    key: "web",
    label: "Web Development",
    icon: "🌐",
    color: "var(--accent-blue)",
    borderColor: "rgba(0,180,216,0.2)",
    bg: "rgba(0,180,216,0.03)",
    headerBg: "rgba(0,180,216,0.08)",
  },
  {
    key: "mobile",
    label: "Mobile Development",
    icon: "📱",
    color: "var(--accent-purple)",
    borderColor: "rgba(168,85,247,0.2)",
    bg: "rgba(168,85,247,0.03)",
    headerBg: "rgba(168,85,247,0.08)",
  },
  {
    key: "redTeam",
    label: "Red Team / Offensive",
    icon: "⚔️",
    color: "var(--accent-red)",
    borderColor: "rgba(255,59,92,0.2)",
    bg: "rgba(255,59,92,0.03)",
    headerBg: "rgba(255,59,92,0.08)",
  },
  {
    key: "blueTeam",
    label: "Blue Team / Defensive",
    icon: "🛡️",
    color: "var(--accent-green)",
    borderColor: "rgba(0,255,136,0.2)",
    bg: "rgba(0,255,136,0.03)",
    headerBg: "rgba(0,255,136,0.08)",
  },
];

const levelBar = { Expert: 95, Advanced: 75, Intermediate: 50, Beginner: 25 };
const levelColor = {
  Expert: "var(--accent-green)",
  Advanced: "var(--accent-blue)",
  Intermediate: "var(--accent-purple)",
  Beginner: "var(--text-muted)",
};

export default function ToolsSection({ tools }) {
  return (
    <section
      id="tools"
      style={{
        padding: "100px 40px",
        background: "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div className="animate-fade-in-up" style={{ marginBottom: 12 }}>
          <span className="section-label">03. tools & stack</span>
        </div>
        <h2 className="animate-fade-in-up delay-100" style={{
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          marginBottom: 12,
        }}>
          My <span style={{ color: "var(--accent-green)" }}>arsenal</span>
        </h2>
        <p className="animate-fade-in-up delay-200" style={{
          color: "var(--text-secondary)",
          marginBottom: 60,
          maxWidth: 460,
          lineHeight: 1.6,
        }}>
          Technologies and tools I use across different domains of development and security.
        </p>

        {/* 2x2 Grid of categories */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
          gap: 24,
        }}>
          {toolCategories.map((cat, ci) => {
            const toolList = tools[cat.key] || [];
            return (
              <div
                key={cat.key}
                className="animate-fade-in-up"
                style={{
                  background: cat.bg,
                  border: `1px solid ${cat.borderColor}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  animationDelay: `${ci * 0.1}s`,
                }}
              >
                {/* Category header */}
                <div style={{
                  background: cat.headerBg,
                  padding: "16px 24px",
                  borderBottom: `1px solid ${cat.borderColor}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}>
                  <span style={{ fontSize: "1.1rem" }}>{cat.icon}</span>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: cat.color,
                    letterSpacing: "0.05em",
                  }}>
                    {cat.label}
                  </span>
                  <span style={{
                    marginLeft: "auto",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: "var(--text-muted)",
                  }}>
                    {toolList.length} tools
                  </span>
                </div>

                {/* Tools list */}
                <div style={{ padding: "16px 24px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {toolList.map((tool) => (
                    <div key={tool.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      {/* Icon + name */}
                      <span style={{ fontSize: "1rem", width: 22, textAlign: "center" }}>{tool.icon}</span>
                      <span style={{
                        flex: 1,
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}>
                        {tool.name}
                      </span>

                      {/* Level badge */}
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.6rem",
                        color: levelColor[tool.level] || "var(--text-muted)",
                        letterSpacing: "0.08em",
                        minWidth: 80,
                        textAlign: "right",
                        marginRight: 8,
                      }}>
                        {tool.level}
                      </span>

                      {/* Bar */}
                      <div style={{
                        width: 80, height: 3,
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: 2,
                        overflow: "hidden",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          height: "100%",
                          width: `${levelBar[tool.level] || 30}%`,
                          background: levelColor[tool.level] || "var(--text-muted)",
                          borderRadius: 2,
                          transition: "width 1s ease",
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
