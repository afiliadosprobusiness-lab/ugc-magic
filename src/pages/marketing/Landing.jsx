import React from 'react';
import Navbar from '../../components/marketing/Navbar';
import Hero from '../../components/marketing/Hero';
import SocialProof from '../../components/marketing/SocialProof';
import PainSection from '../../components/marketing/PainSection';
import Features from '../../components/marketing/Features';
import HowItWorks from '../../components/marketing/HowItWorks';
import Benefits from '../../components/marketing/Benefits';
import ProofResults from '../../components/marketing/ProofResults';
import Pricing from '../../components/marketing/Pricing';
import Footer from '../../components/marketing/Footer';

export default function Landing() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-vyra-black text-white selection:bg-glow-cyan/30">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <PainSection />
        <Features />
        <HowItWorks />
        <Benefits />
        <ProofResults />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
