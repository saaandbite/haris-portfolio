import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Industrial Clean (ui-ux-anti-slop): one system, no purple-blue.
        surface: "#FFFFFF",
        ink: "#09090B",
        muted: "#71717A",
        faint: "#A1A1AA",
        line: "#E4E4E7",
        "line-soft": "#EDEDEF",
        accent: "#10B981",
        "accent-dark": "#047857",
        "accent-soft": "#ECFDF5",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
