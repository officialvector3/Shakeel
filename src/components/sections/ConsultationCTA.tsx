import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ConsultationCTA() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#111111] via-[#1e2560] to-[#4a58c4] px-8 py-16 text-center sm:px-16 sm:py-20">
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
                  className="bg-[#5a6fd6] hover:bg-[#6b7fe6]"
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
