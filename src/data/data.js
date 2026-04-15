// ============================================================
// EDIT DATA DI SINI SESUAI KEBUTUHAN ANDA
// ============================================================

// ── CARA MEMASUKKAN FOTO LOKAL ────────────────────────────
//
// 1. Taruh foto Anda di folder:  public/images/
//    Contoh: public/images/foto-profil.jpg
//
// 2. Untuk foto project taruh di: public/images/projects/
//    Contoh: public/images/projects/project1.jpg
//
// 3. Panggil dengan path seperti ini (TANPA kata "public"):
//    avatar: "/images/foto-profil.jpg"
//    thumbnail: "/images/projects/project1.jpg"
//
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Christo Pasaribu",                          // ← Ganti nama Anda
  role: "Full-Stack Developer · Security Researcher",
  tagline: "Building things for the web, mobile, and breaking them too.",
  bio: "I'm a passionate developer and security researcher who loves building robust applications and uncovering vulnerabilities. I work across web, mobile, and cybersecurity — from crafting sleek UIs to conducting penetration testing.",
  avatar: "/images/foto-profil.jpg",
  // ↑ Contoh pakai foto lokal:  avatar: "/images/foto-profil.jpg"
  // ↑ Contoh pakai URL online:  avatar: "https://avatars.githubusercontent.com/u/12345"
  location: "Medan, Indonesia",
  available: true,                            // true = tampilkan badge "open to work"
};

export const contact = {
  phone: "+62 813 9075 4645",
  email: "christopasaribu90@gmail.com",
  linkedin: "https://www.linkedin.com/in/christo-pasaribu/",
  github: "https://github.com/ChristoPasaribu",
};

// ============================================================
// PROJECTS
// Kategori: "web" | "mobile" | "red-team" | "blue-team"
//
// thumbnail — bisa pakai:
//   • path lokal : "/images/projects/nama-file.jpg"
//   • URL online : "https://images.unsplash.com/..."
//   • null       : akan tampil placeholder warna
// ============================================================
export const projects = [
  // ── WEB DEV ──────────────────────────────────────────────
  {
    id: 1,
    category: "web",
    title: "Manajemen Sistem Sekolah Berbasis Web",
    description: "Pengembangan sistem manajemen sekolah berbasis web menggunakan React untuk frontend, Node.js untuk backend, dan PostgreSQL sebagai database. Fitur utama meliputi manajemen siswa, guru, kelas, jadwal, dan inventaris.",
    thumbnail: "/images/projects/Project1.jpeg",
    // thumbnail: "/images/projects/ecommerce.jpg",  ← contoh pakai lokal
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "https://github.com/yourname/project",
    demoLink: "https://demo-link.com",
    year: "2025",
  },
  {
    id: 2,
    category: "red-team",
    title: "Final Project : Web Penetration Testing",
    description: "Laporan hasil penetration testing pada aplikasi web e-commerce fiktif yang mencakup identifikasi dan eksploitasi kerentanan OWASP TOP 10 menggunakan tools seperti Nmap, Burp Suite, dan SQL Map.",
    thumbnail: "/images/projects/Project2.png",
    tags: ["Nmap", "OWASP TOP 10", "Burp Suite", "SQL Map"],
    reportLink: "https://docs.google.com/document/d/1InZgPxJxZHK4iXUQfMMoxOJX29XtSg3WR5_Q1Raoigo/edit?usp=sharing",
    demoLink: null,
    year: "2025",
  },
  {
    id: 3,
    category: "blue-team",
    title: "Monitoring & Analyst Log with Wazuh Project",
    description: "Laporan analisis log menggunakan Wazuh untuk mendeteksi aktivitas mencurigakan pada jaringan perusahaan.",
    thumbnail: "/images/projects/Project3.png",
    tags: ["Wazuh", "Kali Linux"],
    reportLink: "https://docs.google.com/document/d/15kjf1EQesSxnUBKUEqpRbrtVYIbn_GkM/edit?usp=sharing&ouid=114216197386704011464&rtpof=true&sd=true",
    demoLink: "https://demo-link.com",
    year: "2025",
  },

  // ── MOBILE DEV ───────────────────────────────────────────
  {
    id: 4,
    category: "blue-team",
    title: "Analyst with Splunk to Finding Anomalies and Malware",
    description: "Laporan analisis malware menggunakan Splunk untuk mendeteksi anomali dan aktivitas mencurigakan pada sistem yang terinfeksi.",
    thumbnail: "/images/projects/Project4.png",
    tags: ["Splunk", "VirusTotal", "WIreshark", "Volatility3"],
    reportLink: "https://drive.google.com/file/d/13u3_0c77BF1SIkQ0-J7IH4Wt-xixXvHs/view?usp=sharing",
    writeupLink: "",
    year: "2026",
  },
  {
    id: 5,
    category: "blue-team",
    title: "Lockbit 3.0 Ransomware-Ioc-Huntinig",
    description: "Laporan analisis ransomware LockBit 3.0 dengan fokus pada hunting indikator kompromi (IOC) menggunakan tools seperti VirusTotal, Hybrid Analysis, dan Cuckoo Sandbox.",
    thumbnail: "/images/projects/Project5.jpg",
    tags: ["Virus Total"],
    link: "https://github.com/yourname/project",
    demoLink: null,
    year: "2026",
  },
  {
    id: 6,
    category: "mobile",
    title: "Blog Mobile App",
    description: "Aplikasi mobile untuk blogging yang memungkinkan pengguna membuat, mengedit, dan menghapus postingan. Dibangun dengan Kotlin, menggunakan SQLite untuk penyimpanan lokal.",
    thumbnail: "",
    tags: ["Kotlin", "SQLite", "Ktor"],
    link: "https://github.com/yourname/project",
    demoLink: null,
    year: "2026",
  },
];

