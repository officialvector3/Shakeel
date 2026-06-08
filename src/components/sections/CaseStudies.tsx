"use client";

import { AutoCarousel } from "@/components/ui/AutoCarousel";
import { FadeIn } from "@/components/ui/FadeIn";
import { MockupSlide } from "@/components/ui/MockupSlide";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const CASES = [
  {
    slug: "evector3",
    brand: "EVector3",
    label: "Launched Products",
    headline:
      "How did we launch app-based e-bike rental on Marine Drive in 90 days?",
    tags: ["MOBILITY", "STARTUP", "PRODUCT"],
    description:
      "End-to-end mobility product — consumer booking app, fleet operations dashboard, and payment flows built for high-traffic coastal routes.",
    accent: "#3b49ad",
    slides: ["mobile", "dashboard", "mobile"] as const,
    reverse: false,
  },
  {
    slug: "solvera",
    brand: "Solvera",
    label: "Launched Products",
    headline:
      "How did we build a compliant digital investment marketplace from zero?",
    tags: ["FINTECH", "MARKETPLACE", "B2B"],
    description:
      "Digital investment marketplace connecting investors with vetted opportunities — compliance-first onboarding, KYC flows, and portfolio tooling.",
    accent: "#2d3a8c",
    slides: ["marketplace", "dashboard", "marketplace"] as const,
    reverse: true,
  },
  {
    slug: "macinno",
    brand: "Macinno",
    label: "Launched Products",
    headline:
      "How did we streamline BPO & IT sourcing for enterprise procurement?",
    tags: ["ENTERPRISE", "BPO", "SAAS"],
    description:
      "Vendor discovery, RFP workflows, and contract management — replacing spreadsheet chaos with a single sourcing platform.",
    accent: "#4a58c4",
    slides: ["enterprise", "dashboard", "enterprise"] as const,
    reverse: false,
  },
];

const SPOTLIGHT = CASES.map((c) => ({
  brand: c.brand,
  headline: c.headline,
}));

function CaseStudyRow({
  item,
}: {
  item: (typeof CASES)[number];
}) {
  const slides = item.slides.map((variant, i) => (
    <MockupSlide key={i} variant={variant} accent={item.accent} />
  ));

  const textBlock = (
    <div className="flex flex-col justify-center">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#3b49ad]">
          {item.label}
        </span>
        <span className="h-px flex-1 bg-[#e8e8e8]" />
      </div>

      <p className="mb-2 text-lg font-semibold tracking-tight text-[#111111]">
        {item.brand}
      </p>

      <h3 className="text-2xl font-medium leading-[1.2] tracking-[-0.02em] text-[#111111] sm:text-3xl lg:text-[2rem]">
        {item.headline}
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#e8eef9] px-3 py-1 text-[10px] font-medium tracking-wide text-[#3b49ad]"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#6b6b6b] sm:text-base">
        {item.description}
      </p>

      <a
        href={`#${item.slug}`}
        className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#3b49ad] transition-colors hover:text-[#111111]"
      >
        View case study
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );

  const visualBlock = (
    <div className="relative overflow-hidden rounded-3xl bg-[#f0f0ee]">
      <AutoCarousel items={slides} interval={3800} />
    </div>
  );

  return (
    <article
      id={item.slug}
      className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
        item.reverse ? "" : ""
      }`}
    >
      <div className={item.reverse ? "lg:order-2" : ""}>{textBlock}</div>
      <div className={item.reverse ? "lg:order-1" : ""}>{visualBlock}</div>
    </article>
  );
}

function SpotlightTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SPOTLIGHT.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mb-20 overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white px-6 py-5 sm:px-8">
      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">
        Now featuring
      </p>
      <div className="relative h-14 overflow-hidden sm:h-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <span className="text-xs font-medium text-[#3b49ad]">
              {SPOTLIGHT[index].brand}
            </span>
            <span className="text-sm font-medium tracking-tight text-[#111111] sm:text-base">
              {SPOTLIGHT[index].headline}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="border-t border-[#e8e8e8] bg-[#fdfcf8] px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#6b6b6b]">
            Case Studies
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-[#111111] sm:text-4xl">
            Work that ships.
          </h2>
        </FadeIn>

        <SpotlightTicker />

        <div className="flex flex-col gap-28 lg:gap-36">
          {CASES.map((item, i) => (
            <FadeIn key={item.slug} delay={0.06 * i}>
              <CaseStudyRow item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
