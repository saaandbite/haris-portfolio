"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Reveal — the ONLY place GSAP touches these section wrappers. One
// animation owner per element: GSAP owns this outer wrapper's
// opacity/y/blur on scroll enter. Text Scramble, Animated Number and
// Tilt Card own their own inner nodes, never this wrapper.
//
// Deliberately OBVIOUS now: y 56px + blur 8px -> 0, 0.9s ease-out.
// The old 24px / 0.7s fade was too subtle to notice, especially on a
// phone. clearProps on complete removes the inline transform, so
// position: sticky children (Projects stacking cards) keep working.
// With prefers-reduced-motion the wrapper is left untouched — content
// is simply visible, no animation.
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 56, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          delay,
          ease: "power3.out",
          clearProps: "filter,transform,opacity",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
