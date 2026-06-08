import { FadeIn } from "@/components/ui/FadeIn";

const LOGOS = ["Vector3", "Found.", "taxfix", "desertcart", "StartSmart", "Geld für eAuto"];

const EVIDENCE = [
  {
    metric: "75%",
    title: "Reduction in the risk of failure",
    body: "De-risk your product investment by validating assumptions before a single line of code ships.",
  },
  {
    metric: "2x",
    title: "Faster time-to-market",
    body: "Embedded teams and sharp roadmaps compress the gap between strategy deck and production release.",
  },
  {
    metric: "83%",
    title: "Features rarely used by users",
    body: "We help you discover what to build — and what to kill — before engineering burns the budget.",
  },
];

export function SocialProof() {
  return (
    <section className="bg-[#f5f0e6] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-12 text-center">
          <p className="text-sm text-[#6b6b6b]">
            Trusted by startups &amp; product organizations worldwide
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-base font-medium tracking-tight text-[#111111]/70 transition-colors hover:text-[#111111] sm:text-lg"
              >
                {logo}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1c1a18] via-[#0d5c5c] to-[#1a4a6e] px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />

            <div className="relative z-10 mb-12 text-center lg:mb-16">
              <h2 className="mx-auto max-w-3xl text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Not all features add value,
                <br />
                but each feature adds costs.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-base">
                Start building products based on evidence, not a hunch.
              </p>
            </div>

            <div className="relative z-10 grid gap-4 sm:grid-cols-3">
              {EVIDENCE.map((item, i) => (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white p-6 sm:p-8"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <p className="text-3xl font-semibold tracking-tight text-[#0d5c5c] sm:text-4xl">
                    {item.metric}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold text-[#0d5c5c]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <p className="relative z-10 mt-8 text-xs text-white/40">
              Research studies conducted by Pendo, Nielsen Norman Group, and MIT.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
