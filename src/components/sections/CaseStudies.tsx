"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CASES = [
  {
    slug: "evector3",
    title: "EVector3",
    category: "Mobility · Product",
    description:
      "App-based e-bike rental on Marine Drive — end-to-end booking, fleet ops, and a consumer experience built for high-traffic coastal routes.",
    span: "col-span-1 row-span-2 lg:col-span-2 lg:row-span-2",
    accent: "from-[#f5f5f5] to-[#ebebeb]",
  },
  {
    slug: "solvera",
    title: "Solvera",
    category: "Fintech · Marketplace",
    description:
      "Digital investment marketplace connecting investors with vetted opportunities through compliance-first onboarding.",
    span: "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1",
    accent: "from-[#f8f8f8] to-[#efefef]",
  },
  {
    slug: "macinno",
    title: "Macinno Platform",
    category: "Enterprise · BPO",
    description:
      "BPO & IT sourcing platform — vendor discovery, RFP workflows, and contract management for enterprise procurement teams.",
    span: "col-span-1 row-span-1 lg:col-span-3 lg:row-span-1",
    accent: "from-[#f3f3f3] to-[#e9e9e9]",
  },
];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="border-t border-[#e8e8e8] px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-16 flex flex-col gap-4 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#6b6b6b]">
              Case Studies
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-[#111111] sm:text-4xl">
              Work that ships.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[#6b6b6b]">
            Selected engagements across mobility, fintech, and enterprise
            platforms.
          </p>
        </FadeIn>

        <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {CASES.map((item, i) => (
            <FadeIn key={item.slug} delay={0.08 * i} className={item.span}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full min-h-[220px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white p-8 transition-shadow duration-500 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#6b6b6b]">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-medium tracking-tight text-[#111111] sm:text-3xl">
                    {item.title}
                  </h3>
                </div>

                <div className="relative z-10 mt-8">
                  <p className="max-w-md translate-y-2 text-sm leading-relaxed text-[#6b6b6b] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#111111] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    View case study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
