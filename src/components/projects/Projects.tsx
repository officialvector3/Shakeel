const PROJECTS = [
  {
    name: "EVector3",
    tagline: "App-based e-bike rental on Marine Drive",
    description:
      "End-to-end mobility product — booking flows, fleet ops, and a consumer app built for high-traffic coastal routes.",
  },
  {
    name: "Solvera",
    tagline: "Digital investment marketplace",
    description:
      "A marketplace connecting investors with vetted opportunities, with compliance-first onboarding and portfolio tooling.",
  },
  {
    name: "Macinno Platform",
    tagline: "BPO & IT sourcing",
    description:
      "Enterprise sourcing platform for BPO and IT services — vendor discovery, RFP workflows, and contract management.",
  },
];

export function Projects() {
  return (
    <section className="border-t border-neutral-100 px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-16 max-w-xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Selected Work
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl">
            Projects
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          {PROJECTS.map((project, i) => (
            <article
              key={project.name}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-xl font-medium text-neutral-950">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">{project.tagline}</p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500">
                  {project.description}
                </p>
              </div>

              <div
                className={`aspect-[16/10] rounded-lg border border-neutral-200 bg-neutral-50 ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="flex h-full flex-col p-4">
                  <div className="mb-3 flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 rounded border border-neutral-100 bg-white p-4">
                    <div className="h-2 w-1/3 rounded bg-neutral-100" />
                    <div className="h-2 w-2/3 rounded bg-neutral-50" />
                    <div className="mt-auto h-16 rounded bg-neutral-50" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
