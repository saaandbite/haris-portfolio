"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollProgress } from "./ScrollProgress";

// MotionProvider — Lenis smooth scroll (darkroomengineering/lenis) synced
// to GSAP ScrollTrigger, per the anti-slop skill. Mounted once in layout.
// Lenis owns scroll position; GSAP owns reveal transforms; neither touches
// the elements owned by ScrambleText / AnimatedNumber / TiltCard /
// WordReveal. ScrollTrigger fires on native touch scroll too, so every
// scroll-enter animation works on phones — Lenis smooth-wheel is a
// desktop enhancement, not the animation itself.
// With prefers-reduced-motion: no Lenis at all, native scroll only.
export function MotionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
}
