"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, FigmaLogo } from "@phosphor-icons/react";
import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./motion/TiltCard";

// Stacking scroll cards (from @hugomxnning's list). Each project row is
// sticky, so as the next card scrolls in it covers the previous one —
// and GSAP scrub scales the covered card down to 0.94, so the stack
// visibly piles up. Works on touch scroll: sticky + ScrollTrigger fire
// on native scroll. GSAP owns only the outer sticky wrapper (scale);
// TiltCard owns the inner card (pointer tilt, desktop only). The Reveal
// wrapper in page.tsx clears its transform on complete, so sticky is
// not broken by an ancestor transform. Under prefers-reduced-motion:
// plain rows, no sticky scaling.
export function Projects() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]", list);
    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top+=140",
            scrub: 0.4,
          },
        });
      });
    }, list);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <SectionHeading
          index="02"
          title="Selected Projects"
          accent="six, from LinkedIn."
          note="End-to-end UI/UX work: chatbots, health, food ordering, admissions, and education. Figma prototypes open where a public link exists on LinkedIn."
        />
        <div ref={listRef} className="border-t border-line">
          {projects.map((p, i) => (
            <div
              key={p.name}
              data-stack-card
              className="sticky bg-surface"
              style={{ top: `${68 + i * 16}px` }}
            >
              <TiltCard className="border-b border-line bg-surface">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
