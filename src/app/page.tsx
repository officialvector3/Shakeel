import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/Projects";
import { Services } from "@/components/services/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <main>
        <Hero />
        <Services />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
