import { CaseStudies } from "@/components/sections/CaseStudies";
import { ContentHub } from "@/components/sections/ContentHub";
import { LetMeFix } from "@/components/sections/LetMeFix";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <LetMeFix />
        <CaseStudies />
        <ContentHub />
      </main>
      <Footer />
    </>
  );
}
