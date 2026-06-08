import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ContentHub } from "@/components/sections/ContentHub";
import { FeaturedCaseStudies } from "@/components/sections/FeaturedCaseStudies";
import { LetMeFix } from "@/components/sections/LetMeFix";
import { Services } from "@/components/sections/Services";
import { SocialProof } from "@/components/sections/SocialProof";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SocialProof />
        <LetMeFix />
        <FeaturedCaseStudies />
        <Services />
        <ConsultationCTA />
        <Testimonials />
        <ContentHub />
      </main>
      <Footer />
    </>
  );
}
