// Single source of truth for portfolio content.
// Sourced from Haris Sandi Purna Yudha's public LinkedIn profile
// (id.linkedin.com/in/harisforwork, checked 22 Nov 2026).
// Skills, Languages, full contact info and any certifications beyond the
// 10 listed were not visible without sign-in and are NOT included here.
// Email is masked on LinkedIn and is never published.

export const profile = {
  name: "Haris Sandi Purna Yudha",
  shortName: "Haris",
  headline: "UI/UX Designer & Project Enthusiast",
  headlineAccent: "Driven to Solve Real Problems Through Thoughtful Design",
  location: "Indonesia",
  connections: 190,
  current:
    "Student at Universitas Teknologi Digital Indonesia · Fullstack Developer at PINGA Studio",
  linkedin: "https://www.linkedin.com/in/harisforwork",
  linktree: "https://linktr.ee/harispy",
  github: "https://github.com/saaandbite",
  githubUser: "saaandbite",
  about:
    "UI/UX Designer with a strong foundation in project management, turning complex workflows into seamless, user-centric digital experiences. I manage end-to-end product cycles and bridge design vision, technical constraints, and business goals — designing web dashboards, mobile apps, and complete product ecosystems. Open to collaborations in UI/UX design, product development, and digital innovation.",
};

export type Experience = {
  role: string;
  org: string;
  type: string;
  period: string;
  location: string;
  detail?: string;
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "Fullstack Developer",
    org: "PINGA Studio",
    type: "Full-time",
    period: "Jun 2025 — Present",
    location: "Yogyakarta · Hybrid",
    current: true,
  },
  {
    role: "Data Entry Specialist",
    org: "2Captcha",
    type: "Part-time",
    period: "Jan 2025 — Present",
    location: "Remote",
    detail: "Accurate, detail-focused data processing under strict quality guidelines.",
    current: true,
  },
  {
    role: "UI/UX Designer",
    org: "Komunitas Teknologi Informasi UTDI",
    type: "Part-time",
    period: "Sep 2024 — Present",
    location: "Yogyakarta · On-site",
    current: true,
  },
  {
    role: "UI/UX Designer",
    org: "HMPSI Universitas PGRI Yogyakarta",
    type: "Part-time",
    period: "Jan 2025 — Jun 2025",
    location: "Yogyakarta · On-site",
  },
  {
    role: "Full Stack Developer",
    org: "HMPSI Universitas PGRI Yogyakarta",
    type: "Internship",
    period: "Dec 2024 — Feb 2025",
    location: "Hybrid",
    detail: "Built the HMPSI UKM attendance management website, full lifecycle.",
  },
  {
    role: "Web Developer",
    org: "HMIF UTDI",
    type: "Internship",
    period: "Jun 2024 — Aug 2024",
    location: "Hybrid",
    detail: "Built the official HMIF UTDI website, full lifecycle.",
  },
  {
    role: "UI/UX Designer",
    org: "Himpunan Mahasiswa Informatika UTDI",
    type: "Part-time",
    period: "May 2024 — Dec 2024",
    location: "Yogyakarta · On-site",
  },
  {
    role: "UI/UX Design and Web Development",
    org: "Bangkit Academy 2024 by Google, GoTo, and Traveloka",
    type: "Internship",
    period: "Feb 2024 — Jul 2024",
    location: "Hybrid",
    detail:
      "Cloud Computing path: Google Cloud, deploying ML models, websites, REST APIs. Capstone in a team of 5–6.",
  },
];

export type Project = {
  name: string;
  period: string;
  kind: string;
  description: string;
  figma?: string;
  noDescription?: boolean;
};

