"use client";

import { ArrowDown, ArrowUpRight, MapPin } from "@phosphor-icons/react";
import { profile } from "@/lib/data";
import { AnimatedNumber } from "./motion/AnimatedNumber";
import { ScrambleText } from "./motion/ScrambleText";

const stats = [
  { value: 2, label: "Experience roles" },
  { value: 6, label: "Selected projects" },
  { value: 10, label: "Dicoding certifications" },
  { value: 2, label: "Hackathon 1st places" },
];

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr] md:py-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
            <b className="font-semibold text-accent-dark">[Portfolio]</b>{" "}
            <ScrambleText text="HARIS SANDI PURNA YUDHA" />
          </p>
          <h1 className="mt-5 text-balance text-[clamp(40px,6.5vw,64px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
            {profile.headline}{" "}
            <em className="font-serif font-normal italic tracking-normal">
              thoughtful design.
            </em>
          </h1>
          <p className="mt-5 max-w-prose text-pretty text-[16px] leading-relaxed text-muted">
            {profile.headlineAccent}. I turn complex workflows into
            seamless, user-centric experiences — from web dashboards to
            mobile apps and complete product ecosystems.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark"
            >
              View LinkedIn <ArrowUpRight size={16} weight="regular" />
            </a>
            <a
              href={profile.linktree}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink hover:border-ink"
            >
              linktr.ee/harispy <ArrowUpRight size={16} weight="regular" />
            </a>
          </div>
          <p className="mt-6 flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={16} weight="regular" /> {profile.location} ·{" "}
            {profile.connections} connections
          </p>
        </div>

        {/* At-a-glance panel — the visual that keeps the hero asymmetric */}
        <aside className="rounded-lg border border-line bg-surface p-6 ring-1 ring-black/5">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
            At a glance
          </p>
          <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface p-4">
                <p className="font-mono text-[28px] font-semibold leading-none tabular-nums text-ink">
                  <AnimatedNumber value={s.value} />
                </p>
                <p className="mt-2 text-[13px] leading-snug text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 border-t border-line-soft pt-4 text-[13px] leading-relaxed text-muted">
            Currently — {profile.current}
          </p>
          <a
            href="#projects"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark"
          >
            See selected work <ArrowDown size={15} weight="regular" />
          </a>
        </aside>
      </div>
    </section>
  );
}
