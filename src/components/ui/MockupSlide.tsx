type MockupSlideProps = {
  variant: "mobile" | "dashboard" | "marketplace" | "enterprise";
  accent?: string;
};

export function MockupSlide({ variant, accent = "#3b49ad" }: MockupSlideProps) {
  if (variant === "mobile") {
    return (
      <div className="flex h-full items-center justify-center gap-4 p-6">
        <div className="h-52 w-28 rounded-2xl border border-[#e0e0e0] bg-white p-2 shadow-lg sm:h-64 sm:w-32">
          <div
            className="mb-2 h-16 rounded-lg"
            style={{ background: `linear-gradient(135deg, ${accent}22, ${accent}44)` }}
          />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-[#f0f0f0]" />
            <div className="h-1.5 w-3/4 rounded bg-[#f0f0f0]" />
            <div className="mt-3 h-8 rounded-md" style={{ backgroundColor: `${accent}33` }} />
          </div>
        </div>
        <div className="h-60 w-32 rounded-2xl border border-[#e0e0e0] bg-white p-2 shadow-xl sm:h-72 sm:w-36">
          <div className="mb-2 flex gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-[#e0e0e0]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#e0e0e0]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#e0e0e0]" />
          </div>
          <div
            className="mb-3 h-20 rounded-lg"
            style={{ background: `linear-gradient(160deg, ${accent}, ${accent}88)` }}
          />
          <div className="space-y-2">
            <div className="h-2 w-full rounded bg-[#f0f0f0]" />
            <div className="h-2 w-5/6 rounded bg-[#f0f0f0]" />
            <div className="h-2 w-2/3 rounded bg-[#f0f0f0]" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "dashboard") {
    return (
      <div className="flex h-full flex-col gap-3 p-6">
        <div className="flex gap-3">
          <div className="h-16 flex-1 rounded-xl bg-white p-3 shadow-sm">
            <div className="h-2 w-1/2 rounded bg-[#f0f0f0]" />
            <div className="mt-2 text-2xl font-semibold" style={{ color: accent }}>
              30%
            </div>
          </div>
          <div className="h-16 flex-1 rounded-xl bg-white p-3 shadow-sm">
            <div className="h-2 w-1/2 rounded bg-[#f0f0f0]" />
            <div className="mt-2 text-2xl font-semibold" style={{ color: accent }}>
              2.4x
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{ height: `${h}%`, backgroundColor: `${accent}${i === 5 ? "" : "44"}` }}
              />
            ))}
          </div>
          <div className="h-2 w-1/3 rounded bg-[#f0f0f0]" />
        </div>
      </div>
    );
  }

  if (variant === "marketplace") {
    return (
      <div className="grid h-full grid-cols-2 gap-3 p-6">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl bg-white p-3 shadow-sm">
            <div
              className="mb-2 h-10 rounded-lg"
              style={{ background: `linear-gradient(135deg, ${accent}22, ${accent}55)` }}
            />
            <div className="h-1.5 w-full rounded bg-[#f0f0f0]" />
            <div className="mt-1 h-1.5 w-2/3 rounded bg-[#f0f0f0]" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col gap-3 p-6">
      <div className="flex gap-2">
        {["Strategy", "Discovery", "Delivery"].map((label) => (
          <span
            key={label}
            className="rounded-full px-3 py-1 text-[10px] font-medium"
            style={{ backgroundColor: `${accent}18`, color: accent }}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="rounded-lg"
            style={{
              background: i % 2 === 0 ? `${accent}22` : `${accent}11`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
