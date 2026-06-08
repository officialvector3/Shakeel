import { ProjectCard } from "@/components/case-studies/ProjectCard";
import { ProjectSlide } from "@/components/case-studies/ProjectSlide";
import { FadeIn } from "@/components/ui/FadeIn";
import { GeometricOrnament } from "@/components/ui/GeometricOrnament";

const PROJECTS = [
  {
    slug: "evector3",
    label: "LAUNCHED PRODUCTS",
    headline:
      "How did we launch EVector3's app-based e-bike rental service on Marine Drive?",
    highlight: "Marine Drive",
    tags: ["MOBILITY", "APP DESIGN", "BRANDING"],
    description:
      "We designed the logo and built the foundational branding for a seamless, user-centric e-bike rental experience operating along the longest sea beach.",
    ctaLabel: "View project",
    ctaHref: "#evector3",
    variant: "app" as const,
    title: "EVector3",
    reverse: false,
  },
  {
    slug: "solvera",
    label: "PLATFORM DEVELOPMENT",
    headline:
      "How did we structure the Solvera digital investment marketplace?",
    highlight: "Solvera",
    tags: ["FINTECH", "MARKETPLACE", "PRODUCT MANAGEMENT"],
    description:
      "From initial concept to project scope, we managed the work to be done to ensure the platform's architecture aligned with modern investment needs.",
    ctaLabel: "View website",
    ctaHref: "#solvera",
    variant: "dashboard" as const,
    title: "Solvera",
    reverse: true,
  },
  {
    slug: "macinno",
    label: "TEAM AUGMENTATION",
    headline: "How do we scale operations for the Macinno Platform?",
    highlight: "Macinno Platform",
    tags: ["BPO", "IT SOURCING", "TEAM SCALING"],
    description:
      "We provide elite team augmentation, seamlessly integrating professionals like Ally, Katie, and Hana to manage CRM pipelines and execute back-office operations.",
    ctaLabel: "View project",
    ctaHref: "#macinno",
    variant: "team" as const,
    title: "Macinno",
    reverse: false,
  },
];

export function FeaturedCaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative border-t border-[#e0d5c8] bg-[#faf7f2] px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8956a' fill-opacity='0.08'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn className="mb-16 text-center sm:mb-20">
          <GeometricOrnament
            variant="tile"
            className="mx-auto mb-6 h-12 w-12 text-[#b8956a]"
          />
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#0d5c5c]">
            Featured Case Studies
          </p>
          <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] text-[#1c1a18] sm:text-4xl lg:text-5xl">
            Craft, evidence, and execution.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#5c564e] sm:text-base">
            A curated selection of products launched, platforms architected, and
            teams scaled — each told through outcome-focused storytelling.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-8 lg:gap-10">
          {PROJECTS.map((project, i) => {
            const slides = [0, 1, 2].map((slideIndex) => (
              <ProjectSlide
                key={slideIndex}
                variant={project.variant}
                index={slideIndex}
                title={project.title}
              />
            ));

            return (
              <FadeIn key={project.slug} delay={0.08 * i}>
                <ProjectCard
                  slug={project.slug}
                  label={project.label}
                  headline={project.headline}
                  highlight={project.highlight}
                  tags={project.tags}
                  description={project.description}
                  ctaLabel={project.ctaLabel}
                  ctaHref={project.ctaHref}
                  slides={slides}
                  reverse={project.reverse}
                />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
