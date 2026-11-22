// Single source of truth for portfolio content.
// WARNING: the public LinkedIn scrape (id.linkedin.com/in/harisforwork,
// 22 Nov 2026) turned out to be wrong / mixed with another profile:
// it listed 8 experience roles, PINGA Studio, and Bangkit Academy.
// Haris corrected it 22 Nov 2026 with a screenshot of his real
// logged-in LinkedIn Experience: only TWO roles, listed below.
// Bangkit Academy is removed entirely — Haris never joined it.
// Projects, certifications and awards below are still from that
// public scrape and are UNVERIFIED until Haris confirms them.
// Email is masked on LinkedIn and is never published.

export const profile = {
  name: "Haris Sandi Purna Yudha",
  shortName: "Haris",
  headline: "UI/UX Designer & Project Enthusiast",
  headlineAccent: "Driven to Solve Real Problems Through Thoughtful Design",
  location: "Indonesia",
  connections: 190,
  current: "Student at Universitas Teknologi Digital Indonesia",
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
    org: "Balai Diklat Industri Yogyakarta",
    type: "Internship",
    period: "Sep 2025 — May 2026 · 9 mos",
    location: "Yogyakarta, Indonesia · Hybrid",
  },
  {
    role: "Data Entry Specialist",
    org: "2captcha",
    type: "Part-time",
    period: "Sep 2020 — Sep 2024 · 4 yrs 1 mo",
    location: "Remote",
    detail:
      "Data Verification & Entry: Performed high-accuracy visual and alphanumeric data verification and entry under strict quality standards. Skills: Entri Data, Data Annotation.",
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
