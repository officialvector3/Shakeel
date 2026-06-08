"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";

type AutoCarouselProps = {
  items: ReactNode[];
  interval?: number;
  className?: string;
  showControls?: boolean;
  controlClassName?: string;
};

export function AutoCarousel({
  items,
  interval = 4500,
  className = "",
  showControls = true,
  controlClassName = "bg-[#2d3a8c]",
}: AutoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [paused, interval, next, items.length]);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[280px] overflow-hidden sm:min-h-[340px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 32, scale: 0.97, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -32, scale: 0.97, filter: "blur(6px)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {items[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      {showControls && items.length > 1 && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-white transition-transform hover:scale-105 active:scale-95 ${controlClassName}`}
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-white transition-transform hover:scale-105 active:scale-95 ${controlClassName}`}
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      )}

      {items.length > 1 && (
        <div className="absolute bottom-4 left-4 flex gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${controlClassName} ${
                i === index ? "w-6 opacity-100" : "w-1.5 opacity-30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
