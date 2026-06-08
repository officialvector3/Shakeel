"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { useCallback, useState } from "react";

type ImageCarouselProps = {
  slides: ReactNode[];
  className?: string;
};

export function ImageCarousel({ slides, className = "" }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className={`group relative ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e8e2d8] sm:aspect-[16/11]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {slides[index]}
          </motion.div>
        </AnimatePresence>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#1c1a18]/85 text-[#f5f0e6] shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-[#0d5c5c] active:scale-95 sm:left-4 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#1c1a18]/85 text-[#f5f0e6] shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-[#0d5c5c] active:scale-95 sm:right-4 sm:h-12 sm:w-12"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2} />
            </button>
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-[#0d5c5c]"
                  : "w-1.5 bg-[#0d5c5c]/25 hover:bg-[#0d5c5c]/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
