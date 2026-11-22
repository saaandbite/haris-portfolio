// Marquee — logo marquee pattern from @hugomxnning's list and
// Bundui/Eldora UI. A continuous, obviously-moving strip of the tools
// behind this portfolio. Each item is a real brand logo (Simple Icons
// CDN, monochrome ink #09090B for a clean Industrial Clean look) plus
// its name, so it reads at a glance instead of plain running text.
// Pure CSS animation (no JS owner to fight GSAP), duplicated content
// for a seamless loop. Paused entirely under prefers-reduced-motion
// (see globals.css).
const ITEMS = [
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React 19", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "GSAP", slug: "gsap" },
  { name: "Figma", slug: "figma" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Vercel", slug: "vercel" },
  { name: "GitHub", slug: "github" },
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {ITEMS.map((item) => (
        <span
          key={item.slug}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted"
        >
          <span className="flex items-center gap-2 px-5 py-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://cdn.simpleicons.org/${item.slug}/09090B`}
              alt=""
              width={20}
              height={20}
              loading="lazy"
            />
            {item.name}
          </span>
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
