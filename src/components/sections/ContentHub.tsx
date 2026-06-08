import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight, BookOpen, FlaskConical, Mic } from "lucide-react";

type ContentItem = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

const BLOGS: ContentItem[] = [
  {
    title: "The PM's Guide to TAM/SAM/SOM Without the Spreadsheet Theatre",
    excerpt:
      "How to size markets with rigour — and communicate the numbers so founders, investors, and engineers actually align.",
    date: "Mar 2026",
    readTime: "8 min",
  },
  {
    title: "Roadmapping When Everything Is on Fire",
    excerpt:
      "A practical framework for prioritisation when your backlog is infinite and your runway is not.",
    date: "Feb 2026",
    readTime: "6 min",
  },
];

const RESEARCH: ContentItem[] = [
  {
    title: "Go-To-Market Motion Design for Early-Stage B2B SaaS",
    excerpt:
      "Comparative analysis of PLG vs. sales-led motions across 40 seed-stage companies in APAC and MENA.",
    date: "Jan 2026",
    readTime: "14 min",
  },
  {
    title: "Team Augmentation vs. Outsourcing: A Structural Comparison",
    excerpt:
      "When embedded talent outperforms traditional outsourcing — and the organisational conditions required.",
    date: "Dec 2025",
    readTime: "11 min",
  },
];

const TALKS: ContentItem[] = [
  {
    title: "From Idea to Shipped: Full-Cycle Product Execution",
    excerpt:
      "Tech talk on bridging strategy and delivery — with live walkthroughs from EVector3 and Solvera.",
    date: "Nov 2025",
    readTime: "42 min",
  },
  {
    title: "Building Elite Teams Through Vector3",
    excerpt:
      "How we source, vet, and embed top-tier engineering talent into high-velocity product orgs.",
    date: "Oct 2025",
    readTime: "35 min",
  },
];

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
        <Icon className="h-4 w-4 text-[#6b6b6b]" strokeWidth={1.5} />
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
  return (
    <section className="border-t border-[#e8e8e8] px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-16 sm:mb-20">
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
