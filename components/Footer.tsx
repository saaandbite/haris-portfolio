"use client";

import { ArrowUpRight, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="bg-surface">
      <div className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
          <b className="font-semibold text-accent-dark">[08]</b> Contact
        </p>
        <h2 className="mt-4 max-w-2xl text-balance text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
          Let&apos;s build something{" "}
          <em className="font-serif font-normal italic tracking-normal">
            thoughtful.
          </em>
        </h2>
        <p className="mt-4 max-w-prose text-pretty text-[15px] leading-relaxed text-muted">
          Open to UI/UX design, product development, and digital innovation
          collaborations. Reach out through LinkedIn — no email is published
          here, as LinkedIn masks it.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark"
          >
            <LinkedinLogo size={16} weight="regular" /> LinkedIn
            <ArrowUpRight size={15} weight="regular" />
          </a>
          <a
            href={profile.linktree}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink hover:border-ink"
          >
            linktr.ee/harispy <ArrowUpRight size={15} weight="regular" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink hover:border-ink"
          >
            <GithubLogo size={16} weight="regular" /> github.com/saaandbite
            <ArrowUpRight size={15} weight="regular" />
          </a>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
          <p className="font-mono text-xs text-muted">
            © 2026 {profile.name}
          </p>
          <p className="font-mono text-xs text-faint">
            Content from linkedin.com/in/harisforwork · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
