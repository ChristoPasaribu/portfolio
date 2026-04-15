import "./index.css";
import { profile, contact, projects, tools } from "./data/data";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ToolsSection from "./components/ToolsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar name={profile.name} />
      <HeroSection profile={profile} />

      {/* Divider */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
        <div style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--border-accent), transparent)",
        }} />
      </div>

      <ProjectsSection projects={projects} />

      {/* Divider */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
        <div style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--border-accent), transparent)",
        }} />
      </div>

      <ToolsSection tools={tools} />

      {/* Divider */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
        <div style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--border-accent), transparent)",
        }} />
      </div>

      <ContactSection contact={contact} />
    </div>
  );
}
