import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/HeroSection";
import { WhyOneEcosystemSection } from "@/components/sections/WhyOneEcosystemSection";
import { WaysInSection } from "@/components/sections/WaysInSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { ImpactStatsSection } from "@/components/sections/ImpactStatsSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { ExpertsSection } from "@/components/sections/ExpertsSection";
// import { WhoIsThisForSection } from "@/components/sections/WhoIsThisForSection"; // hidden for now
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
// import { AppShowcaseSection } from "@/components/sections/AppShowcaseSection"; // hidden for now
import { SmallReadsSection } from "@/components/sections/SmallReadsSection";
import { GetStartedCtaSection } from "@/components/sections/GetStartedCtaSection";

const TITLE = "Mind A Lot | Complete Mental Wellness Infrastructure";
const DESCRIPTION =
  "Enterprise mental wellness infrastructure powered by 80+ global counselors across India, USA, Canada, Dubai, and Australia — 24/7 boundary-less support across time zones.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyOneEcosystemSection />
      <WaysInSection />
      <DifferentiatorsSection />
      <FounderSection />
      <ImpactStatsSection />
      <ExpertsSection />
      {/* <WhoIsThisForSection /> hidden for now */}
      <TestimonialsSection />
      {/* <AppShowcaseSection /> hidden for now */}
      <SmallReadsSection />
      <GetStartedCtaSection />
    </>
  );
}
