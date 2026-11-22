"use client";

import { GraduationCap } from "@phosphor-icons/react";
import { education } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <SectionHeading index="05" title="Education" accent="two programs." />
        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
          {education.map((e) => (
            <div key={e.school} className="bg-surface p-6">
              <GraduationCap size={20} weight="regular" className="text-accent-dark" />
              <h3 className="mt-3 text-[17px] font-bold leading-snug tracking-tight text-ink">
                {e.school}
              </h3>
              <p className="mt-1 text-[15px] text-muted">{e.degree}</p>
              <p className="mt-2 font-mono text-xs tabular-nums text-faint">
                {e.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
