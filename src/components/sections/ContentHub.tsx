"use client";

import { AutoCarousel } from "@/components/ui/AutoCarousel";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight, BookOpen, FlaskConical, Mic } from "lucide-react";

type ContentItem = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
};

const BLOGS: ContentItem[] = [
  {
    title: "The PM's Guide to TAM/SAM/SOM Without the Spreadsheet Theatre",
    excerpt:
      "How to size markets with rigour — and communicate the numbers so founders, investors, and engineers actually align.",
    date: "Mar 2026",
    readTime: "8 min",
    category: "Blog",
  },
  {
    title: "Roadmapping When Everything Is on Fire",
    excerpt:
      "A practical framework for prioritisation when your backlog is infinite and your runway is not.",
    date: "Feb 2026",
    readTime: "6 min",
    category: "Blog",
  },
];

const RESEARCH: ContentItem[] = [
  {
    title: "Go-To-Market Motion Design for Early-Stage B2B SaaS",
    excerpt:
      "Comparative analysis of PLG vs. sales-led motions across 40 seed-stage companies in APAC and MENA.",
    date: "Jan 2026",
    readTime: "14 min",
    category: "Research",
  },
  {
    title: "Team Augmentation vs. Outsourcing: A Structural Comparison",
    excerpt:
      "When embedded talent outperforms traditional outsourcing — and the organisational conditions required.",
    date: "Dec 2025",
    readTime: "11 min",
    category: "Research",
  },
];

const TALKS: ContentItem[] = [
  {
    title: "From Idea to Shipped: Full-Cycle Product Execution",
    excerpt:
      "Tech talk on bridging strategy and delivery — with live walkthroughs from EVector3 and Solvera.",
    date: "Nov 2025",
    readTime: "42 min",
    category: "Tech Talk",
  },
  {
    title: "Building Elite Teams Through Vector3",
    excerpt:
      "How we source, vet, and embed top-tier engineering talent into high-velocity product orgs.",
    date: "Oct 2025",
    readTime: "35 min",
    category: "Tech Talk",
  },
];

const ALL_FEATURED = [...BLOGS, ...RESEARCH, ...TALKS];

function FeaturedArticle({ item }: { item: ContentItem }) {
  return (
    <article className="flex flex-col items-center px-6 text-center sm:px-12">
      <span className="mb-4 rounded-full bg-[#e8eef9] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#3b49ad]">
        {item.category}
      </span>
      <h3 className="max-w-2xl text-xl font-medium leading-snug tracking-tight text-[#111111] sm:text-2xl lg:text-3xl">
        {item.title}
      </h3>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6b6b6b] sm:text-base">
        {item.excerpt}
      </p>
      <div className="mt-6 flex items-center gap-3 text-xs text-[#6b6b6b]">
        <span>{item.date}</span>
        <span className="h-1 w-1 rounded-full bg-[#d4d4d4]" />
        <span>{item.readTime} read</span>
      </div>
    </article>
  );
}

function ContentColumn({
  id,
  icon: Icon,
  label,
  items,
}: {
  id: string;
  icon: typeof BookOpen;
  label: string;
  items: ContentItem[];
}) {
  return (
    <FadeIn as="div" className="flex flex-col">
      <div
        id={id}
        className="mb-8 flex items-center gap-2 border-b border-[#e8e8e8] pb-4"
      >
        <Icon className="h-4 w-4 text-[#3b49ad]" strokeWidth={1.5} />
        <h3 className="text-sm font-medium tracking-tight text-[#111111]">
          {label}
        </h3>
      </div>

      <ul className="flex flex-col gap-px bg-[#e8e8e8]">
        {items.map((item) => (
          <li key={item.title}>
            <article className="group bg-white p-6 transition-colors hover:bg-[#fafafa] sm:p-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="text-xs text-[#6b6b6b]">
                  {item.date} · {item.readTime}
                </span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 shrink-0 text-[#6b6b6b] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  strokeWidth={1.5}
                />
              </div>
              <h4 className="mb-2 text-base font-medium leading-snug tracking-tight text-[#111111] sm:text-lg">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-[#6b6b6b]">
                {item.excerpt}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}

export function ContentHub() {
  const featuredSlides = ALL_FEATURED.map((item) => (
    <FeaturedArticle key={item.title} item={item} />
  ));

  return (
    <section className="border-t border-[#e8e8e8] px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-12 sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#6b6b6b]">
            Content Hub
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-[#111111] sm:text-4xl">
            Thinking in public.
          </h2>
          <p className="mt-4 max-w-xl text-sm text-[#6b6b6b] sm:text-base">
            Essays, research, and talks on product management, go-to-market
            strategy, and the craft of building teams that ship.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mb-16">
          <div className="relative overflow-hidden rounded-3xl border border-[#e8e8e8] bg-[#fdfcf8] py-14 sm:py-16">
            <AutoCarousel
              items={featuredSlides}
              interval={5000}
              controlClassName="bg-[#3b49ad]"
            />
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          <ContentColumn
            id="blogs"
            icon={BookOpen}
            label="Blogs"
            items={BLOGS}
          />
          <ContentColumn
            id="research"
            icon={FlaskConical}
            label="Research"
            items={RESEARCH}
          />
          <ContentColumn
            id="tech-talk"
            icon={Mic}
            label="Tech Talk"
            items={TALKS}
          />
        </div>
      </div>
    </section>
  );
}
