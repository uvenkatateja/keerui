import HeroSection from "@/components/landing/herosection";
import LandingNavbar from "./landing-navbar";
import FeaturesBlock from "../features/features-block";

import LandingFooter from "./landing-footer";

export default function LandingPage() {
  return (
    <div className="bg-black">
      <LandingNavbar />
      <div className="mx-auto max-w-[95.8rem]">
        <div className="mx-auto max-w-7xl px-3 md:px-5 lg:px-8">
          <HeroSection />
          <FeaturesBlock />

        </div>
      </div>
      <LandingFooter />
    </div>
  );
}