export const projects: Project[] = [
  {
    name: "KINARA",
    period: "May — Aug 2025",
    kind: "AI Chatbot · ASEAN AI Summit 2025",
    description:
      "AI chatbot helping teachers and students access accurate information about financial institutions and banking regulations.",
  },
  {
    name: "Zenly",
    period: "Jun — Jul 2025",
    kind: "Mental Health App",
    description:
      "Daily check-ins, calming activities, and guided self-reflection, designed for calmer everyday routines.",
    figma:
      "https://www.figma.com/proto/fAw5Kob25Pc7s5ZcftF8cE?node-id=5-4",
  },
  {
    name: "Laper Pak",
    period: "Sep — Oct 2024",
    kind: "Food Ordering App · UINIC 6.0",
    description: "Food ordering app designed for the UINIC 6.0 competition.",
    figma:
      "https://www.figma.com/proto/YiTsXGJF1Fb8POyi1lZ7Hg/LAPER-PAK-UINIC6.0?node-id=0-1&t=Gs25Cb1jBF9vP5wJ-1",
  },
  {
    name: "Easy PPDB",
    period: "Jun — Jul 2024",
    kind: "Student Admission App",
    description:
      "Student admission app for parents and school administrators.",
    figma:
      "https://www.figma.com/proto/8Ou9Y2iQm4Pjbt9blMSl9l/Easy-PPDB?node-id=0-1&t=MtxofMxIn0gb6FCT-1",
  },
  {
    name: "MediTalk",
    period: "Mar — Apr 2024",
    kind: "UNY National IT Competition",
    description: "",
    noDescription: true,
  },
  {
    name: "Edusani",
    period: "May — Jun 2024",
    kind: "Education App",
    description:
      "Accessible content and interactive features for students.",
    figma:
      "https://www.figma.com/proto/llHxdJ1X0j0D0ri4Wskt2R/REMAKE-EDUSANI?node-id=0-1&t=I6pd09VELldIoPv4-1",
  },
];

export const education = [
  {
    school: "Universitas Teknologi Digital Indonesia",
    degree: "Bachelor, Informatics",
    period: "2023 — 2027",
  },
  {
    school: "Bangkit Academy led by Google, GoTo, & Traveloka",
    degree: "Cloud Computing",
    period: "Feb — Jul 2024",
  },
];

export const certifications = [
  { name: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding", date: "Nov 2024" },
  { name: "Belajar Membuat Aplikasi Web dengan React", issuer: "Dicoding", date: "Nov 2024" },
  { name: "Belajar Membuat Aplikasi Back-End untuk Pemula", issuer: "Dicoding", date: "Nov 2024" },
  { name: "Belajar Dasar Pemrograman Web", issuer: "Dicoding", date: "Oct 2024" },
  { name: "Belajar Dasar AI", issuer: "Dicoding", date: "Sep 2024" },
  { name: "Belajar Dasar Cloud dan Gen AI di AWS", issuer: "Dicoding", date: "Sep 2024" },
  { name: "Belajar Membuat Front-End Web untuk Pemula", issuer: "Dicoding", date: "Aug 2024" },
  { name: "Memulai Pemrograman dengan Python", issuer: "Dicoding", date: "Jul 2024" },
  { name: "Belajar Dasar Git dengan GitHub", issuer: "Dicoding", date: "Jul 2024" },
  { name: "Belajar Dasar Structured Query Language (SQL)", issuer: "Dicoding", date: "Jul 2024" },
];

export const awards = [
  {
    title: "1st Place — UKDW x Refactory Hackathon 2025",
    date: "Dec 2025",
    detail:
      'Project "Type Code Type Less, Get More with AI" — AI-powered webapp builder on Backstage.io (React/TypeScript), automated data scraping engine, Docker. Role: Full Stack Developer.',
  },
  {
    title: "Juara 1 — Lomba UI/UX Design, HMPI-TECHFest 2025",
    date: "Jun 2025",
    detail: "First place in the UI/UX design competition.",
  },
];

// GitHub activity — verified via the GitHub API on 22 Nov 2026.
// No streak or contribution total is claimed anywhere: GitHub's public
// API does not expose a verified total, and the live SVG is the source.
export const githubRepos = [
  { name: "warung-ai", language: "JavaScript", updated: "21 Nov 2026" },
  { name: "posme", language: "PHP", updated: "19 Nov 2026" },
  { name: "faucet-hub", language: "TypeScript", updated: "18 Nov 2026" },
  { name: "toko-vinyl-musik", language: "PHP", updated: "16 Nov 2026" },
  { name: "spaceapp", language: "Jupyter Notebook", updated: "15 Nov 2026" },
];
