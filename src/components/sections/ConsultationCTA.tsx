import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ConsultationCTA() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1c1a18] via-[#0d5c5c] to-[#1a4a6e] px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)]" />

            <div className="relative z-10">
              <h2 className="mx-auto max-w-3xl text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                80% of features are rarely or never used by users.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-base">
                We&apos;ll help you discover what to build — before coding it.
              </p>
              <div className="mt-8">
                <MagneticButton
                  href="mailto:hello@shakeel.dev"
                  className="bg-[#b8956a] hover:bg-[#c4a052]"
                >
                  Free 20min Consultation
                </MagneticButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
