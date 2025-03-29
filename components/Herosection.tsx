"use client";
import Link from "next/link";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Timeline } from "./ui/timeline";

const timelineData = [
  {
    title: "Started the Journey",
    content: <p className="text-neutral-700 dark:text-neutral-300">Began exploring the world of health-tech innovation.</p>,
  },
  {
    title: "Built the First Prototype",
    content: <p className="text-neutral-700 dark:text-neutral-300">Developed an MVP integrating IoT sensors for health tracking.</p>,
  },
  {
    title: "Launched Beta Version",
    content: <p className="text-neutral-700 dark:text-neutral-300">Released the initial version for user testing and feedback.</p>,
  },
];

function HeroSection() {
  return (
    <div className="w-full relative overflow-hidden m-2.5"> {/* Global Margin */}
      {/* Hero Section */}
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative mx-auto py-10 md:py-0 m-2.5">
        <BackgroundBeams className="absolute inset-0 z-0" />

        <div className="p-4 relative z-10 w-full text-center m-2.5">
          {/* Centered Image */}
          <div className="flex justify-center items-center m-2.5">
            <img
              src="logo.png" // Change to your image path
              alt="Your Logo"
              className="sm:w-90 md:w-90 h-auto mx-auto mt-10 m-2.5" // Adjust width as needed
            />
          </div>

          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto m-2.5">
            Your health, your way — whether it's tracking vitals, connecting with
            doctors, or managing emergencies, we're here to make healthcare
            simple, smart, and accessible for everyone!
          </p>

          <div className="mt-4 m-2.5">
            <Link href={"/explore"}>
              <button className="bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-500 rounded-full px-6 py-2 m-2.5">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="m-2.5">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <Timeline data={timelineData} />
      </div>
      
    </div>
  );
}

export default HeroSection;
