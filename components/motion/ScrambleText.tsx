"use client";

import { useEffect, useRef, useState } from "react";

// Text Scrambler — pattern from motion-primitives (motion-primitives.com).
// Lightweight local implementation: characters cycle through a charset and
// settle left to right. No animation library involved, so it never fights
// GSAP. It used to run once on mount and stop, which most visitors never
// saw — so it now replays every 7 seconds, keeping the motion visible
// without touching anything else. Under prefers-reduced-motion it runs
// exactly once and stops.
const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&@$";
const REPLAY_MS = 7000;

export function ScrambleText({
  text,
  className,
  speed = 28,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const [display, setDisplay] = useState(text.replace(/./g, " "));
  const frame = useRef(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = text.length * 2 + 12;
    const run = () => {
      frame.current = 0;
      const tick = () => {
        frame.current += 1;
        const settled = Math.floor((frame.current / total) * text.length);
        let out = "";
        for (let i = 0; i < text.length; i += 1) {
          if (text[i] === " ") {
            out += " ";
          } else if (i < settled) {
            out += text[i];
          } else {
            out += CHARSET[Math.floor(Math.random() * CHARSET.length)];
          }
        }
        setDisplay(out);
        if (frame.current < total) {
          raf.current = window.setTimeout(tick, speed) as unknown as number;
        } else {
          setDisplay(text);
          if (!reduced) {
            raf.current = window.setTimeout(run, REPLAY_MS) as unknown as number;
          }
        }
      };
      tick();
    };
    raf.current = window.setTimeout(run, 120) as unknown as number;
    return () => window.clearTimeout(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return <span className={className}>{display}</span>;
}
