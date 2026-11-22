"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// WordReveal — word-by-word blur-in, from @hugomxnning's list
// (blur-in text + word-by-word reveal). Each word is its own inline-block
// span: opacity 0 + y 40 + blur 8px -> visible, staggered 0.07s, ease-out.
// mode "scroll" plays when the words enter the viewport (works on touch
// scroll, because ScrollTrigger fires on native scroll); mode "mount"
// plays once on load, for the hero headline. One animation owner: GSAP
// owns only these word spans, nothing else. With prefers-reduced-motion
// the words render as plain text, no animation at all.
export function WordReveal({
  text,
  className = "",
  mode = "scroll",
  delay = 0,
  stagger = 0.07,
}: {
  text: string;
  className?: string;
  mode?: "scroll" | "mount";
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.split(" ");
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;
    const spans = el.querySelectorAll<HTMLElement>("[data-word]");
    if (spans.length === 0) return;
    const ctx = gsap.context(() => {
      if (mode === "mount") {
        gsap.fromTo(
          spans,
          { opacity: 0, y: 40, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            delay,
            stagger,
            ease: "power3.out",
            clearProps: "filter",
          },
        );
      } else {
        gsap.fromTo(
          spans,
          { opacity: 0, y: 40, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            delay,
            stagger,
            ease: "power3.out",
            clearProps: "filter",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      }
    }, el);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, mode]);

  if (reduced) return <span className={className}>{text}</span>;

  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} data-word className="inline-block will-change-transform">
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
