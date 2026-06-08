"use client";

import { ScrambleText } from "@/components/ui/ScrambleText";
import { FadeIn } from "@/components/ui/FadeIn";
import { GeometricOrnament } from "@/components/ui/GeometricOrnament";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pattern-diamond relative overflow-hidden px-6 pb-24 pt-36 sm:px-10 lg:px-16 lg:pb-32 lg:pt-44">
      <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-[#b8956a]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-48 w-48 rounded-full bg-[#0d5c5c]/8 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <FadeIn className="flex flex-col gap-8 lg:pr-8">
          <div className="flex items-center gap-3">
            <GeometricOrnament variant="tile" className="h-8 w-8 text-[#b8956a]" />
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#0d5c5c]">
              Product Manager &amp; Tech Founder
            </p>
          </div>

          <h1 className="max-w-2xl font-serif text-[2.5rem] font-medium leading-[1.08] tracking-[-0.02em] text-[#1c1a18] sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
            You dream it.
            <br />
            I make it real
            <br />
            <span className="text-[#0d5c5c]">and worth it.</span>
          </h1>

          <div className="min-h-[2rem] max-w-xl border-l-2 border-[#b8956a]/50 pl-5">
            <ScrambleText />
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative aspect-[5/6] overflow-hidden rounded-[2rem] bg-[#ede6da]"
          >
            <Image
              src="/portrait.svg"
              alt="Shakeel portrait"
              fill
              priority
              className="object-cover contrast-[1.05] brightness-[0.95] sepia-[0.12] saturate-[0.85]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1c1a18]/20 via-transparent to-transparent" />
            <GeometricOrnament
              variant="corner"
              className="absolute right-4 top-4 h-10 w-10 text-[#b8956a]/70"
            />
          </motion.div>

          <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-[2rem] border border-[#e0d5c8]" />
        </FadeIn>
      </div>
    </section>
  );
}
