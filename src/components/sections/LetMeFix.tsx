import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowUpRight } from "lucide-react";

const PILLARS = [
  {
    title: "GTM & Strategy",
    body: "TAM/SAM/SOM sizing, positioning, and go-to-market playbooks that turn market insight into a clear product thesis.",
  },
  {
    title: "Execution Engine",
    body: "Roadmaps, specs, and delivery rhythms that move teams from ambiguity to shipped features — without the theatre.",
  },
  {
    title: "Elite Augmentation",
    body: "Through Vector3, I embed top-tier talent into your stack so you scale output, not headcount bureaucracy.",
  },
];

export function LetMeFix() {
  return (
    <section
      id="let-me-fix"
      className="border-t border-[#e8e8e8] px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#6b6b6b]">
              Let me fix
            </p>
            <h2 className="text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-[#111111] sm:text-4xl lg:text-5xl">
              I bridge the gap between strategy and execution.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col justify-center gap-6">
            <p className="text-base leading-relaxed text-[#6b6b6b] sm:text-lg">
              As a Product Manager and Tech Founder, I don&apos;t stop at decks and
              frameworks. I work at the intersection of startup fundamentals,
              product craft, and team building — taking messy ideas through
              validation, build, and launch.
            </p>
            <p className="text-base leading-relaxed text-[#6b6b6b] sm:text-lg">
              Whether you need a sharper GTM motion, a product org that ships,
              or elite engineers embedded via Vector3, I operate as a partner
              who owns outcomes — not just recommendations.
            </p>
            <div className="pt-2">
              <MagneticButton href="mailto:hello@shakeel.dev" variant="primary">
                Start a conversation
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </FadeIn>
        </div>

        <div className="mt-24 grid gap-px bg-[#e8e8e8] sm:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <FadeIn
              key={pillar.title}
              delay={0.1 * i}
              as="article"
              className="bg-white p-8 sm:p-10"
            >
              <h3 className="mb-3 text-sm font-medium text-[#111111]">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#6b6b6b]">
                {pillar.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
