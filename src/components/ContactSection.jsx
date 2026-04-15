import { Phone, Mail, Linkedin, Github, ExternalLink, ArrowRight } from "lucide-react";

const contactItems = (contact) => [
  {
    icon: Phone,
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
    color: "var(--accent-green)",
    bg: "rgba(0,255,136,0.08)",
    border: "rgba(0,255,136,0.2)",
    hoverBorder: "rgba(0,255,136,0.5)",
    tag: "call_me()",
  },
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    color: "var(--accent-blue)",
    bg: "rgba(0,180,216,0.08)",
    border: "rgba(0,180,216,0.2)",
    hoverBorder: "rgba(0,180,216,0.5)",
    tag: "send_email()",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: contact.linkedin?.replace("https://", ""),
    href: contact.linkedin,
    color: "var(--accent-purple)",
    bg: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.2)",
    hoverBorder: "rgba(168,85,247,0.5)",
    tag: "connect()",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: contact.github?.replace("https://", ""),
    href: contact.github,
    color: "var(--text-primary)",
    bg: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.1)",
    hoverBorder: "rgba(255,255,255,0.3)",
    tag: "view_code()",
    external: true,
  },
];

export default function ContactSection({ contact }) {
  const items = contactItems(contact);

  return (
    <section
      id="contact"
      className="grid-bg"
      style={{
        padding: "100px 40px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute", bottom: 0, left: "50%",
        transform: "translateX(-50%)",
        width: 600, height: 300,
        background: "radial-gradient(ellipse, rgba(0,255,136,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div className="animate-fade-in-up" style={{ marginBottom: 12 }}>
          <span className="section-label">04. contact</span>
        </div>
        <h2 className="animate-fade-in-up delay-100" style={{
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          marginBottom: 12,
        }}>
          Let's <span style={{ color: "var(--accent-green)" }}>connect</span>
        </h2>
        <p className="animate-fade-in-up delay-200" style={{
          color: "var(--text-secondary)",
          marginBottom: 52,
          lineHeight: 1.7,
          maxWidth: 440,
        }}>
          Whether you have a project in mind, a collaboration opportunity, or just want to talk tech and security — my inbox is always open.
        </p>

        {/* Contact cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="animate-fade-in-up"
                style={{
                  background: item.bg,
                  border: `1px solid ${item.border}`,
                  padding: "18px 24px",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  textDecoration: "none",
                  transition: "all 0.3s",
                  animationDelay: `${0.3 + i * 0.1}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = item.hoverBorder;
                  e.currentTarget.style.transform = "translateX(8px)";
                  e.currentTarget.style.boxShadow = `0 4px 24px ${item.bg}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = item.border;
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon circle */}
                <div style={{
                  width: 44, height: 44,
                  borderRadius: "50%",
                  background: `${item.bg}`,
                  border: `1px solid ${item.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={18} color={item.color} />
                </div>

                {/* Label + value */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: item.color,
                    letterSpacing: "0.15em",
                    marginBottom: 3,
                    textTransform: "uppercase",
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontSize: "0.92rem",
                    color: "var(--text-primary)",
                    fontWeight: 500,
                  }}>
                    {item.value}
                  </div>
                </div>

                {/* Tag + arrow */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.68rem",
                    color: item.color,
                    opacity: 0.6,
                    display: "none",
                  }} className="contact-tag">
                    {item.tag}
                  </span>
                  <ArrowRight size={16} color={item.color} style={{ opacity: 0.6 }} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer line */}
        <div style={{
          marginTop: 64,
          paddingTop: 32,
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
          }}>
            © {new Date().getFullYear()} — Built with React & ❤️
          </span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
          }}>
            <span style={{ color: "var(--accent-green)" }}>$</span> made_with_passion --flag=true
          </span>
        </div>
      </div>
    </section>
  );
}
