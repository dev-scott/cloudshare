import React from "react";
import MaxWidthSection from "../components/MaxWidthSection";
import HeroSection from "../components/landing/HeroSection";
import PricingSection from "../components/landing/PricingSection";
import Footer from "../components/landing/Footer";
import Navbar from "../components/Navbar/Navbar";

const Landing = () => {
  return (
    <div className="h-screen">
      <Navbar />

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
