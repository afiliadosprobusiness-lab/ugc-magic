import React from 'react';
import Navbar from '../../components/marketing/Navbar';
import Hero from '../../components/marketing/Hero';
import SocialProof from '../../components/marketing/SocialProof';
import AboutUsSection from '../../components/ui/about-us-section';
import Benefits from '../../components/marketing/Benefits';
import TargetedUseCases from '../../components/marketing/TargetedUseCases';
import WhatVyraReplaces from '../../components/marketing/WhatVyraReplaces';
import ProofResults from '../../components/marketing/ProofResults';
import DashboardPreview from '../../components/marketing/DashboardPreview';
import Pricing from '../../components/marketing/Pricing';
import FAQSection from '../../components/marketing/FAQSection';
import FinalCTA from '../../components/marketing/FinalCTA';
import Footer from '../../components/marketing/Footer';
export default function Landing() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-vyra-black text-white selection:bg-glow-cyan/30">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <AboutUsSection />
        <Benefits />
        <TargetedUseCases />
        <WhatVyraReplaces />
        <ProofResults />
        <DashboardPreview />
        <Pricing />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
