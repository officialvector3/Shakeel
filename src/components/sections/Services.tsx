import { FadeIn } from "@/components/ui/FadeIn";
import { Compass, Layers, Users } from "lucide-react";
import type { ReactNode } from "react";

type ServiceDetail = {
  icon: ReactNode;
  label: string;
  content: string;
};

type Service = {
  eyebrow: string;
  title: string;
  details: ServiceDetail[];
  visual: "workshop" | "transform" | "advisory";
  reverse: boolean;
};

const SERVICES: Service[] = [
  {
    eyebrow: "For Startups & Product Teams",
    title: "Product Workshops",
    details: [
      {
        icon: <Compass className="h-4 w-4" strokeWidth={1.5} />,
        label: "Scope",
        content:
          "Intensive 1–3 day sessions to align stakeholders, map assumptions, and define the highest-leverage product bets.",
      },
      {
        icon: <Layers className="h-4 w-4" strokeWidth={1.5} />,
        label: "Agenda",
        content:
          "Discovery sprints, opportunity sizing, roadmap prioritisation, and go-to-market alignment — tailored to your stage.",
      },
      {
        icon: <Users className="h-4 w-4" strokeWidth={1.5} />,
        label: "Outcomes",
        content:
          "A validated product thesis, prioritised backlog, and a team that leaves knowing exactly what to build next.",
      },
    ],
    visual: "workshop",
    reverse: false,
  },
  {
    eyebrow: "For Scaling Organizations",
    title: "Product Model Transformation",
    details: [
      {
        icon: <Compass className="h-4 w-4" strokeWidth={1.5} />,
        label: "Scope",
        content:
          "Restructure how your org discovers, decides, and delivers — from waterfall handoffs to continuous product loops.",
      },
      {
        icon: <Layers className="h-4 w-4" strokeWidth={1.5} />,
        label: "Agenda",
        content:
          "Operating model design across Strategy, Discovery, and Delivery — with clear ownership and measurable cadences.",
      },
      {
        icon: <Users className="h-4 w-4" strokeWidth={1.5} />,
        label: "Outcomes",
        content:
          "Faster cycle times, fewer wasted features, and a product org that operates like a startup inside your company.",
      },
    ],
    visual: "transform",
    reverse: true,
  },
  {
    eyebrow: "For Founders & Leaders",
    title: "Product Advisory & Mentoring",
    details: [
      {
        icon: <Compass className="h-4 w-4" strokeWidth={1.5} />,
        label: "Scope",
        content:
          "Ongoing strategic partnership — board-level product counsel, hiring support, and Vector3 team augmentation.",
      },
      {
        icon: <Layers className="h-4 w-4" strokeWidth={1.5} />,
        label: "Agenda",
        content:
          "Weekly or bi-weekly sessions covering roadmap, metrics, team health, fundraising narrative, and GTM motion.",
      },
      {
        icon: <Users className="h-4 w-4" strokeWidth={1.5} />,
        label: "Outcomes",
        content:
          "A founder who makes sharper bets, a team that ships with confidence, and investors who see product discipline.",
      },
    ],
    visual: "advisory",
    reverse: false,
  },
];

function ServiceVisual({ type }: { type: Service["visual"] }) {
  if (type === "workshop") {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-[#e8eef9] to-[#d4dcf5]">
        <div className="absolute inset-0 flex items-end justify-center p-8">
          <div className="flex -space-x-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-24 w-20 rounded-2xl border-2 border-white bg-gradient-to-b from-[#3b49ad]/20 to-[#3b49ad]/40 shadow-lg sm:h-32 sm:w-24"
                style={{ transform: `translateY(${i * -4}px) rotate(${(i - 1.5) * 4}deg)` }}
              />
            ))}
          </div>
        </div>
        <div className="absolute left-6 top-6 rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium text-[#3b49ad] backdrop-blur">
          Collaborative session
        </div>
      </div>
    );
  }

  if (type === "transform") {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#f5f5f3]">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Strategy", color: "#3b49ad" },
              { label: "Discovery", color: "#5a6fd6" },
              { label: "Delivery", color: "#2d3a8c" },
            ].map((cube, i) => (
              <div key={cube.label} className="flex flex-col items-center gap-2">
                <div
                  className="h-16 w-16 rounded-xl shadow-md sm:h-20 sm:w-20"
                  style={{
                    background: `linear-gradient(135deg, ${cube.color}44, ${cube.color})`,
                    transform: `translateY(${i % 2 === 0 ? 0 : 12}px)`,
                  }}
                />
                <span className="text-[10px] font-medium text-[#6b6b6b]">
                  {cube.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-[#111111] to-[#2d3a8c]">
      <div
        className="absolute inset-4 rounded-2xl bg-white/10 backdrop-blur"
        style={{ clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)" }}
      />
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-xs text-white/60">1:1 Advisory</p>
        <p className="text-lg font-medium text-white">Founder partnership</p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-[#e8e8e8] px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#3b49ad]">
            Services
          </p>
          <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.02em] text-[#111111] sm:text-4xl">
            How I help teams build the right thing.
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-28 lg:gap-36">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={0.06 * i}>
              <article
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                  service.reverse ? "" : ""
                }`}
              >
                <div className={service.reverse ? "lg:order-2" : ""}>
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#3b49ad]">
                    {service.eyebrow}
                  </p>
                  <h3 className="mb-8 text-2xl font-medium tracking-tight text-[#111111] sm:text-3xl">
                    {service.title}
                  </h3>

                  <div className="flex flex-col gap-6">
                    {service.details.map((detail) => (
                      <div key={detail.label} className="flex gap-4">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e8eef9] text-[#3b49ad]">
                          {detail.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#111111]">
                            {detail.label}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-[#6b6b6b]">
                            {detail.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={service.reverse ? "lg:order-1" : ""}>
                  <ServiceVisual type={service.visual} />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
