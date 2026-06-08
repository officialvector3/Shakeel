"use client";

import { GeometricOrnament } from "@/components/ui/GeometricOrnament";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export type ProjectCardProps = {
  slug: string;
  label: string;
  headline: string;
  highlight?: string;
  tags: string[];
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  slides: ReactNode[];
  reverse?: boolean;
};

export function ProjectCard({
  slug,
  label,
  headline,
  highlight,
  tags,
  description,
  ctaLabel = "View project",
  ctaHref = "#",
  slides,
  reverse = false,
}: ProjectCardProps) {
  const renderedHeadline = highlight ? (
    <>
      {headline.split(highlight)[0]}
      <span className="text-[#0d5c5c]">{highlight}</span>
      {headline.split(highlight)[1]}
    </>
  ) : (
    headline
  );

  return (
    <article
      id={slug}
      className="relative overflow-hidden rounded-3xl bg-[#f3f0ea] p-6 sm:p-8 lg:p-10"
    >
      <GeometricOrnament
        variant="corner"
        className="pointer-events-none absolute right-4 top-4 h-10 w-10 text-[#b8956a]/50"
      />
      <GeometricOrnament
        variant="corner"
        className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 rotate-180 text-[#0d5c5c]/30"
      />

      <div
        className={`relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
          reverse ? "" : ""
        }`}
      >
        <div className={`flex flex-col ${reverse ? "lg:order-2" : ""}`}>
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#0d5c5c]">
              {label}
            </span>
            <GeometricOrnament
              variant="divider"
              className="h-3 w-16 text-[#b8956a]/60"
            />
          </div>

          <h3 className="text-2xl font-medium leading-[1.2] tracking-[-0.02em] text-[#1c1a18] sm:text-3xl lg:text-[2rem]">
            {renderedHeadline}
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#e8dfd0] px-3 py-1 text-[10px] font-medium tracking-wide text-[#0d5c5c]"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#5c564e] sm:text-base">
            {description}
          </p>

          <a
            href={ctaHref}
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#1c1a18] transition-colors hover:text-[#0d5c5c]"
          >
            {ctaLabel}
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d4ccc0] transition-all group-hover:border-[#0d5c5c] group-hover:bg-[#0d5c5c] group-hover:text-[#f5f0e6]">
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
          </a>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <ImageCarousel slides={slides} />
        </div>
      </div>
    </article>
  );
}
