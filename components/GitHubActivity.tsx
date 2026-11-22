"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { githubRepos, profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { AnimatedNumber } from "./motion/AnimatedNumber";

// Live contribution graph from GitHub data. The direct GitHub URL
// github.com/users/saaandbite/contributions returns text/html with
// X-Frame-Options: deny, so it cannot render as an <img> — that is why
// the graph was blank. ghchart.rshah.org renders the same GitHub data
// as a real SVG (image/svg+xml) and works as an image. Total verified
// 22 Nov 2026 from GitHub itself: 390 contributions in the last year.
//
// The graph is now impossible to miss: it wipes in with a clip-path
// reveal on scroll enter, and the 390 counts up large above it.
export function GitHubActivity() {
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = graphRef.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="github" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <SectionHeading
          index="03"
          title="GitHub Activity"
          accent="live from GitHub."
          note="390 contributions in the last year, verified from GitHub. Graph renders GitHub data live via ghchart. Repos below are the five most recently updated, verified via the GitHub API."
        />
        <p className="mb-4 flex items-baseline gap-3">
          <span className="font-mono text-[44px] font-semibold leading-none tabular-nums text-ink">
            <AnimatedNumber value={390} duration={1800} />
          </span>
          <span className="text-[15px] font-medium text-muted">
            contributions in the last year
          </span>
        </p>
        <div
          ref={graphRef}
          className="overflow-hidden rounded-lg border border-line bg-surface p-4 ring-1 ring-black/5 md:p-6"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-muted">
              <GithubLogo size={16} weight="regular" /> @{profile.githubUser}
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-accent-dark"
            >
              github.com/saaandbite <ArrowUpRight size={14} weight="regular" />
            </a>
          </div>
          <div className="mt-4 overflow-x-auto">
            {/* Plain img, not next/image: ghchart serves a real SVG and
                Next's optimizer does not need to touch it. */}
            <img
              src="https://ghchart.rshah.org/saaandbite"
              alt="GitHub contribution graph for saaandbite, 390 contributions in the last year"
              width={1224}
              height={168}
              className="min-w-[720px]"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-[13px] text-faint">
            390 contributions in the last year, as counted by GitHub.
            Graph renders live GitHub data via ghchart.
          </p>
        </div>
        <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {githubRepos.map((r) => (
            <a
              key={r.name}
              href={`${profile.github}/${r.name}`}
              target="_blank"
              rel="noreferrer"
              className="group bg-surface p-4 hover:bg-accent-soft"
            >
              <p className="font-mono text-[13px] font-semibold text-ink group-hover:text-accent-dark">
                {r.name}
              </p>
              <p className="mt-1.5 text-[13px] text-muted">{r.language}</p>
              <p className="mt-1 font-mono text-xs tabular-nums text-faint">
                Updated {r.updated}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
