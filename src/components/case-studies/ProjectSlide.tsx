type ProjectSlideProps = {
  variant: "app" | "dashboard" | "team";
  index: number;
  title: string;
};

const PALETTES = {
  app: {
    bg: "from-[#e8dfd0] via-[#f5f0e6] to-[#d4e8e4]",
    accent: "#0d5c5c",
    gold: "#b8956a",
  },
  dashboard: {
    bg: "from-[#e2e8f0] via-[#f0ebe3] to-[#d8e4e8]",
    accent: "#1a4a6e",
    gold: "#c4a052",
  },
  team: {
    bg: "from-[#ede6da] via-[#f7f3ec] to-[#e0d5c8]",
    accent: "#8b5a3c",
    gold: "#b8956a",
  },
};

export function ProjectSlide({ variant, index, title }: ProjectSlideProps) {
  const palette = PALETTES[variant];

  if (variant === "app") {
    return (
      <div
        className={`flex h-full items-center justify-center bg-gradient-to-br ${palette.bg} p-6`}
      >
        <div className="flex items-end gap-4">
          <div className="h-48 w-24 rounded-[1.25rem] border border-white/60 bg-white/80 p-2 shadow-xl backdrop-blur sm:h-56 sm:w-28">
            <div
              className="mb-2 h-14 rounded-lg"
              style={{
                background: `linear-gradient(160deg, ${palette.accent}, ${palette.gold})`,
              }}
            />
            <div className="space-y-1.5">
              <div className="h-1 w-full rounded bg-[#e8e2d8]" />
              <div className="h-1 w-4/5 rounded bg-[#e8e2d8]" />
              <div
                className="mt-3 h-7 rounded-md"
                style={{ backgroundColor: `${palette.accent}33` }}
              />
            </div>
          </div>
          <div className="h-56 w-32 rounded-[1.5rem] border border-white/60 bg-white/90 p-2.5 shadow-2xl sm:h-64 sm:w-36">
            <div className="mb-2 flex gap-1">
              {[0, 1, 2].map((d) => (
                <div key={d} className="h-1.5 w-1.5 rounded-full bg-[#d4ccc0]" />
              ))}
            </div>
            <div
              className="mb-3 h-24 rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${palette.accent}88, ${palette.gold})`,
              }}
            />
            <p className="text-[9px] font-medium uppercase tracking-wider text-[#8b8178]">
              {title}
            </p>
            <p className="mt-0.5 text-[10px] text-[#6b635a]">Screen {index + 1}</p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "dashboard") {
    return (
      <div
        className={`flex h-full flex-col bg-gradient-to-br ${palette.bg} p-5 sm:p-6`}
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[10px] font-medium uppercase tracking-wider text-[#6b635a]">
            {title} · View {index + 1}
          </p>
          <div className="flex gap-1">
            {[palette.accent, palette.gold, "#c17f59"].map((c) => (
              <div
                key={c}
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2">
          <div className="col-span-2 rounded-xl bg-white/80 p-3 shadow-sm">
            <div className="mb-2 h-2 w-1/3 rounded bg-[#e8e2d8]" />
            <div className="flex h-24 items-end gap-1.5">
              {[35, 55, 40, 70, 50, 85, 60].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === 5 ? palette.accent : `${palette.accent}44`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {[palette.accent, palette.gold].map((c, i) => (
              <div key={i} className="flex-1 rounded-xl bg-white/80 p-2 shadow-sm">
                <div className="text-lg font-semibold" style={{ color: c }}>
                  {i === 0 ? "2.4x" : "94%"}
                </div>
                <div className="mt-1 h-1.5 w-full rounded bg-[#e8e2d8]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex h-full flex-col justify-between bg-gradient-to-br ${palette.bg} p-5 sm:p-6`}
    >
      <p className="text-[10px] font-medium uppercase tracking-wider text-[#6b635a]">
        {title} · Collaboration {index + 1}
      </p>
      <div className="flex items-center justify-center gap-3 py-4">
        {["Ally", "Katie", "Hana"].map((name, i) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full text-xs font-medium text-white sm:h-14 sm:w-14"
              style={{
                background: `linear-gradient(135deg, ${palette.accent}, ${palette.gold})`,
                opacity: i <= index ? 1 : 0.35,
              }}
            >
              {name[0]}
            </div>
            <span className="text-[10px] text-[#6b635a]">{name}</span>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-white/80 p-3 shadow-sm">
        <div className="mb-2 flex gap-2">
          {["Pipeline", "CRM", "Ops"].map((tab, i) => (
            <span
              key={tab}
              className="rounded-full px-2 py-0.5 text-[9px] font-medium"
              style={{
                backgroundColor: i === index % 3 ? `${palette.accent}22` : "#f0ebe3",
                color: i === index % 3 ? palette.accent : "#8b8178",
              }}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="space-y-1.5">
          <div className="h-2 w-full rounded bg-[#e8e2d8]" />
          <div className="h-2 w-4/5 rounded bg-[#e8e2d8]" />
          <div className="h-2 w-3/5 rounded bg-[#e8e2d8]" />
        </div>
      </div>
    </div>
  );
}
