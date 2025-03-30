"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { motion } from "framer-motion";

function HeroSection() {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const endDate = new Date("April 19, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full relative overflow-hidden m-2.5">
      {/* Hero Section */}
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative mx-auto py-10 md:py-0 m-2.5">
        <BackgroundBeams className="absolute inset-0 z-0" />

        <div className="p-4 relative z-10 w-full text-center m-2.5">
          {/* Centered Image */}
          <div className="flex justify-center items-center m-2.5">
            <img
              src="logo.png" // Change to your image path
              alt="Your Logo"
              className="sm:w-150 md:w-150 h-auto mx-auto mt-10 m-2.5" // Adjust width as needed
            />
          </div>

          {/* Countdown Section - Added below the logo */}
          <div className="mt-8 mb-8">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-semibold text-neutral-300 mb-4"
            >
              Countdown to Hacktopus 2k25
            </motion.h3>
            
            <div className="flex justify-center gap-2 sm:gap-4">
              {/* Days */}
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1d1c20] border border-white/[0.08] rounded-lg p-3 sm:p-4 text-center min-w-[70px]"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {timeLeft.days}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 mt-1">DAYS</div>
              </motion.div>

              {/* Hours */}
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#1d1c20] border border-white/[0.08] rounded-lg p-3 sm:p-4 text-center min-w-[70px]"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {timeLeft.hours}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 mt-1">HOURS</div>
              </motion.div>

              {/* Minutes */}
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#1d1c20] border border-white/[0.08] rounded-lg p-3 sm:p-4 text-center min-w-[70px]"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {timeLeft.minutes}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 mt-1">MINUTES</div>
              </motion.div>

              {/* Seconds */}
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#1d1c20] border border-white/[0.08] rounded-lg p-3 sm:p-4 text-center min-w-[70px]"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {timeLeft.seconds}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 mt-1">SECONDS</div>
              </motion.div>
            </div>
          </div>

          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto m-2.5">
            {/* Your existing content here */}
          </p>

          <div className="mt-4 m-2.5">
            {/* Your existing content here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;