import { experience } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

// Sticky-process-timeline pattern: the section label column stays put
// while the roles scroll — adapted from the anti-slop skill.
export function Experience() {
  return (
    <section id="experience" className="border-b border-line">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-14 md:grid-cols-[240px_1fr] md:py-20">
        <div className="md:sticky md:top-[84px] md:self-start">
          <SectionHeading
            index="04"
            title="Experience"
            accent="eight roles."
            note="Current roles are marked. Details are as listed on LinkedIn."
          />
        </div>
        <ol className="relative border-l border-line pl-6">
          {experience.map((e) => (
            <li key={`${e.role}-${e.org}`} className="relative pb-8 last:pb-0">
              <span
                className={`absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-surface ${
                  e.current ? "bg-accent" : "bg-line"
                }`}
                aria-hidden
              />
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-[17px] font-bold tracking-tight text-ink">
                  {e.role}
                </h3>
                {e.current ? (
                  <span className="rounded-full border border-accent bg-accent-soft px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-accent-dark">
                    Current
                  </span>
                ) : null}
              </div>
              <p className="mt-0.5 text-[15px] font-medium text-ink">
                {e.org} · {e.type}
              </p>
              <p className="mt-0.5 font-mono text-xs tabular-nums text-muted">
                {e.period} · {e.location}
              </p>
              {e.detail ? (
                <p className="mt-2 max-w-prose text-pretty text-[15px] leading-relaxed text-muted">
                  {e.detail}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
