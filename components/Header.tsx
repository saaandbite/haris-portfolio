"use client";

import { ArrowUpRight, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { profile } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-[#FAFAFA]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] max-w-[1120px] items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="font-mono text-[13px] font-semibold tracking-[0.06em] text-ink"
        >
          haris<span className="text-accent-dark">.</span>portfolio
        </a>
        <nav className="hidden items-center gap-[22px] md:flex">
          <a href="#projects" className="text-sm font-medium text-muted hover:text-ink">
            Projects
          </a>
          <a href="#experience" className="text-sm font-medium text-muted hover:text-ink">
            Experience
          </a>
          <a href="#github" className="text-sm font-medium text-muted hover:text-ink">
            GitHub
          </a>
          <a href="#awards" className="text-sm font-medium text-muted hover:text-ink">
            Awards
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-ink hover:border-ink"
          >
            <GithubLogo size={18} weight="regular" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-accent bg-accent px-3.5 py-2 text-sm font-semibold text-white hover:bg-accent-dark sm:inline-flex"
          >
            LinkedIn <ArrowUpRight size={15} weight="regular" />
          </a>
        </div>
      </div>
    </header>
  );
}
