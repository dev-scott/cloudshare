import React from "react";
import MaxWidthSection from "../components/MaxWidthSection";
import HeroSection from "../components/landing/HeroSection";
import PricingSection from "../components/landing/PricingSection";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <div className="h-screen">
      <MaxWidthSection className=" ">
        <HeroSection />
        {/* <FeaturesSection /> */}
        <PricingSection />
      </MaxWidthSection>
      <Footer />
    </div>
  );
};

export default Landing;
