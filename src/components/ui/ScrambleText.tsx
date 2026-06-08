"use client";

import { useEffect, useRef, useState } from "react";

const PHRASES = [
  "I build the best product.",
  "I architect the best solutions.",
  "I manage the work to be done.",
  "I provide elite team augmentation.",
];

const CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

function scrambleFrame(target: string, progress: number): string {
  return target
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      const threshold = i / target.length;
      if (progress >= threshold) return char;
      return CHARSET[Math.floor(Math.random() * CHARSET.length)];
    })
    .join("");
}

export function ScrambleText() {
  const [display, setDisplay] = useState(PHRASES[0]);
  const phraseIndex = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    let holdTimeout: ReturnType<typeof setTimeout>;
    let scrambleInterval: ReturnType<typeof setInterval>;

    function cycle() {
      const nextIndex = (phraseIndex.current + 1) % PHRASES.length;
      const target = PHRASES[nextIndex];
      let progress = 0;

      scrambleInterval = setInterval(() => {
        progress += 0.06;
        setDisplay(scrambleFrame(target, Math.min(progress, 1)));

        if (progress >= 1) {
          clearInterval(scrambleInterval);
          phraseIndex.current = nextIndex;
          setDisplay(target);
          holdTimeout = setTimeout(cycle, 3200);
        }
      }, 40);
    }

    holdTimeout = setTimeout(cycle, 3200);

    return () => {
      clearTimeout(holdTimeout);
      clearInterval(scrambleInterval);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <span className="font-mono text-base tracking-tight text-[#5c564e] sm:text-lg md:text-xl">
      {display}
    </span>
  );
}
