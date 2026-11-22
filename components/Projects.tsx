"use client";

import { ArrowUpRight, FigmaLogo } from "@phosphor-icons/react";
import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./motion/TiltCard";

// Hover-image-list pattern: full-width rows, not a uniform card grid.
// The tilt + spotlight live on the inner TiltCard; the GSAP Reveal wrapper
// (in page.tsx) owns the outer element — one animation owner each.
export function Projects() {
  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <SectionHeading
          index="02"
          title="Selected Projects"
          accent="six, from LinkedIn."
          note="End-to-end UI/UX work: chatbots, health, food ordering, admissions, and education. Figma prototypes open where a public link exists on LinkedIn."
        />
        <div className="border-t border-line">
          {projects.map((p, i) => (
            <TiltCard key={p.name} className="border-b border-line bg-surface">
              <article className="grid gap-3 px-1 py-6 md:grid-cols-[64px_1fr_auto] md:items-start md:gap-6 md:px-4">
                <p className="font-mono text-xs tabular-nums text-faint">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-[20px] font-bold leading-tight tracking-tight text-ink">
                    {p.name}
                    <span className="ml-3 text-[13px] font-medium text-muted">
                      {p.kind}
                    </span>
                  </h3>
                  {p.noDescription ? (
                    <p className="mt-1.5 max-w-prose text-[15px] italic text-faint">
                      No description available on the public LinkedIn profile.
                    </p>
                  ) : (
                    <p className="mt-1.5 max-w-prose text-pretty text-[15px] leading-relaxed text-muted">
                      {p.description}
                    </p>
                  )}
                  <p className="mt-2 font-mono text-xs tabular-nums text-muted">
                    {p.period}
                  </p>
                </div>
                {p.figma ? (
                  <a
                    href={p.figma}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-2 text-[13px] font-semibold text-ink hover:border-ink"
                  >
                    <FigmaLogo size={15} weight="regular" /> Open in Figma
                    <ArrowUpRight size={14} weight="regular" />
                  </a>
                ) : (
                  <span className="font-mono text-xs text-faint">
                    No public link
                  </span>
                )}
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
