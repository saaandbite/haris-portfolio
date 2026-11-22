"use client";

import { Trophy } from "@phosphor-icons/react";
import { awards } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Awards() {
  return (
    <section id="awards" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <SectionHeading index="07" title="Awards" accent="two first places." />
        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((a) => (
            <article
              key={a.title}
              className="rounded-lg border border-line bg-surface p-6 ring-1 ring-black/5"
            >
              <Trophy size={22} weight="regular" className="text-accent-dark" />
              <h3 className="mt-4 text-[19px] font-bold leading-snug tracking-tight text-ink">
                {a.title}
              </h3>
              <p className="mt-1 font-mono text-xs tabular-nums text-muted">
                {a.date}
              </p>
              <p className="mt-3 max-w-prose text-pretty text-[15px] leading-relaxed text-muted">
                {a.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
