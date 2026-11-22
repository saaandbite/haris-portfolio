import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-14 md:py-20">
        <SectionHeading index="01" title="About" accent="the short version." />
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
            UI/UX Designer
            <br />
            Fullstack Developer
            <br />
            Yogyakarta, ID
          </p>
          <p className="max-w-prose text-pretty text-[17px] leading-relaxed text-ink">
            {profile.about}
          </p>
        </div>
      </div>
    </section>
  );
}
