import { RotatingText } from "./RotatingText";

export function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col justify-center px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-4xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
          Shakeel
        </p>
        <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-neutral-950 sm:text-5xl md:text-6xl lg:text-7xl">
          I turn messy ideas
          <br />
          into shipped products.
        </h1>
        <p className="mt-8 text-lg text-neutral-500 sm:text-xl">
          <RotatingText />
          <span className="text-neutral-300"> — </span>
          building with clarity, speed, and craft.
        </p>
      </div>
    </section>
  );
}
