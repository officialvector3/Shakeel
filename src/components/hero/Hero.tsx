"use client";

import { ScrambleText } from "@/components/ui/ScrambleText";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative px-6 pb-24 pt-36 sm:px-10 lg:px-16 lg:pb-32 lg:pt-44">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <FadeIn className="flex flex-col gap-8 lg:pr-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#6b6b6b]">
            Product Manager &amp; Tech Founder
          </p>

          <h1 className="max-w-2xl text-[2.5rem] font-medium leading-[1.08] tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
            You dream it.
            <br />
            I make it real
            <br />
            and worth it.
          </h1>

          <div className="min-h-[2rem] max-w-xl border-l-2 border-[#e8e8e8] pl-5">
            <ScrambleText />
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative aspect-[5/6] overflow-hidden rounded-[2rem] bg-[#fafafa]"
          >
            <Image
              src="/portrait.svg"
              alt="Shakeel portrait"
              fill
              priority
              className="object-cover grayscale contrast-[1.05] brightness-[0.92] sepia-[0.08]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/10 via-transparent to-transparent" />
          </motion.div>

          <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-[2rem] border border-[#e8e8e8]" />
        </FadeIn>
      </div>
    </section>
  );
}
