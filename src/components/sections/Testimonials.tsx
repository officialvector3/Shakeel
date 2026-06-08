"use client";

import { AutoCarousel } from "@/components/ui/AutoCarousel";
import { FadeIn } from "@/components/ui/FadeIn";

const TESTIMONIALS = [
  {
    quote:
      "Shakeel didn't just roadmap our product — he embedded with our team and shipped the first version in 8 weeks. The clarity he brought to our GTM was transformative.",
    name: "Sarah Chen",
    role: "CEO, Series A Fintech",
    company: "Solvera",
  },
  {
    quote:
      "The Product Workshop completely changed how we prioritise. We killed 60% of our backlog and doubled our release velocity. Best investment we made pre-seed.",
    name: "Marcus Weber",
    role: "Co-founder",
    company: "StartSmart",
  },
  {
    quote:
      "Vector3 engineers integrated seamlessly. Shakeel's product leadership combined with elite talent meant we went from concept to Marine Drive launch in one quarter.",
    name: "Aisha Rahman",
    role: "Head of Product",
    company: "EVector3",
  },
  {
    quote:
      "His advisory sessions are surgical. Every week we left with a decision made, not another framework to debate. Exactly what a founder needs.",
    name: "James Okafor",
    role: "Founder & CEO",
    company: "Macinno",
  },
];

function TestimonialCard({
  quote,
  name,
  role,
  company,
}: (typeof TESTIMONIALS)[number]) {
  return (
    <article className="mx-auto max-w-3xl px-4 text-center">
      <blockquote className="text-lg font-medium leading-relaxed tracking-tight text-[#111111] sm:text-xl lg:text-2xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <footer className="mt-8">
        <p className="text-sm font-medium text-[#111111]">{name}</p>
        <p className="mt-1 text-xs text-[#6b6b6b]">
          {role} · {company}
        </p>
      </footer>
    </article>
  );
}

export function Testimonials() {
  const slides = TESTIMONIALS.map((t) => (
    <TestimonialCard key={t.name} {...t} />
  ));

  return (
    <section className="border-t border-[#e8e8e8] bg-[#fdfcf8] px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#3b49ad]">
            Testimonials
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-[#111111] sm:text-4xl">
            Feedback from people who
            <br className="hidden sm:block" />
            experienced our services.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative rounded-3xl border border-[#e8e8e8] bg-white py-16 sm:py-20">
            <AutoCarousel
              items={slides}
              interval={5500}
              controlClassName="bg-[#3b49ad]"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
