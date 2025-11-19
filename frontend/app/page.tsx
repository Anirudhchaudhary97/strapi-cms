import { HeroSection } from "@components/sections/hero";
import { TrustBadgesSection } from "@components/sections/trust-badges";
import { ServicesOverviewSection } from "@components/sections/services-overview";
import { WhySgmsSection } from "@components/sections/why-sgms";
import { CaseStudyHighlightSection } from "@components/sections/case-study-highlight";
import { CtaBannerSection } from "@components/sections/cta-banner";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustBadgesSection />
      <ServicesOverviewSection />
      <WhySgmsSection />
      <CaseStudyHighlightSection />
      <CtaBannerSection />
    </div>
  );
}
