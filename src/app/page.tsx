"use client";

import StatsSection from "@/components/landing-page-components/StatsSection";
import OurMission from "@/components/landing-page-components/OurMission";
import HeroSection from "@/components/landing-page-components/HeroSection";
import SocialMediaSection from '@/components/landing-page-components/SocialSection';

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <OurMission />
      <StatsSection />
      <SocialMediaSection />
    </div>
  );
}
