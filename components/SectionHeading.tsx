export function SectionHeading({
  index,
  title,
  accent,
  note,
}: {
  index: string;
  title: string;
  accent?: string;
  note?: string;
}) {
  return (
    <div className="mb-8 md:mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
        <b className="font-semibold text-accent-dark">[{index}]</b> {title}
      </p>
      <h2 className="mt-3 max-w-2xl text-balance text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
        {title}{" "}
        {accent ? (
          <em className="font-serif font-normal italic tracking-normal">
            {accent}
          </em>
        ) : null}
      </h2>
      {note ? (
        <p className="mt-3 max-w-prose text-pretty text-[15px] leading-relaxed text-muted">
          {note}
        </p>
      ) : null}
    </div>
  );
}