// ============================================================
// TOOLS — Edit sesuai tech stack Anda
// Level: "Expert" | "Advanced" | "Intermediate" | "Beginner"
// ============================================================
export const tools = {
  web: [
    { name: "React", icon: "⚛️", level: "Intermediate" },
    { name: "Next.js", icon: "▲", level: "Intermediate" },
    { name: "Vue.js", icon: "💚", level: "Intermediate" },
    { name: "Node.js", icon: "🟢", level: "Expert" },
    { name: "TypeScript", icon: "🔷", level: "Advanced" },
    { name: "Tailwind CSS", icon: "🎨", level: "Expert" },
    { name: "PostgreSQL", icon: "🐘", level: "Advanced" },
    { name: "MongoDB", icon: "🍃", level: "Advanced" },
    { name: "Redis", icon: "🔴", level: "Intermediate" },
    { name: "Docker", icon: "🐳", level: "Advanced" },
  ],
  mobile: [
    { name: "Flutter", icon: "💙", level: "Expert" },
    { name: "React Native", icon: "📱", level: "Advanced" },
    { name: "Dart", icon: "🎯", level: "Expert" },
    { name: "Firebase", icon: "🔥", level: "Advanced" },
    { name: "Kotlin", icon: "🟣", level: "Intermediate" },
    { name: "Swift", icon: "🍎", level: "Beginner" },
    { name: "SQLite", icon: "🗃️", level: "Advanced" },
    { name: "Expo", icon: "📦", level: "Advanced" },
  ],
  redTeam: [
    { name: "Kali Linux", icon: "🐉", level: "Expert" },
    { name: "Burp Suite", icon: "🔍", level: "Expert" },
    { name: "Metasploit", icon: "💀", level: "Advanced" },
    { name: "Nmap", icon: "🗺️", level: "Expert" },
    { name: "Wireshark", icon: "🦈", level: "Advanced" },
    { name: "SQLMap", icon: "💉", level: "Advanced" },
    { name: "Hydra", icon: "🐍", level: "Intermediate" },
    { name: "Gobuster", icon: "🔓", level: "Advanced" },
  ],
  blueTeam: [
    { name: "Splunk", icon: "📊", level: "Advanced" },
    { name: "ELK Stack", icon: "🔎", level: "Intermediate" },
    { name: "Snort/Suricata", icon: "🛡️", level: "Advanced" },
    { name: "YARA", icon: "🎯", level: "Advanced" },
    { name: "Wireshark", icon: "🦈", level: "Expert" },
    { name: "Velociraptor", icon: "🦎", level: "Intermediate" },
    { name: "TheHive", icon: "🐝", level: "Intermediate" },
    { name: "OpenVAS", icon: "🔐", level: "Advanced" },
  ],
};
