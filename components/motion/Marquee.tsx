// Marquee — logo marquee pattern from @hugomxnning's list and
// Bundui/Eldora UI. A continuous, obviously-moving strip of the tools
// and roles behind this portfolio. Pure CSS animation (no JS owner to
// fight GSAP), duplicated content for a seamless loop. Paused entirely
// under prefers-reduced-motion (see globals.css).
const ITEMS = [
  "Next.js",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Lenis",
  "Figma",
  "UI/UX Design",
  "Motion Primitives",
  "Phosphor Icons",
  "Vercel",
  "GitHub",
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center font-mono text-xs uppercase tracking-[0.14em] text-muted"
        >
          <span className="px-5 py-3">{item}</span>
          <span className="text-accent-dark">//</span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-b border-line bg-surface">
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
