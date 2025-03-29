"use client"
import HeroSection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import { Team } from "@/components/Team";
import { Theme } from "@/components/Theme";
// import { Timeline } from "@/components/Timeline";
export default function Home(){
  return (
    <main className="min-h screen bg-black/[0.95] antialiased bg-grid-white/[0.2]">
      <Navbar />
      <HeroSection />
      <Theme />
      <Team />
    </main>
    
  )
}