"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollProgress — thin emerald progress bar pinned to the very top of
// the viewport (above the sticky header, z-50). GSAP ScrollTrigger scrub
// drives scaleX 0 -> 1 as the page is scrolled, on desktop and on touch.
// This is the one piece of motion that is always visible, even if the
// user never stops scrolling long enough to notice a reveal.
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.style.transform = "scaleX(1)";
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent"
    >
      <div
        ref={ref}
        className="h-full w-full origin-left bg-[#10B981]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
