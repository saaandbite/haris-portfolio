"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// MotionProvider — Lenis smooth scroll (darkroomengineering/lenis) synced
// to GSAP ScrollTrigger, per the anti-slop skill. Mounted once in layout.
// Lenis owns scroll position; GSAP owns reveal transforms; neither touches
// the elements owned by ScrambleText / AnimatedNumber / TiltCard.
export function MotionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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

  return <>{children}</>;
}
