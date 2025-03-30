"use client";
import HeroSection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import { Theme } from "@/components/Theme";
import FAQSection from "@/components/FAQ";
import { TimelineSection } from "@/components/Timeline";
import { Venue } from "@/components/Venue";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.2]">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>


      <section id="timeline">
        <TimelineSection />
      </section>

      <section id="venue">
        <Venue />
      </section>


      {/* Theme Section */}
      <section id="theme">
        <Theme />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>
    </main>
  );
}
