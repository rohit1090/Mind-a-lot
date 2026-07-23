import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/HeroSection";
import { GlobalPresenceSection } from "@/components/sections/GlobalPresenceSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { ExpertsSection } from "@/components/sections/ExpertsSection";
import { TaglineSection } from "@/components/sections/TaglineSection";
import { WhoIsThisForSection } from "@/components/sections/WhoIsThisForSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AppShowcaseSection } from "@/components/sections/AppShowcaseSection";
import { SmallReadsSection } from "@/components/sections/SmallReadsSection";

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
      <GlobalPresenceSection />
      <DifferentiatorsSection />
      <StepsSection />
      <ExpertsSection />
      <TaglineSection />
      <WhoIsThisForSection />
      <TestimonialsSection />
      <AppShowcaseSection />
      <SmallReadsSection />
    </>
  );
}
