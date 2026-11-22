"use client";

import Image from "next/image";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { githubRepos, profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

// Live contribution graph, loaded straight from GitHub — no invented
// streak or total. GitHub's public API exposes no verified total, so the
// SVG is the source and no number is claimed.
export function GitHubActivity() {
  return (
    <section id="github" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <SectionHeading
          index="03"
          title="GitHub Activity"
          accent="live from GitHub."
          note="Contribution graph loads live from github.com/users/saaandbite/contributions. Repos below are the five most recently updated, verified via the GitHub API."
        />
        <div className="overflow-hidden rounded-lg border border-line bg-surface p-4 ring-1 ring-black/5 md:p-6">
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
            <Image
              src="https://github.com/users/saaandbite/contributions"
              alt="GitHub contribution graph for saaandbite, loaded live from GitHub"
              width={1224}
              height={168}
              className="min-w-[720px]"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-[13px] text-faint">
            Graph rendered by GitHub. No streak or total is stated here —
            GitHub does not publish a verified total through its public API.
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
