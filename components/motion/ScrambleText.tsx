"use client";

import { useEffect, useRef, useState } from "react";

// Text Scrambler — pattern from motion-primitives (motion-primitives.com).
// Lightweight local implementation: characters cycle through a charset and
// settle left to right, once on mount. No animation library involved, so it
// never fights GSAP. Runs once, then stops — cheap on CPU, 60fps safe.
const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&@$";

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
    const total = text.length * 2 + 12;
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
      }
    };
    raf.current = window.setTimeout(tick, 120) as unknown as number;
    return () => window.clearTimeout(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return <span className={className}>{display}</span>;
}
