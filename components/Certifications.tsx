"use client";

import { SealCheck } from "@phosphor-icons/react";
import { certifications } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <SectionHeading
          index="06"
          title="Certifications"
          accent="ten from Dicoding."
          note="The ten certificates visible on the public LinkedIn profile. More may exist behind sign-in and are not listed here."
        />
        <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {certifications.map((c) => (
            <li key={c.name} className="flex items-start gap-3 bg-surface p-4">
              <SealCheck
                size={18}
                weight="regular"
                className="mt-0.5 shrink-0 text-accent-dark"
              />
              <div>
                <p className="text-[15px] font-semibold leading-snug text-ink">
                  {c.name}
                </p>
                <p className="mt-0.5 font-mono text-xs tabular-nums text-muted">
                  {c.issuer} · {c.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
