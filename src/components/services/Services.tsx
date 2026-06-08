const SERVICES = [
  {
    title: "Product Management",
    description:
      "TAM/SAM/SOM sizing, prioritization frameworks, and roadmaps that align teams around what matters most.",
  },
  {
    title: "Team Augmentation",
    description:
      "Top-tier engineering and design talent through Vector3 — embedded teams that ship, not slide decks.",
  },
  {
    title: "Full-Cycle Execution",
    description:
      "From fuzzy concepts to production features. Strategy, specs, build, launch, and iteration — end to end.",
  },
];

export function Services() {
  return (
    <section className="border-t border-neutral-100 px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-16 max-w-xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Services
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl">
            What I bring to the table
          </h2>
        </div>

        <div className="grid gap-px bg-neutral-100 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-4 bg-white p-8 sm:p-10"
            >
              <h3 className="text-lg font-medium text-neutral-950">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
